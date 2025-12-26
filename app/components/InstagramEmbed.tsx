'use client'
import { useEffect } from 'react'

const InstagramEmbed = () => {
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
    <div className="bg-white dark:bg-[#130E0A] p-4 md:p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 chango-regular uppercase text-[#CC1E00] dark:text-[#F1CC00]">Instagram</h2>
      <div className="elfsight-app-6f0168ba-0968-45db-8ace-62d8f60cc949" data-elfsight-app-lazy></div>
    </div>
  )
}

export default InstagramEmbed 