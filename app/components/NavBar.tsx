"use client";
import React from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinGoogleMailIcon, InstagramIcon, ThinStravaIcon, GoodReadsIcon, ThinPorftolioIcon } from '../icons/Icons'
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {
  const notify = () => toast('check back for my youtube channel',
    {
      position: 'top-right',
      icon: '👀',
      style: {
        borderRadius: '10px',
        background: '#065f46',
        color: '#fff',
      },
    }
  );

  const handleYoutubeClick = () => {
    notify();
  };

  return (
    <div className="navbar bg-zinc-900 flex flex-col min-[715px]:flex-row min-[559px]:flex-col min-[530px]:flex-row justify-between text-gray-200">
      <div className="">
            <a className="px-5 btn-ghost text-xl bungee-hairline-regular hover:bg-transparent active:transform-none focus:transform-none text-white">aka.jimena</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 max-[558px]:grid max-[558px]:grid-flow-col max-[558px]:grid-cols-5 max-[558px]:grid-rows-2">
                <div className="tooltip tooltip-bottom" data-tip="instagram">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinInstagramIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="threads">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinThreadsIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="tiktok">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinTikTokIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="youtube">
                  <li>
                    <div 
                        className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer" 
                        onClick={handleYoutubeClick}
                    >
                        <ThinYoutubeIcon />
                    </div>
                  </li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="email">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGoogleMailIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="github">
                  <li>
                    <details>
                        <summary className="text-sm">
                          <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                            <ThinGitHubIcon />
                          </a>
                        </summary>
                        <ul className="ml-[-50%] absolute bg-zinc-900 p-2 z-[100] text-xs w-max rounded-lg">
                            <li><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                            <li><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                        </ul>
                    </details>
                  </li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="linkedin">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinLinkedInIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="strava">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinStravaIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="goodreads">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><GoodReadsIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="portfolio">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinPorftolioIcon /></a></li>
                </div>
            </ul>
      </div>
    </div>
  )
}

export default NavBar