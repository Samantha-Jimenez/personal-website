'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import NewsletterSignup from './NewsletterSignup'

const STORAGE_KEY = 'newsletter-modal-seen'
const DELAY_MS = 2500

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true')
      } catch {
        // ignore
      }
    }
    setIsOpen(false)
    previousActiveElement.current?.focus?.()
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return

    if (sessionStorage.getItem(STORAGE_KEY) === 'true') return

    const timer = window.setTimeout(() => {
      previousActiveElement.current =
        (document.activeElement as HTMLElement) ?? null
      setIsOpen(true)
    }, DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [mounted])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, close])

  useEffect(() => {
    if (!isOpen) return
    const firstFocusable = document.querySelector<HTMLElement>(
      '[data-newsletter-modal] input, [data-newsletter-modal] button:not([disabled])'
    )
    firstFocusable?.focus()
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <dialog
      className="modal modal-open"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      onClose={close}
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
    >
      <div
        className="modal-box bg-background-light-secondary dark:bg-background-dark-secondary tracking-wide roboto-mine max-w-xl min-h-max py-8 px-8 md:px-16 place-content-center"
        onClick={(e) => e.stopPropagation()}
        data-newsletter-modal
      >
        <form method="dialog">
          <button
            type="button"
            onClick={close}
            className="btn btn-circle btn-ghost absolute border-none right-[0.1rem] top-[0.1rem] dark:text-white text-gray-900 hover:bg-transparent hover:shadow-none hover:border-none hover:text-red-main hover:dark:text-yellow-main hover:scale-125 transition-transform duration-200"
            aria-label="Close newsletter signup"
          >
            ✕
          </button>
        </form>
        <h2
          id="newsletter-modal-title"
          className="sr-only"
        >
          Subscribe to the newsletter
        </h2>
        <NewsletterSignup
          variant="modal"
          onSuccess={close}
        />
      </div>
    </dialog>
  )
}

export default NewsletterModal
