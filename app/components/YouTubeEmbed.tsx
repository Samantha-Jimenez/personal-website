'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const YouTubeEmbed = () => {
  useEffect(() => {
    // Load YouTube embed script if needed
    const script = document.createElement('script')
    script.src = 'https://widgets.sociablekit.com/youtube-channel-videos/iframe/25568292'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-background-light-main dark:bg-background-dark-main p-4 md:p-6 rounded-lg"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-4 tracking-tight bodoni-moda-mine text-red-secondary dark:text-yellow-main"
      >
        YouTube
      </motion.h2>
      <div className="elfsight-app-41aba568-0912-4964-9969-dbb9981fd2e8" data-elfsight-app-lazy></div>
    </motion.div>
  )
}

export default YouTubeEmbed