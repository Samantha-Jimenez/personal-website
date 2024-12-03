'use client'
import React from 'react'
import { ThinInstagramIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinTikTokIcon, ThinStravaIcon, GoodReadsIcon, ThinGoogleMailIcon, ThinPorftolioIcon } from '../icons/Icons'
import toast from 'react-hot-toast';

const Footer = () => {
  const notify = () => toast('check back for my youtube channel',
    {
      position: 'bottom-right',
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
    <footer className="footer bg-zinc-900 text-gray-200 items-center p-4">
        {/* <aside className="grid-flow-col items-center">
            <p className="montserrat-mine font-light">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside> */}
        <nav className="grid-flow-col gap-6 justify-self-center min-[452px]:grid-rows-1 md:justify-self-end grid-rows-2">
            <div className="tooltip tooltip-top" data-tip="instagram">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinInstagramIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="threads">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinThreadsIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="tiktok">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinTikTokIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="youtube">
                <div 
                    className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer"
                    onClick={handleYoutubeClick}
                >
                    <ThinYoutubeIcon />
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="email">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinGoogleMailIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="github">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinGitHubIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="linkedin">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinLinkedInIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="strava">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinStravaIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="goodreads">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><GoodReadsIcon /></a>
                </div>
            </div>
            <div className="tooltip tooltip-top" data-tip="portfolio">
                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                    <a><ThinPorftolioIcon /></a>
                </div>
            </div>
        </nav>
    </footer>   
  )
}

export default Footer