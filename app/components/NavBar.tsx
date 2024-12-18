"use client";
import React from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinGoogleMailIcon, ThinStravaIcon, GoodReadsIcon, ThinPorftolioIcon, ThinSpotifyIcon, ThinMvmntCollectivesIcon } from '../icons/Icons'
import toast from 'react-hot-toast';

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
      duration: 2000,
    }
  );

  const handleYoutubeClick = () => {
    notify();
  };

  return (
    <div className="navbar bg-zinc-900 flex flex-col min-[845px]:flex-row min-[662px]:flex-col min-[599px]:flex-row justify-between text-gray-200">
      <div className="self-stretch max-[844px]:pt-2">
            <a className="px-5 btn-ghost text-xl bungee-hairline-bold hover:bg-transparent active:transform-none focus:transform-none text-white">aka.jimena</a>
        </div>
        <div className="flex-none self-start">
            <ul className="menu menu-horizontal px-1 justify-items-center max-[662px]:grid max-[662px]:grid-flow-row max-[662px]:grid-cols-6 max-[662px]:grid-rows-2">
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
                <div className="tooltip tooltip-bottom" data-tip="linkedin">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinLinkedInIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="strava">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinStravaIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="goodreads">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><GoodReadsIcon /></a></li>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="spotify">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinSpotifyIcon /></a></li>
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
                <div className="tooltip tooltip-bottom" data-tip="mvmnt collectives">
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinMvmntCollectivesIcon /></a></li>
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