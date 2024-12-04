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
        background: '#065f46',
        color: '#fff',
      },
    }
  );

  const handleYoutubeClick = () => {
    notify();
  };

  return (
    <footer className="footer bg-zinc-900 text-gray-200 items-center p-2">
        {/* <aside className="grid-flow-col items-center">
            <p className="montserrat-mine font-light">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside> */}
        <nav className="flex-none w-full justify-end grid-flow-col gap-6 grid-rows-1 md:justify-self-end max-[500px]:justify-center">
            <ul className="menu menu-horizontal px-1 grid-flow-row grid grid-rows-1 grid-cols-10 grid-flow-col max-[648px]:grid-cols-5 max-[648px]:grid-rows-2 max-[648px]:justify-self-end">
                <div className="tooltip tooltip-top justify-items-center" data-tip="instagram">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinInstagramIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="threads">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinThreadsIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="tiktok">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinTikTokIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="youtube">
                    <li>
                      <div 
                        className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer"
                        onClick={handleYoutubeClick}
                      >
                        <ThinYoutubeIcon />
                      </div>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="email">
                    <li>
                        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGoogleMailIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="linkedin">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinLinkedInIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="github">
                    <li>
                        <details>
                            <summary className="text-sm flex items-center">
                                <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200">
                                    <a><ThinGitHubIcon /></a>
                                </div>
                            </summary>
                            <ul className="ml-[-50%] absolute bg-zinc-900 p-2 pb-5 text-xs w-max rounded-lg top-[-225%] z-[900] border-none">
                                <li><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                                <li><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                            </ul>
                        </details>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="strava">
                    <li>
                      <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinStravaIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="goodreads">
                    <li>
                      <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><GoodReadsIcon /></a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="portfolio">
                    <li>
                        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinPorftolioIcon /></a>
                    </li>
                </div>
            </ul>
        </nav>
    </footer>   
  )
}

export default Footer