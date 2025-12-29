import React, { FC } from 'react'
import { motion } from 'framer-motion';
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
    <div className="navbar text-black dark:bg-background-dark-main bg-background-light-main flex flex-col min-[675px]:flex-row justify-between dark:text-gray-200">
      <div className="grid grid-cols-[1fr_auto_1fr] pt-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          {...(pathname.startsWith('/blog') && {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
          })}
        >
          <Link 
            href="/" 
            className={`px-4 btn-ghost text-2xl chango-regular uppercase hover:bg-transparent active:transform-none focus:transform-none transform-gpu text-neon-very-subtle ${
              pathname.startsWith('/blog') 
                ? 'text-red-main dark:text-yellow-main/70 hover:text-red-secondary hover:dark:text-yellow-main transition-all duration-300 ease-in-out cursor-pointer' 
                : 'text-red-secondary dark:text-yellow-main cursor-default'
            }`}
          >
            aka.jimena
          </Link>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="text-2xl text-[#AD8F68] dark:text-white text-neon-very-subtle"
        >
          •
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          {...(!pathname.startsWith('/blog') && {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
          })}
        > 
          <Link 
            href="/blog" 
            className={`hover:scale-110 transition-all duration-300 ease-in-out text-2xl px-4 transform-gpu chango-regular uppercase text-neon-very-subtle ${
              pathname.startsWith('/blog') 
                ? 'text-red-secondary dark:text-yellow-main cursor-default' 
                : 'text-red-main dark:text-yellow-main/70 hover:text-red-secondary hover:dark:text-yellow-main transition-all duration-300 ease-in-out cursor-pointer'
            }`}
          >
            Blog
          </Link> 
        </motion.div>
      </div>
      <div className="flex-none self-start">
        <ul className="menu menu-horizontal px-1 justify-items-center grid grid-flow-row grid-cols-6 tracking-wider roboto-mine">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="instagram"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                href="https://www.instagram.com/aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ThinInstagramIcon />
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="threads"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent" 
                href="https://www.threads.net/@aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ThinThreadsIcon />
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="tiktok"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent" 
                href="https://www.tiktok.com/@aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ThinTikTokIcon />
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="portfolio"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent" 
                onClick={onPortfolioClick}
              >
                <ThinPorftolioIcon />
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="motevis"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent" 
                onClick={onMotevisClick}
              >
                <ThinMotevisIcon />
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="tooltip tooltip-bottom hover:z-[12] dark:before:bg-tooltip-dark" 
            data-tip="youtube"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="hover:bg-transparent cursor-pointer" 
                href="https://www.youtube.com/@aka.jimena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ThinYoutubeIcon />
              </motion.a>
            </li>
          </motion.div>
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