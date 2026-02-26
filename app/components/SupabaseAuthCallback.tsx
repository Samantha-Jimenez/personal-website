'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

/**
 * When the user returns from a magic link (or OAuth), Supabase redirects with
 * access_token and refresh_token in the URL hash. We must read the hash,
 * set the session, and clear the hash so the session is persisted and the
 * URL is clean. This component runs on every load so we capture the callback
 * no matter which page they land on.
 */
export default function SupabaseAuthCallback() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash?.slice(1)
    if (!hash) return
    const params = new URLSearchParams(hash)
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')
    if (!access_token || !refresh_token) return

    supabase.auth
      .setSession({ access_token, refresh_token })
      .then(() => {
        // Remove hash from URL without reload
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      })
      .catch((err) => {
        console.error('Supabase auth callback:', err)
      })
  }, [])

  return null
}
