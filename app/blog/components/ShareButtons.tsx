'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ShareButtonsProps {
  title: string
  slug: string
}

const ShareButtons = ({ title, slug }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false)
  
  // Build the full URL (works on client side)
  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/blog/${slug}`
    }
    return `/blog/${slug}`
  }

  const handleCopyLink = async () => {
    const url = getFullUrl()
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnTwitter = () => {
    const url = getFullUrl()
    const text = encodeURIComponent(title)
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const shareOnFacebook = () => {
    const url = getFullUrl()
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const shareOnLinkedIn = () => {
    const url = getFullUrl()
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const shareOnThreads = () => {
    const url = getFullUrl()
    const text = encodeURIComponent(`${title}\n\n${url}`)
    window.open(
      `https://www.threads.net/intent/post?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const buttonBaseClass = "p-2 rounded-full transition-all duration-200 hover:scale-110 h-[2.3rem]"
  const iconClass = "text-xl"

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="flex items-center gap-1 mb-6"
    >
      <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">Share:</span>
      
      {/* Copy Link Button */}
      <div className="relative">
        <button
          onClick={handleCopyLink}
          className={`${buttonBaseClass} bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300`}
          aria-label="Copy link"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={`${iconClass} icon-[mdi--check] text-green-600 dark:text-green-400`}
              />
            ) : (
              <motion.span
                key="link"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={`${iconClass} icon-[mdi--link-variant]`}
              />
            )}
          </AnimatePresence>
        </button>
        
        {/* Copied tooltip */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 text-xs rounded whitespace-nowrap"
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Threads */}
      <button
        onClick={shareOnThreads}
        className={`${buttonBaseClass} bg-zinc-200 dark:bg-zinc-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-zinc-700 dark:text-zinc-300`}
        aria-label="Share on Threads"
      >
        <span className={`${iconClass} icon-[simple-icons--threads]`} />
      </button>

      {/* LinkedIn */}
      <button
        onClick={shareOnLinkedIn}
        className={`${buttonBaseClass} bg-zinc-200 dark:bg-zinc-700 hover:bg-[#0A66C2] hover:text-white text-zinc-700 dark:text-zinc-300`}
        aria-label="Share on LinkedIn"
      >
        <span className={`${iconClass} icon-[mdi--linkedin]`} />
      </button>

      {/* Facebook */}
      <button
        onClick={shareOnFacebook}
        className={`${buttonBaseClass} bg-zinc-200 dark:bg-zinc-700 hover:bg-[#1877F2] hover:text-white text-zinc-700 dark:text-zinc-300`}
        aria-label="Share on Facebook"
      >
        <span className={`${iconClass} icon-[mdi--facebook]`} />
      </button>

      {/* Twitter/X */}
      <button
        onClick={shareOnTwitter}
        className={`${buttonBaseClass} bg-zinc-200 dark:bg-zinc-700 hover:bg-[#1DA1F2] hover:text-white text-zinc-700 dark:text-zinc-300`}
        aria-label="Share on X (Twitter)"
      >
        <span className={`${iconClass} icon-[mdi--twitter]`} />
      </button>
    </motion.div>
  )
}

export default ShareButtons
