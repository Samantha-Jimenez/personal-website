import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, getUserFromRequest } from '@/lib/supabase/server'

export interface CommentRow {
  id: string
  post_id: string
  commenter_id: string
  commenter_email: string
  commenter_name: string
  body: string
  created_at: string
}

/** GET /api/blog/[postId]/comments — list comments for a post */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params
  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('comments')
    .select('id, post_id, commenter_id, commenter_email, commenter_name, body, created_at')
    .eq('post_id', postId)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Comments GET error:', error)
    return NextResponse.json({ error: 'Failed to load comments' }, { status: 500 })
  }

  return NextResponse.json(data as CommentRow[])
}

/** POST /api/blog/[postId]/comments — add a comment (requires auth) */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params
  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 })
  }

  const user = await getUserFromRequest(request)
  if (!user) {
    return NextResponse.json({ error: 'Sign in to comment' }, { status: 401 })
  }

  let body: { body?: string; commenter_name?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const text = typeof body.body === 'string' ? body.body.trim() : ''
  if (!text) {
    return NextResponse.json({ error: 'Comment text is required' }, { status: 400 })
  }

  const commenterName =
    (typeof body.commenter_name === 'string' && body.commenter_name.trim()) ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    'Anonymous'

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('comments')
    .insert({
      post_id: postId,
      commenter_id: user.id,
      commenter_email: user.email ?? '',
      commenter_name: commenterName,
      body: text,
    })
    .select('id, post_id, commenter_id, commenter_email, commenter_name, body, created_at')
    .single()

  if (error) {
    console.error('Comments POST error:', error)
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 })
  }

  return NextResponse.json(data as CommentRow, { status: 201 })
}
