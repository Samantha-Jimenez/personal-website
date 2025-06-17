'use client'
import { useEffect } from 'react'

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
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4 bungee-hairline-bold text-black dark:text-white">YouTube</h2>
      <div className="elfsight-app-41aba568-0912-4964-9969-dbb9981fd2e8" data-elfsight-app-lazy></div>
    </div>
  )
}

export default YouTubeEmbed