import { NextRequest, NextResponse } from 'next/server'

const BEEHIIV_API_URL = 'https://api.beehiiv.com/v2'

export async function POST(request: NextRequest) {
  const apiKey = process.env.BEEHIIV_API_KEY
  let publicationId = process.env.BEEHIIV_PUBLICATION_ID?.trim()

  if (!apiKey || !publicationId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID')
    return NextResponse.json(
      { error: 'Newsletter signup is not configured.' },
      { status: 500 }
    )
  }

  // Beehiiv API expects the publication ID with "pub_" prefix
  if (!publicationId.startsWith('pub_')) {
    publicationId = `pub_${publicationId}`
  }

  let body: { email?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!email) {
    return NextResponse.json(
      { error: 'Email is required.' },
      { status: 400 }
    )
  }

  const res = await fetch(
    `${BEEHIIV_API_URL}/publications/${publicationId}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        send_welcome_email: false,
        referring_site: request.headers.get('origin') || undefined,
      }),
    }
  )

  const data = await res.json().catch(() => ({})) as { message?: string; errors?: Array<{ message?: string }> }

  if (!res.ok) {
    if (res.status === 429) {
      return NextResponse.json(
        { error: 'Too many signup attempts. Please try again later.' },
        { status: 429 }
      )
    }
    if (res.status === 422 && data?.errors) {
      const message = Array.isArray(data.errors)
        ? data.errors.map((e) => e.message).filter(Boolean).join(' ') || 'Invalid email or already subscribed.'
        : 'Invalid email or already subscribed.'
      return NextResponse.json(
        { error: message },
        { status: 422 }
      )
    }
    if (res.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key. Check your Beehiiv API key in .env.local.' },
        { status: 500 }
      )
    }
    if (res.status === 404) {
      return NextResponse.json(
        { error: 'Publication not found. Check BEEHIIV_PUBLICATION_ID in .env.local.' },
        { status: 500 }
      )
    }
    const message = data?.message || 'Could not subscribe. Please try again.'
    return NextResponse.json(
      { error: message },
      { status: res.status }
    )
  }

  return NextResponse.json({ success: true })
}
