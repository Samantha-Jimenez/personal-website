import React, { FC } from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinPorftolioIcon, ThinMvmntCollectivesIcon } from '../icons/Icons'
import toast from 'react-hot-toast';
import Link from 'next/link';

interface NavBarProps {
  onPortfolioClick: () => void;
  onMvmntClick: () => void;
}

const NavBar: FC<NavBarProps> = ({ onPortfolioClick, onMvmntClick }) => {
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
    <div className="navbar bg-neutral-200 text-black dark:bg-zinc-900 flex flex-col min-[515px]:flex-row justify-between dark:text-gray-200">
      <div className="self-stretch max-[844px]:pt-2 content-center">
        <a className="px-5 btn-ghost text-xl bungee-hairline-bold hover:bg-transparent active:transform-none focus:transform-none text-black dark:text-white" href="/">aka.jimena</a>
      </div>
      <div className="flex-none self-start">
        <ul className="menu menu-horizontal px-1 justify-items-center max-[662px]:grid max-[662px]:grid-flow-row max-[662px]:grid-cols-6">
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="instagram">
            <li>
              <a className="hover:scale-150 hover:bg-transparent active:bg-white active:dark:bg-neutral-200 transition-transform duration-200" href="https://www.instagram.com/aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinInstagramIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="threads">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.threads.net/@aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinThreadsIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="tiktok">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" href="https://www.tiktok.com/@aka.jimena" target="_blank" rel="noopener noreferrer">
                <ThinTikTokIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="portfolio">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" onClick={onPortfolioClick}>
                <ThinPorftolioIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="mvmnt collectives">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" onClick={onMvmntClick}>
                <ThinMvmntCollectivesIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="youtube">
            <li>
              <div 
                  className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer" 
                  onClick={handleYoutubeClick}
              >
                  <ThinYoutubeIcon />
              </div>
            </li>
          </div>
          {/* <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="blog">
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar