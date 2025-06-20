'use client'
import React, { useState, useEffect } from 'react';
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import PortfolioModal from './components/PortfolioModal';
import MvmntModal from './components/MvmntModal';
import InstagramEmbed from './components/InstagramEmbed';
import YouTubeEmbed from './components/YouTubeEmbed';
import TikTokEmbed from './components/TikTokEmbed';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isMvmntModalOpen, setIsMvmntModalOpen] = useState(false);

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

  const handleMvmntClick = () => {
    setIsMvmntModalOpen(true);
  };

  const handleCloseMvmntModal = () => {
    setIsMvmntModalOpen(false);
  };

  const handleConfirmMvmntRedirect = () => {
    window.open("https://www.mvmntcollectives.com/", "_blank");
    setIsMvmntModalOpen(false);
  };

  return (
    <>
      <NavBar onPortfolioClick={handlePortfolioClick} onMvmntClick={handleMvmntClick} />
      <div className="sticky top-0 z-[11] dark:bg-emerald-600 bg-emerald-800">
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
          <p className="text-base pl-2 text-gray-200"> {darkMode ? 'Light Mode' : 'Dark Mode'} </p>
        </label>
      </div>
      <main className="flex min-h-max flex-col overflow-x-hidden bg-gray-100 dark:bg-zinc-900">
        <div className="grid grid-cols-1">
          <div className="relative grid w-full bg-gray-100 dark:bg-zinc-900">
            <div className="row-start-1 row-end-2 col-start-1 col-end-3 absolute inset-0 opacity-70 bg-zinc-950 dark:opacity-80"></div>
            <video
              className="row-start-1 row-end-2 col-start-1 col-end-3 h-full w-full object-cover object-center"
              src="/bg-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="row-start-1 col-start-1 inset-0 flex flex-col z-10 px-4 md:px-24 pt-16 pb-8 h-full w-full">
              <p className="row-start-1 col-start-1 col-span-1 bungee-hairline-thin max-[385px]:text-5xl text-6xl md:text-7xl lg:text-8xl xl:text-9xl whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-start text-white overflow-visible">Samantha</p>
              <p className="row-start-2 col-start-1 col-span-1 bungee-hairline-thin max-[385px]:text-5xl text-6xl md:text-7xl lg:text-8xl xl:text-9xl whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-end text-white">Jimenez</p>
              <p className="row-start-3 col-start-1 col-span-1 montserrat-mine text-xl justify-center mt-16 md:mt-32 dark:text-gray-200 text-white">
                Hey, I&apos;m Sam, a full-stack software engineer with a creative soul and a love for movement, good food, and meaningful projects. After years of pouring into my career, I&apos;m reconnecting with the things that light me up: fitness, food, storytelling, and self-expression.
                <br /><br />
                This website is my space to document that journey, share insights, and connect with others. From blog posts and dev projects to life reflections and creative experiments — It&apos;s part portfolio, part digital journal.
                <br /><br />
                Right now, I&apos;m working with fellow engineers from the Pursuit Coding Fellowship on a fitness-focused app, <a href="https://www.mvmntcollectives.com" target="_blank" rel="noopener noreferrer" className="dark:text-emerald-200 text-emerald-300 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors"><em>Mvmnt Collectives</em></a>, which helps runners find local run clubs and races in New York City. I&apos;m also sharing my <a href="https://www.youtube.com/@aka.jimena" target="_blank" rel="noopener noreferrer" className="dark:text-emerald-200 text-emerald-300 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors"><em>&ldquo;6 Months to Change My Life&rdquo;</em></a> journey on YouTube — feel free to follow along and see how it unfolds.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 py-8 px-4 md:px-24 bg-gray-100 dark:bg-zinc-900">
          <div className="">
            <InstagramEmbed />
          </div>
          <div className="divider divider-horizontal hidden md:flex"></div>
          <div className="divider md:hidden flex"></div>
          <div className="">
            <TikTokEmbed />
          </div>
        </div>
        <div className="divider md:hidden flex px-4"></div>
        <div className="px-4 md:px-24 py-8 bg-gray-100 dark:bg-zinc-900">
          <YouTubeEmbed />
        </div>
        <div className="flex w-full">
          <ContactForm />
        </div>

        <PortfolioModal 
          isOpen={isPortfolioModalOpen} 
          onClose={handleClosePortfolioModal} 
          onConfirm={handleConfirmPortfolioRedirect} 
        />

        <MvmntModal 
          isOpen={isMvmntModalOpen} 
          onClose={handleCloseMvmntModal} 
          onConfirm={handleConfirmMvmntRedirect} 
        />
      </main>
      <Footer />
    </>
  )
}
