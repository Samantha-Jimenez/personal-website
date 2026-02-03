'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import PortfolioModal from './components/PortfolioModal';
import MotevisModal from './components/MotevisModal';
import InstagramEmbed from './components/InstagramEmbed';
import YouTubeEmbed from './components/YouTubeEmbed';
import TikTokEmbed from './components/TikTokEmbed';
import AnnouncementBar from './components/AnnouncementBar';
import BioBar from './components/BioBar';

const LOG_LINE = "Writing code and stories that move people, rooted in motion, food, and community.";
const CREDITS = "A personal website by Samantha Jimenez · NYC · 2026";
const SUBTITLE = "Software engineer · storyteller";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);

  useEffect(() => {
    // Check localStorage first, then fallback to system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', prefersDarkMode.toString());
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

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
    <>
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
            className="custom-classname"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
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
      <main id="main-content" className="flex min-h-max flex-col overflow-x-hidden bg-background-light-main dark:bg-background-dark-main">
        <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover object-[center_20%] -scale-x-100"
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-[#0c0805]/40" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-90"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at center, rgba(12,8,5,0) 45%, rgba(10,6,4,0.8) 90%)"
            }}
          />
          <div
            className="absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at 38% 42%, rgba(255,214,160,0.18) 0%, rgba(255,214,160,0) 55%)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 hero-grain pointer-events-none" aria-hidden="true" />

          <div className="relative z-20 flex items-end h-[90vh]">
            <div className="w-full px-6 sm:px-10 lg:px-16 pb-16 md:pb-24 pr-[58px]">
              <div className="max-w-2xl space-y-5 md:space-y-6 text-left text-amber-50">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="uppercase tracking-[0.28em] text-[0.72rem] md:text-xs text-[#ff0000] dark:text-amber-200/80"
                >
                  {SUBTITLE}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-bold bodoni-moda-mine leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-red-secondary dark:text-yellow-main drop-shadow-[0_15px_40px_rgba(0,0,0,0.55)]"
                >
                  Samantha
                  <br />
                  Jimenez
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                  className="text-lg md:text-xl text-white dark:text-amber-50/95 max-w-xl roboto-mine !font-light tracking-[0.016em]"
                >
                  {LOG_LINE}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
                  className="uppercase tracking-[0.22em] text-[0.72rem] md:text-xs text-[#ff0000] dark:text-amber-200/90"
                >
                  {CREDITS}
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        <BioBar />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 py-8 px-4 md:px-24 bg-background-light-main dark:bg-background-dark-main">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          >
            <InstagramEmbed />
          </motion.div>
          <div className="divider divider-horizontal hidden md:flex before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
          <div className="divider md:hidden flex before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          >
            <TikTokEmbed />
          </motion.div>
        </div>
        <div className="divider md:hidden flex px-4 before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 md:px-24 py-8"
        >
          <YouTubeEmbed />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex w-full bg-background-light-main dark:bg-green-announcement"
        >
          <AnnouncementBar />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full"
        >
          <ContactForm />
        </motion.div>

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
      <Footer />
    </>
  )
}
