'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'

const BioBar = () => {
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
        const distanceFromCenter = viewportHeight / 1.6 - elementCenter
        
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
      <div className="w-full bg-background-light-secondary dark:bg-green-announcement overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <p 
            className="text-center chango-regular text-4xl md:text-6xl uppercase text-red-secondary dark:text-yellow-main text-neon-very-subtle"
            style={{
              transform: `translateY(${transform}px)`,
              willChange: 'transform'
            }}
          >
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="row-start-3 col-start-1 col-span-1 tracking-wider roboto-bold text-xl justify-center dark:text-yellow-main text-red-secondary text-neon-very-subtle text-center"
              >
                  Hey, I&apos;m Sam, a full-stack software engineer with a creative soul and a love for movement, good food, and meaningful projects. After years of pouring into my career, I&apos;m reconnecting with the things that light me up: fitness, food, storytelling, and self-expression. This website is my space to document that journey, share insights, and connect with others.
                  <br /><br />
                  Right now, I&apos;m working with fellow engineers from the Pursuit Coding Fellowship on a fitness-focused app, <a href="https://motevis.com/" target="_blank" rel="noopener noreferrer" className="dark:text-lime-100 text-lime-500 hover:text-lime-400 dark:hover:text-lime-300 transition-colors"><em>Motevis</em></a>, which helps runners find local run clubs, weekly runs, and races in New York City. I&apos;m also sharing my <a href="https://www.youtube.com/@aka.jimena" target="_blank" rel="noopener noreferrer" className="dark:text-lime-100 text-lime-500 hover:text-lime-400 dark:hover:text-lime-300 transition-colors"><em>&quot;6 Months to Change My Life&quot;</em></a> journey on YouTube, documenting what it looks like to rebuild with intention.
              </motion.p>          </p>
        </div>
      </div>
    </div>
  )
}

export default BioBar