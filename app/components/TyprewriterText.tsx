'use client'
import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TyprewriterText = () => {
  const [startSecondTypewriter, setStartSecondTypewriter] = useState(false);
  const [showFirstCursor, setShowFirstCursor] = useState(true);
  const [showSecondCursor, setShowSecondCursor] = useState(false);

  let counter = 0

  const handleType = (count: number) => {
    counter += 1
    if (counter === 9) {
      setTimeout(() => {
        setShowFirstCursor(false);
        setStartSecondTypewriter(true);
        setShowSecondCursor(true);
      }, 1000);
    }
  }

  return (
    <div className="self-start">
        <h1 className="text-6xl md:text-8xl font-medium mt-12 mb-8 tracking-tight text-[#ff0000]/90 dark:text-yellow-main/90 bodoni-moda-mine drop-shadow-[0_15px_40px_rgba(0,0,0,0.55)]">
            <Typewriter
                words={['Tabs Open']}
                cursor={showFirstCursor}
                loop={1}
                typeSpeed={90}
                delaySpeed={1000}
                onLoopDone={() => setStartSecondTypewriter(true)}
                onType={handleType}
            />
        </h1>
        <p className="text-base sm:text-xl font-extralight text-gray-200 roboto-mine mb-4 drop-shadow-[0_15px_40px_rgba(0,0,0,0.55)]">
            {startSecondTypewriter && (
                <Typewriter
                    words={['Tech, Lifestyle, & Thoughts I Forgot to Close']}
                    cursor={showSecondCursor}
                    loop={1}
                    typeSpeed={90}
                    delaySpeed={1000}
                />
            )}
        </p>
    </div>
  )
}

export default TyprewriterText