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
const NewsletterSignup = ({ variant = 'default' }: { variant?: 'default' | 'footer' }) => {
  const isFooter = variant === 'footer'
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const notifySuccess = () =>
    toast("You're on the list! I'll be in touch when the newsletter launches.", {
      position: 'bottom-center',
      icon: <Icon icon="line-md:email-check-twotone" className="ml-[4px] h-[20px] w-[20px]" />,
      style: {
        borderRadius: '10px',
        background: '#174526',
        color: '#fff',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.05em',
      },
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    // Simulate a short delay; replace with your API call when you have a newsletter provider
    setTimeout(() => {
      setSubmitted(true)
      setEmail('')
      notifySuccess()
      setIsSubmitting(false)
    }, 400)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={isFooter ? 'py-2 px-3 w-full max-w-full min-w-0' : 'pt-10 pb-8 px-4 sm:px-6 md:px-8 w-full max-w-full min-w-0 bg-background-light-secondary dark:bg-background-dark-secondary shadow-xl'}
      >
        <h2 className={isFooter ? 'text-sm font-bold mb-1 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main' : 'text-3xl font-bold mb-2 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main'}>
          Newsletter
        </h2>
        <p className={isFooter ? 'roboto-mine text-black dark:text-gray-200 tracking-wider text-xs' : 'roboto-mine text-black dark:text-gray-200 tracking-wider'}>
          You're on the list. I'll email you when the newsletter launches.
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
      className={isFooter ? 'py-1.5 px-3 w-full max-w-full min-w-0 sm:max-w-md' : 'pt-10 pb-8 px-4 sm:px-6 md:px-8 w-full max-w-full min-w-0 bg-background-light-secondary dark:bg-background-dark-secondary shadow-xl'}
    >
      {/* <motion.h2
        initial={isFooter ? undefined : { opacity: 0, x: -20 }}
        whileInView={isFooter ? undefined : { opacity: 1, x: 0 }}
        viewport={isFooter ? undefined : { once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={isFooter ? 'text-sm font-bold mb-1 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main' : 'text-3xl font-bold mb-4 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main'}
      >
        Newsletter
      </motion.h2> */}
      <motion.p
        initial={isFooter ? undefined : { opacity: 0 }}
        whileInView={isFooter ? undefined : { opacity: 1 }}
        viewport={isFooter ? undefined : { once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={isFooter ? 'roboto-mine text-black dark:text-gray-200 tracking-wider mb-1.5 text-xs' : 'roboto-mine text-black dark:text-gray-200 tracking-wider mb-6 max-w-xl'}
      >
        Get notified when my newsletter launches. No spam—just updates.
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        initial={isFooter ? undefined : { opacity: 0 }}
        whileInView={isFooter ? undefined : { opacity: 1 }}
        viewport={isFooter ? undefined : { once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`tracking-wider roboto-mine flex flex-col gap-2 min-w-0 ${isFooter ? 'sm:flex-row sm:gap-2' : 'sm:flex-row gap-4'}`}
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
            className={isFooter ? 'input text-sm bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white w-full input-sm' : 'input text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white w-full'}
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
          className={isFooter ? 'btn btn-sm bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white border-none font-thin uppercase tracking-[0.2em] text-[0.65rem] md:text-[0.7rem] disabled:opacity-70 disabled:cursor-not-allowed shrink-0' : 'btn bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white border-none font-thin uppercase tracking-[0.28em] text-[0.72rem] md:text-xs disabled:opacity-70 disabled:cursor-not-allowed self-end sm:self-auto shrink-0'}
        >
          {isSubmitting ? 'Subscribing…' : 'Notify me'}
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default NewsletterSignup
