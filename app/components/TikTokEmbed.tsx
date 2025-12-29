'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const TikTokEmbed = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script')
    script.src = "https://static.elfsight.com/platform/platform.js"
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
      className="bg-background-light-main dark:bg-background-dark-main p-4 md:p-6 rounded-lg h-full"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold mb-4 chango-regular uppercase text-red-secondary dark:text-yellow-main"
      >
        TikTok
      </motion.h2>
      <div className="elfsight-app-9b601e77-b804-43b7-add7-945fcf4e7f90" data-elfsight-app-lazy></div>
    </motion.div>
  )
}

export default TikTokEmbed