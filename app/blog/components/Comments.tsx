'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import { formatDate } from '../utils/formatDate'

export interface Comment {
  id: string
  post_id: string
  author_id: string
  author_name: string
  body: string
  created_at: string
}

interface CommentsProps {
  postId: string
}

export default function Comments({ postId }: CommentsProps) {
  const [user, setUser] = useState<User | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [magicEmail, setMagicEmail] = useState('')
  const [magicSent, setMagicSent] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/blog/${postId}/comments`)
        if (res.ok) {
          const data = await res.json()
          setComments(data)
        }
      } catch {
        setError('Failed to load comments')
      } finally {
        setLoading(false)
      }
    }
    fetchComments()
  }, [postId])

  const handleSignInWithMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    const email = magicEmail.trim()
    if (!email) return
    setAuthLoading(true)
    setError(null)
    try {
      const { error: err } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: typeof window !== 'undefined' ? window.location.href : undefined },
      })
      if (err) setError(err.message)
      else setMagicSent(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to send link')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const text = body.trim()
    if (!text || !user) return
    setSubmitting(true)
    setError(null)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) {
        setError('Session expired. Please sign in again.')
        setSubmitting(false)
        return
      }
      const res = await fetch(`/api/blog/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ body: text }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Failed to post comment')
        setSubmitting(false)
        return
      }
      setComments((prev) => [...prev, data])
      setBody('')
    } catch {
      setError('Failed to post comment')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-10 pt-8 border-t border-zinc-300 dark:border-zinc-700"
      aria-label="Comments"
    >
      <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
        Comments
      </h2>

      {error && (
        <p className="mb-4 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      {!user ? (
        <div className="my-8 overflow-hidden rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-900/50 shadow-sm shadow-zinc-200/50 dark:shadow-none ring-1 ring-zinc-200/60 dark:ring-zinc-700/60">
          <div className="border-l-4 border-[#AD8F68] dark:border-yellow-main bg-zinc-50/80 dark:bg-zinc-800/40 px-6 py-4 sm:px-8 sm:py-6">
            <div className="flex gap-4">
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-lg bg-[#AD8F68]/10 dark:bg-yellow-main/10 items-center justify-center" aria-hidden>
                <span className="icon-[mdi--email-outline] text-xl text-[#AD8F68] dark:text-yellow-main" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
                  Join the conversation
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {magicSent
                    ? "We sent a sign-in link to your inbox. Click it to sign in and comment."
                    : "Sign in with your email. We'll send you a one-time link, no password needed."}
                </p>
                {!magicSent && (
                  <form onSubmit={handleSignInWithMagicLink} className="mt-5">
                    <label htmlFor="comment-signin-email" className="sr-only">
                      Email address
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="comment-signin-email"
                        type="email"
                        value={magicEmail}
                        onChange={(e) => setMagicEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        disabled={authLoading}
                        className="min-w-0 flex-1 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2.5 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#AD8F68]/50 dark:focus:ring-yellow-main/50 focus:border-[#AD8F68] dark:focus:border-yellow-main transition-colors disabled:opacity-60"
                      />
                      <button
                        type="submit"
                        disabled={authLoading || !magicEmail.trim()}
                        className="shrink-0 rounded-lg bg-[#AD8F68] dark:bg-green-main px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#AD8F68]/50 dark:focus:ring-yellow-main/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 transition-opacity disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {authLoading ? 'Sending…' : 'Send sign-in link'}
                      </button>
                    </div>
                  </form>
                )}
                {magicSent && (
                  <p className="mt-4 text-sm font-medium text-[#AD8F68] dark:text-yellow-main">
                    Check your email to continue.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Signed in as {user.user_metadata?.full_name || user.user_metadata?.name || user.email}</span>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-zinc-600 dark:text-zinc-300 hover:underline"
            >
              Sign out
            </button>
          </div>
          <form onSubmit={handleSubmit} className="mb-8">
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write a comment..."
              rows={3}
              className="w-full px-3 py-2 rounded-md bg-white dark:bg-background-dark-tertiary border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 resize-y mb-2"
              disabled={submitting}
            />
            <button
              type="submit"
              disabled={submitting || !body.trim()}
              className="px-4 py-2 rounded-md bg-[#AD8F68] dark:bg-green-main text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? 'Posting…' : 'Post comment'}
            </button>
          </form>
        </>
      )}

      {loading ? (
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Loading comments…</p>
      ) : comments.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">No comments yet. Be the first to comment.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="py-4 border-b border-zinc-200 dark:border-zinc-700 last:border-0"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {comment.author_name}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {formatDate(comment.created_at)}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">
                {comment.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  )
}
