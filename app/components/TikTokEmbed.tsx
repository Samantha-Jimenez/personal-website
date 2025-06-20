'use client'
import { useEffect } from 'react'

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
    <div className="bg-gray-100 dark:bg-zinc-900 p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4 bungee-hairline-bold text-black dark:text-white">TikTok</h2>
      <div className="elfsight-app-9b601e77-b804-43b7-add7-945fcf4e7f90" data-elfsight-app-lazy></div>
    </div>
  )
}

export default TikTokEmbed