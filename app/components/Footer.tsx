'use client'
import React, { useState, useEffect } from 'react'
import { ThinInstagramIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinTikTokIcon, ThinStravaIcon, GoodReadsIcon, ThinGoogleMailIcon, ThinPorftolioIcon, ThinSpotifyIcon, ThinMvmntCollectivesIcon } from '../icons/Icons'
import toast from 'react-hot-toast';
import { openMenu } from '../hooks/openMenu';

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openPortfolioMenu, setOpenPortfolioMenu] = useState<boolean>(false);
  const [openGithubMenu, setOpenGithubMenu] = useState<boolean>(false);

  const notify = () => toast('check back for my youtube channel',
    {
      position: 'bottom-right',
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
    <footer className="footer bg-zinc-900 text-gray-200 items-center p-2">
        {/* <aside className="grid-flow-col items-center">
            <p className="montserrat-mine font-light">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside> */}
        <nav className="flex-none w-full justify-end grid-flow-col gap-6 grid-rows-1 md:justify-self-end max-[500px]:justify-center">
            <ul className="menu menu-horizontal px-1 grid-flow-row grid grid-rows-1 grid-cols-12 max-[662px]:grid-cols-6 max-[662px]:grid-rows-2 max-[662px]:justify-self-end">
                <div className="tooltip tooltip-top justify-items-center" data-tip="instagram">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.instagram.com/aka.jimena" target="_blank" rel="noopener noreferrer">
                        <ThinInstagramIcon />
                    </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="threads">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.threads.net/@aka.jimena" target="_blank" rel="noopener noreferrer">
                        <ThinThreadsIcon />
                    </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="tiktok">
                    <li>
                      <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.tiktok.com/@aka.jimena" target="_blank" rel="noopener noreferrer">
                        <ThinTikTokIcon />
                      </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="portfolio">
                    <li>
                        <div onClick={() => openMenu('portfolio', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)} className="cursor-pointer hover:bg-transparent">
                            <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200 relative hover:-translate-x-2">
                                <ThinPorftolioIcon />
                                <span className="ml-1 arrow-icon icon-[arcticons--emoji-arrow-pointing-rightwards-then-curving-upwards] left-[80%]"></span>
                            </div>
                        </div>
                        {openPortfolioMenu && (
                            <ul className="ml-[-50%] absolute bg-zinc-900 p-2 pb-5 text-xs w-max rounded-lg top-[-225%] z-[900] border-none">
                                <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://lucent-sundae-3d565b.netlify.app/" target="_blank" rel="noopener noreferrer">Current Portfolio</a></li>
                                <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://samantha-jimenez.netlify.app/" target="_blank" rel="noopener noreferrer">Previous Portfolio</a></li>
                            </ul>
                        )}
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center align-self" data-tip="github">
                    <li>
                        <div onClick={() => openMenu('github', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)} className="cursor-pointer hover:bg-transparent">
                            <div className="hover:scale-150 hover:bg-transparent transition-transform duration-200 relative hover:-translate-x-2">
                                <ThinGitHubIcon />
                                <span className="ml-1 arrow-icon icon-[arcticons--emoji-arrow-pointing-rightwards-then-curving-upwards] left-[80%]"></span>
                            </div>
                        </div>
                        {openGithubMenu && (
                            <ul className="ml-[-50%] absolute bg-zinc-900 p-2 pb-5 text-xs w-max rounded-lg top-[-225%] z-[900] border-none">
                                <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                                <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                            </ul>
                        )}
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="youtube">
                    <li>
                      <div 
                        className="hover:scale-150 hover:bg-transparent transition-transform duration-200"
                        onClick={handleYoutubeClick}
                      >
                        <ThinYoutubeIcon />
                      </div>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="email">
                    <li>
                        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="mailto:SamanthaB.Jimenez@gmail.com" target="_blank" rel="noopener noreferrer">
                            <ThinGoogleMailIcon />
                        </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="linkedin">
                    <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.linkedin.com/in/samanthabjimenez/" target="_blank" rel="noopener noreferrer">
                        <ThinLinkedInIcon />
                    </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="mvmnt collectives">
                  <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.mvmntcollectives.com/" target="_blank" rel="noopener noreferrer">
                        <ThinMvmntCollectivesIcon />
                    </a>
                  </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="strava">
                    <li>
                      <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://strava.app.link/lxN0E2NT0Ob" target="_blank" rel="noopener noreferrer">
                        <ThinStravaIcon />
                      </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="goodreads">
                    <li>
                      <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.goodreads.com/user/show/183397302-samantha" target="_blank" rel="noopener noreferrer">
                        <GoodReadsIcon />
                      </a>
                    </li>
                </div>
                <div className="tooltip tooltip-top justify-items-center" data-tip="spotify">
                  <li>
                    <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://open.spotify.com/user/jimenamorenita?si=2fa3b2d8e7d147d1" target="_blank" rel="noopener noreferrer">
                        <ThinSpotifyIcon />
                    </a>
                  </li>
                </div>
            </ul>
        </nav>
    </footer>   
  )
}

export default Footer