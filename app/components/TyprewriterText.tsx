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
    <div>
        <h1 className="text-5xl font-medium mb-2 tracking-tight text-white">
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
        <p className="text-2xl font-extralight text-gray-300">
            {startSecondTypewriter && (
                <Typewriter
                    words={['Tech, Lifestyle, and Thoughts I Forgot to Close']}
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