import React, { FC } from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinPorftolioIcon, ThinMotevisIcon } from '../icons/Icons'
import toast from 'react-hot-toast';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarProps {
  onPortfolioClick: () => void;
  onMotevisClick: () => void;
}

const NavBar: FC<NavBarProps> = ({ onPortfolioClick, onMotevisClick }) => {
  const pathname = usePathname();
  
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
    <div className="navbar text-black dark:bg-zinc-900 flex flex-col min-[675px]:flex-row justify-between dark:text-gray-200">
      <div className="grid grid-cols-[1fr_auto_1fr] pt-2">
        <Link 
          href="/" 
          className={`hover:scale-110 transition-all duration-300 ease-in-out px-4 btn-ghost text-2xl bungee-hairline-bold hover:bg-transparent active:transform-none focus:transform-none transform-gpu ${
            pathname === '/' 
              ? 'text-emerald-700 dark:text-emerald-200' 
              : 'text-black dark:text-white'
          }`}
        >
          aka.jimena
        </Link>
        <span className="text-2xl">•</span>
        <Link 
          href="/blog" 
          className={`hover:scale-110 transition-all duration-300 ease-in-out bungee-hairline-bold text-2xl px-4 transform-gpu ${
            pathname.startsWith('/blog') 
              ? 'text-emerald-700 dark:text-emerald-200' 
              : 'text-black dark:text-white'
          }`}
        >
          Blog
        </Link> 
      </div>
      <div className="flex-none self-start">
        <ul className="menu menu-horizontal px-1 justify-items-center grid grid-flow-row grid-cols-6">
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
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="motevis">
            <li>
              <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200" onClick={onMotevisClick}>
                <ThinMotevisIcon />
              </a>
            </li>
          </div>
          <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="youtube">
            <li>
              <a 
                  className="hover:scale-150 hover:bg-transparent transition-transform duration-200 cursor-pointer" 
                  // onClick={handleYoutubeClick}
                  href="https://www.youtube.com/@aka.jimena"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <ThinYoutubeIcon />
              </a>
            </li>
          </div>
          {/* <div className="tooltip tooltip-bottom hover:z-[12]" data-tip="blog">
            <li>
              <Link href="/blog" className="montserrat-mine">
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