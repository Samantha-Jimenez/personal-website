"use client";
import React, { useState } from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinGoogleMailIcon, ThinStravaIcon, GoodReadsIcon, ThinPorftolioIcon, ThinSpotifyIcon, ThinMvmntCollectivesIcon } from '../icons/Icons'
import toast from 'react-hot-toast';
import { openMenu } from '../hooks/openMenu';
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openPortfolioMenu, setOpenPortfolioMenu] = useState<boolean>(false);
  const [openGithubMenu, setOpenGithubMenu] = useState<boolean>(false);

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
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.instagram.com/aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinInstagramIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="threads">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.threads.net/@aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinThreadsIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="tiktok">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.tiktok.com/@aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinTikTokIcon />
              </a>
            </li>
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
          <div className="tooltip tooltip-bottom" data-tip="goodreads">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.goodreads.com/user/show/183397302-samantha" target="_blank" rel="noopener noreferrer">
                <GoodReadsIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="spotify">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://open.spotify.com/user/jimenamorenita?si=2fa3b2d8e7d147d1" target="_blank" rel="noopener noreferrer">
                <ThinSpotifyIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="email">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="mailto:SamanthaB.Jimenez@gmail.com" target="_blank" rel="noopener noreferrer">
                <ThinGoogleMailIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="linkedin">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.linkedin.com/in/samanthabjimenez/" target="_blank" rel="noopener noreferrer">
                <ThinLinkedInIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="github">
            <li>
              <div 
                className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer hover:-translate-x-2" 
                onClick={() => openMenu('github', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)}
              >
                <ThinGitHubIcon />
                <span className="ml-1 arrow-icon icon-[arcticons--emoji-arrow-pointing-rightwards-then-curving-downwards] left-[60%]"></span>
              </div>
              {openGithubMenu && (
                <ul className="ml-[-80%] absolute bg-zinc-900 p-2 text-xs w-max rounded-lg top-[35px] z-[100] pt-5">
                    <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                    <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                </ul>
              )}
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="portfolio">
            <li>
              <div 
                className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer hover:-translate-x-2" 
                onClick={() => openMenu('portfolio', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)}
              >
                <ThinPorftolioIcon />
                <span className="ml-1 arrow-icon icon-[arcticons--emoji-arrow-pointing-rightwards-then-curving-downwards] left-[60%]"></span>
              </div>
              {openPortfolioMenu && (
                <ul className="ml-[-80%] absolute bg-zinc-900 p-2 z-[100] text-xs w-max rounded-lg top-[35px] pt-5">
                  <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://lucent-sundae-3d565b.netlify.app/" target="_blank" rel="noopener noreferrer">Current Portfolio</a></li>
                  <li className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.1))]"><a href="https://samantha-jimenez.netlify.app/" target="_blank" rel="noopener noreferrer">Previous Portfolio</a></li>
                </ul>
              )}
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="mvmnt collectives">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.mvmntcollectives.com/" target="_blank" rel="noopener noreferrer">
                <ThinMvmntCollectivesIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="strava">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://strava.app.link/lxN0E2NT0Ob" target="_blank" rel="noopener noreferrer">
                <ThinStravaIcon />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar