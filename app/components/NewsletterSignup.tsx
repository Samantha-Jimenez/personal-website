'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'

/**
 * Newsletter signup form. When you're ready to send emails, you can wire this to:
 * - A provider (Mailchimp, ConvertKit, Resend, etc.) via an API route
 * - Or keep the current behavior and collect emails in your backend/database
 */
const NewsletterSignup = ({
  variant = 'default',
  onSuccess,
}: {
  variant?: 'default' | 'footer' | 'modal'
  onSuccess?: () => void
}) => {
  const isFooter = variant === 'footer'
  const isModal = variant === 'modal'
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const notifySuccess = () =>
    toast("You're on the list! I'll be in touch when the newsletter launches.", {
      position: 'bottom-center',
      icon: <Icon icon="line-md:email-plus-twotone" className="ml-[4px] h-[30px] w-[45px]" />,
      style: {
        borderRadius: '10px',
        background: '#174526',
        color: '#fff',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.05em',
      },
    })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        toast.error((data as { error?: string }).error ?? 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setEmail('')
      notifySuccess()
      onSuccess?.()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={
          isFooter
            ? 'py-2 px-3 w-full max-w-full min-w-0'
            : isModal
              ? 'pt-2 pb-1 px-0 w-full max-w-full min-w-0'
              : 'pt-10 pb-8 px-4 sm:px-6 md:px-8 w-full max-w-full min-w-0 bg-background-light-secondary dark:bg-background-dark-secondary shadow-xl'
        }
      >
        <h2
          className={
            isFooter
              ? 'text-sm font-bold mb-1 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main'
              : isModal
                ? 'text-lg font-bold mb-1 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main'
                : 'text-3xl font-bold mb-2 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main'
          }
        >
          Newsletter
        </h2>
        <p
          className={
            isFooter
              ? 'roboto-mine text-black dark:text-gray-200 tracking-wider text-xs'
              : isModal
                ? 'roboto-mine text-black dark:text-gray-200 tracking-wider text-sm'
                : 'roboto-mine text-black dark:text-gray-200 tracking-wider'
          }
        >
          You&apos;re on the list. I&apos;ll email you when the newsletter launches.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={isFooter ? undefined : { opacity: 0, y: 30 }}
      whileInView={isFooter ? undefined : { opacity: 1, y: 0 }}
      viewport={isFooter ? undefined : { once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={
        isFooter
          ? 'py-1.5 px-3 w-full max-w-full min-w-0 sm:max-w-md'
          : isModal
            ? 'py-1 px-0 w-full max-w-full min-w-0'
            : 'pt-10 pb-8 px-4 sm:px-6 md:px-8 w-full max-w-full min-w-0 bg-background-light-secondary dark:bg-background-dark-secondary shadow-xl'
      }
    >
      {isModal && (
        <h2 className="text-5xl font-bold mb-4 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main">
          Newsletter
        </h2>
      )}
      <motion.p
        initial={isFooter ? undefined : { opacity: 0 }}
        whileInView={isFooter ? undefined : { opacity: 1 }}
        viewport={isFooter ? undefined : { once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={
          isFooter
            ? 'roboto-mine text-black dark:text-gray-200 tracking-wider mb-1.5 text-xs'
            : isModal
              ? 'roboto-mine text-black dark:text-gray-200 tracking-wider mb-3 text-sm'
              : 'roboto-mine text-black dark:text-gray-200 tracking-wider mb-6 max-w-xl'
        }
      >
        Get notified when my newsletter launches. No spam. Just updates.
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        initial={isFooter ? undefined : { opacity: 0 }}
        whileInView={isFooter ? undefined : { opacity: 1 }}
        viewport={isFooter ? undefined : { once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`tracking-wider roboto-mine flex flex-col gap-2 min-w-0 ${isFooter ? 'sm:flex-row sm:gap-2' : isModal ? 'sm:flex-row gap-3' : 'sm:flex-row gap-4'}`}
      >
        <div className={isFooter ? 'form-control flex-1 min-w-0' : 'form-control flex-1'}>
          <label className="label sr-only">
            <span className="label-text text-black dark:text-white uppercase tracking-[0.28em] text-[0.72rem] md:text-xs">
              Email
            </span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={
              isFooter
                ? 'input text-sm bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white w-full input-sm'
                : isModal
                  ? 'input text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white w-full'
                  : 'input text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white w-full'
            }
            autoComplete="email"
            required
            disabled={isSubmitting}
            aria-label="Email address for newsletter"
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
          whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
          className={
            isFooter
              ? 'btn btn-sm bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white border-none font-thin uppercase tracking-[0.2em] text-[0.65rem] md:text-[0.7rem] disabled:opacity-70 disabled:cursor-not-allowed shrink-0'
              : isModal
                ? 'btn bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white border-none font-thin uppercase tracking-[0.28em] text-[0.72rem] md:text-xs disabled:opacity-70 disabled:cursor-not-allowed shrink-0'
                : 'btn bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white border-none font-thin uppercase tracking-[0.28em] text-[0.72rem] md:text-xs disabled:opacity-70 disabled:cursor-not-allowed self-end sm:self-auto shrink-0'
          }
        >
          {isSubmitting ? 'Subscribing…' : 'Notify me'}
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default NewsletterSignup
