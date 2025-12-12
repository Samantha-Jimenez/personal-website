'use client'
import { useEffect } from 'react'

const BuyMeACoffeeAnimation = () => {
  useEffect(() => {
    let shakeInterval: NodeJS.Timeout | null = null
    let isHovering = false
    
    // Function to find the widget
    const findWidget = () => {
      // Try multiple selectors
      return document.getElementById('bmc-wbtn') || 
             document.querySelector('[id*="bmc"]') ||
             document.querySelector('a[href*="buymeacoffee"]') ||
             document.querySelector('[data-name="BMC-Widget"]') ||
             document.querySelector('.bmc-btn')
    }

    // Function to apply shake animation via JavaScript
    const applyShake = (element: HTMLElement) => {
      if (isHovering) return
      
      const shakeSteps = [
        { x: -8, y: -8, rotate: -5 },
        { x: 8, y: 8, rotate: 5 },
        { x: -8, y: 8, rotate: -5 },
        { x: 8, y: -8, rotate: 5 },
        { x: -4, y: -4, rotate: -2 },
        { x: 4, y: 4, rotate: 2 },
        { x: 0, y: 0, rotate: 0 }
      ]
      
      let stepIndex = 0
      const shakeDuration = 400 // milliseconds (subtle shake duration)
      const stepDuration = shakeDuration / shakeSteps.length
      
      const animate = () => {
        if (stepIndex < shakeSteps.length) {
          const step = shakeSteps[stepIndex]
          element.style.setProperty(
            'transform', 
            `scale(0.75) translate(${step.x}px, ${step.y}px) rotate(${step.rotate}deg)`,
            'important'
          )
          stepIndex++
          setTimeout(animate, stepDuration)
        } else {
          // Reset to normal position
          element.style.setProperty(
            'transform',
            'scale(0.75) translate(0, 0) rotate(0deg)',
            'important'
          )
        }
      }
      
      animate()
    }

    // Function to setup the widget
    const setupWidget = () => {
      const widget = findWidget() as HTMLElement
      
      if (widget && !widget.dataset.shakeSetup) {
        widget.dataset.shakeSetup = 'true'
        
        // Set base styles
        widget.style.setProperty('transform', 'scale(0.75)', 'important')
        widget.style.setProperty('transform-origin', 'bottom left', 'important')
        widget.style.setProperty('transition', 'transform 0.3s ease', 'important')
        widget.style.setProperty('will-change', 'transform', 'important')
        
        // Add class for CSS fallback
        widget.classList.add('bmc-shake-animation')
        
        // Setup hover handlers
        widget.addEventListener('mouseenter', () => {
          isHovering = true
          widget.style.setProperty('transform', 'scale(0.9)', 'important')
        })
        
        widget.addEventListener('mouseleave', () => {
          isHovering = false
          widget.style.setProperty('transform', 'scale(0.75)', 'important')
        })
        
        // Start the shake interval (shake every 4 seconds)
        shakeInterval = setInterval(() => {
          if (!isHovering) {
            applyShake(widget)
          }
        }, 8000)
        
        // Initial shake after 3 seconds
        setTimeout(() => {
          if (!isHovering) {
            applyShake(widget)
          }
        }, 3000)
      }
    }

    // Try to setup immediately and on various events
    setupWidget()
    
    const intervals = [500, 1000, 2000, 3000, 5000]
    const timeouts = intervals.map(delay => 
      setTimeout(setupWidget, delay)
    )
    
    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      setupWidget()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    })

    // Also on window load
    if (typeof window !== 'undefined') {
      window.addEventListener('load', setupWidget)
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
      if (shakeInterval) {
        clearInterval(shakeInterval)
      }
      observer.disconnect()
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', setupWidget)
      }
    }
  }, [])

  return null
}

export default BuyMeACoffeeAnimation
