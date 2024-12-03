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
        background: '#333',
        color: '#fff',
      },
    }
  );

  const handleYoutubeClick = () => {
    notify();
  };

  return (
    <div className="navbar bg-zinc-900 flex flex-col min-[715px]:flex-row min-[546px]:flex-col min-[455px]:flex-row justify-between text-gray-200">
      <div className="">
            <a className="px-5 btn-ghost text-xl bungee-hairline-regular hover:bg-transparent active:transform-none focus:transform-none">aka.jimena</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 max-[545px]:grid max-[545px]:grid-flow-col max-[545px]:grid-cols-5 max-[545px]:grid-rows-2">
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
                  <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGitHubIcon /></a></li>
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