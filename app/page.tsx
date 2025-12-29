'use client'
import React, { useState, useEffect } from 'react';
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle('dark', prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark');
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
      <div className="sticky top-0 z-[11] dark:bg-green-main bg-[#AD8F68]">
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
          <p className="text-base pl-2 text-gray-200 tracking-wider roboto-mine"> {darkMode ? 'Light Mode' : 'Dark Mode'} </p>
        </label>
      </div>
      <main className="flex min-h-max flex-col overflow-x-hidden bg-background-light-main dark:bg-background-dark-main">
        <div className="grid grid-cols-1">
          <div className="relative grid w-full bg-gray-100 dark:bg-zinc-900 overflow-hidden">
            <div className="row-start-1 row-end-2 col-start-1 col-end-3 absolute inset-0 opacity-75 bg-video-overlay dark:opacity-70 z-10"></div>
            <video
              className="row-start-1 row-end-2 col-start-1 h-full w-full object-cover object-center"
              src="/bg-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="row-start-1 col-start-1 inset-0 flex flex-col z-10 px-4 md:px-30 pt-16 pb-8 w-full justify-start">
              <p className="row-start-1 col-start-1 col-span-1 chango-regular max-[415px]:text-4xl max-[540px]:text-5xl text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] whitespace-nowrap place-self-end dark:text-yellow-main text-red-main uppercase overflow-visible text-neon-subtle">Samantha</p>
              <p className="row-start-2 col-start-1 col-span-1 chango-regular max-[415px]:text-4xl max-[540px]:text-5xl text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] whitespace-nowrap place-self-end dark:text-yellow-main text-[#ED0C0A] uppercase text-neon-subtle">Jimenez</p>
              <p className="row-start-3 col-start-1 col-span-1 tracking-wider roboto-bold text-xl justify-center mt-16 md:mt-70 dark:text-yellow-main text-[#ED0C0A] text-neon-very-subtle text-center">
                  Hey, I’m Sam, a full-stack software engineer with a creative soul and a love for movement, good food, and meaningful projects. After years of pouring into my career, I’m reconnecting with the things that light me up: fitness, food, storytelling, and self-expression. This website is my space to document that journey, share insights, and connect with others.
                  <br /><br />
                  Right now, I’m working with fellow engineers from the Pursuit Coding Fellowship on a fitness-focused app, <a href="https://motevis.com/" target="_blank" rel="noopener noreferrer" className="dark:text-lime-100 text-lime-200 hover:text-lime-400 dark:hover:text-lime-300 transition-colors"><em>Motevis</em></a>, which helps runners find local run clubs, weekly runs, and races in New York City. I’m also sharing my <a href="https://www.youtube.com/@aka.jimena" target="_blank" rel="noopener noreferrer" className="dark:text-lime-100 text-lime-200 hover:text-lime-400 dark:hover:text-lime-300 transition-colors"><em>“6 Months to Change My Life”</em></a> journey on YouTube, documenting what it looks like to rebuild with intention.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 py-8 px-4 md:px-24 bg-background-light-main dark:bg-background-dark-main">
          <div className="">
            <InstagramEmbed />
          </div>
          <div className="divider divider-horizontal hidden md:flex before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
          <div className="divider md:hidden flex before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
          <div className="">
            <TikTokEmbed />
          </div>
        </div>
        <div className="divider md:hidden flex px-4 before:bg-stone-100 after:bg-stone-100 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>
        <div className="px-4 md:px-24 py-8">
          <YouTubeEmbed />
        </div>
        <div className="flex w-full bg-background-light-main dark:bg-green-announcement">
          <AnnouncementBar />
        </div>
        <div className="flex w-full">
          <ContactForm />
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
      <Footer />
    </>
  )
}
