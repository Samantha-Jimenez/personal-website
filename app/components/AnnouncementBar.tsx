'use client'
import React, { useEffect, useState, useRef } from 'react'

const AnnouncementBar = () => {
  const [transform, setTransform] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate when element enters and exits viewport
        const elementCenter = elementTop + elementHeight / 2
        const distanceFromCenter = viewportHeight / 2 - elementCenter
        
        // Parallax speed: lower value = slower scroll (0.3 = 30% of normal scroll speed)
        const parallaxSpeed = 0.12
        const parallaxOffset = distanceFromCenter * parallaxSpeed
        
        setTransform(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full" ref={containerRef}>
      <div className="w-full bg-[#F4F1EC] dark:bg-[#001610] overflow-hidden">
      {/* <div className="w-full bg-[#F4F1EC] dark:bg-[#130E0A]"> */}
        <div className="container mx-auto px-4 py-16">
          <p 
            className="text-center chango-regular text-4xl md:text-6xl uppercase text-[#CC1E00] dark:text-[#F1CC00] text-neon-very-subtle"
            style={{
              transform: `translateY(${transform}px)`,
              willChange: 'transform'
            }}
          >
            Blog coming soon
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar