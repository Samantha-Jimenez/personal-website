'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import Toggle from 'react-toggle'
import PortfolioModal from './components/PortfolioModal'
import MotevisModal from './components/MotevisModal'

export default function NotFound() {
  const [darkMode, setDarkMode] = useState(true)
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      const isDark = savedMode === 'true'
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDarkMode)
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('darkMode', prefersDarkMode.toString())
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode.toString())
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }

  const handlePortfolioClick = () => {
    setIsPortfolioModalOpen(true);
  };

  const handleClosePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
  };

  const handleConfirmPortfolioRedirect = () => {
    window.open("https://samantha-jimenez.com/", "_blank");
    setIsPortfolioModalOpen(false);
  };

  const handleMotevisClick = () => {
    setIsMotevisModalOpen(true);
  };

  const handleCloseMotevisModal = () => {
    setIsMotevisModalOpen(false);
  };

  const handleConfirmMotevisRedirect = () => {
    window.open("https://motevis.com/", "_blank");
    setIsMotevisModalOpen(false);
  };

  return (
    <div className="bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white min-h-screen flex flex-col">
        <NavBar onPortfolioClick={handlePortfolioClick} onMotevisClick={handleMotevisClick} />
      
      <div className="sticky top-0 z-30 dark:bg-green-main bg-[#AD8F68]">
        <label className="flex items-center py-2 pl-6">
          <Toggle
            icons={{
              checked: <span className="icon-[arcticons--sunilpaulmathew-weather]"/>,
              unchecked: <span className="icon-[arcticons--moon]"/>,
            }}
            checked={darkMode}
            onChange={toggleDarkMode}
            className='custom-classname'
          />
          <motion.p 
            key={darkMode ? 'dark' : 'light'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[0.72rem] pl-4 text-gray-200 tracking-[0.28em] uppercase"
          >
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </motion.p>
        </label>
      </div>

      <main className="flex-grow flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none chango-regular text-red-main dark:text-yellow-main">
              404
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg"
          >
            Oops! Looks like this page wandered off. Let&apos;s get you back on track.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-6 py-3 bg-red-main dark:bg-yellow-main text-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <span className="icon-[mdi--home] mr-2 text-lg align-middle" />
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-zinc-400 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
            >
              <span className="icon-[mdi--post-outline] mr-2 text-lg align-middle" />
              Visit Blog
            </Link>
          </motion.div>
        </div>

        <PortfolioModal 
          isOpen={isPortfolioModalOpen} 
          onClose={handleClosePortfolioModal} 
          onConfirm={handleConfirmPortfolioRedirect} 
        />

        <MotevisModal 
          isOpen={isMotevisModalOpen} 
          onClose={handleCloseMotevisModal} 
          onConfirm={handleConfirmMotevisRedirect} 
        />
      </main>

      <Footer  />
    </div>
  )
}
