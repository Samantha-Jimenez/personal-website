'use client'
import React, { useState, useEffect } from 'react';
import ContactForm from "./components/ContactForm";
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="flex min-h-max flex-col justify-self-center">
      <label className="flex items-center py-2 pl-4 sticky top-0 z-[11] dark:bg-emerald-600 bg-emerald-800">
        <Toggle
          icons={{
            checked: <span className="icon-[arcticons--sunilpaulmathew-weather]"/>,
            unchecked: <span className="icon-[arcticons--moon]"/>,
          }}
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <p className="text-sm pl-2"> {darkMode ? 'Light Mode' : 'Dark Mode'} </p>
      </label>
      <div className="relative grid grid-rows-1 grid-cols-1">
        <div className="row-start-1 row-end-2 col-start-1 col-end-3 absolute inset-0 bg-zinc-600 opacity-70 dark:bg-zinc-800 dark:opacity-70"></div>
        <video
          className="row-start-1 row-end-2 col-start-1 col-end-3 h-full rounded-lg object-cover object-center"
          src="https://videos.pexels.com/video-files/946146/946146-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="row-start-1 col-start-1 inset-0 flex flex-col z-10 px-6 sm:px-24 py-16 h-full">
          <p className="row-start-1 col-start-1 col-span-1 bungee-hairline-thin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-max whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-start text-white">Samantha</p>
          <p className="row-start-2 col-start-1 col-span-1 bungee-hairline-thin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-max whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-end text-white">Jimenez</p>
          <p className="row-start-3 col-start-1 col-span-1 montserrat-mine text-xl justify-center mt-16 md:mt-20 lg:mt-24 xl:mt-32 dark:text-gray-200 text-white">Hi, I’m Sam, a full-stack software engineer with a passion for exploring, creating, and staying active. After years of focusing on my career, I’m rediscovering the hobbies and interests that bring me joy—fitness, food, travel, and creative projects.
            <br/><br/> This website is my space to document that journey, share insights, and connect with others. From blog posts and tech projects to reflections on life and adventure, I’m excited to bring you along as I embrace my passions.
            <br/><br/> Currently, I’m building an app with a group of engineers from my time at Pursuit Coding Fellowship in 2019, and I can’t wait to share what’s next..
          </p>
        </div>
      </div>
      <div className="flex">
        <ContactForm />
      </div>
    </main>
  )
}
