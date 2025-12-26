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
    <div className="bg-white dark:bg-[#130E0A] p-4 md:p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 chango-regular uppercase text-[#CC1E00] dark:text-[#F1CC00]">YouTube</h2>
      <div className="elfsight-app-41aba568-0912-4964-9969-dbb9981fd2e8" data-elfsight-app-lazy></div>
    </div>
  )
}

export default YouTubeEmbed