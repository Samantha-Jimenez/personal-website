import React, { FC } from 'react'
import { motion } from 'framer-motion';
import { InstagramLineIcon, InstagramFillIcon, ThreadsLineIcon, ThreadsFillIcon, TikTokLineIcon, TikTokFillIcon, ThinPorftolioIcon, ThinMotevisIcon, ThinYoutubeIcon, YoutubeLineIcon, YoutubeFillIcon, MotevisLineIcon, MotevisFillIcon, PortfolioLineIcon, PortfolioFillIcon } from '../icons/Icons'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarProps {
  onPortfolioClick: () => void;
  onMotevisClick: () => void;
}

const NavBar: FC<NavBarProps> = ({ onPortfolioClick, onMotevisClick }) => {
  const pathname = usePathname();

  return (
    <div className="navbar text-black dark:bg-background-dark-main bg-background-light-main flex flex-col min-[675px]:flex-row justify-between dark:text-gray-200">
      <div className="grid grid-cols-[max-content_auto_max-content] pt-2">
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
            className={`px-4 btn-ghost text-2xl bodoni-moda-mine hover:bg-transparent active:transform-none focus:transform-none transform-gpu ${
              pathname.startsWith('/blog') 
                ? 'text-red-main dark:text-yellow-main/70 hover:text-red-secondary hover:dark:text-yellow-main transition-all duration-300 ease-in-out cursor-pointer' 
                : 'text-red-secondary dark:text-yellow-main cursor-default'
            }`}
          >
            aka Jimena
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
            className={`hover:scale-110 transition-all duration-300 ease-in-out text-2xl px-4 transform-gpu bodoni-moda-mine ${
              pathname.startsWith('/blog') 
                ? 'text-red-secondary dark:text-yellow-main cursor-default' 
                : 'text-red-main dark:text-yellow-main/70 hover:text-red-secondary hover:dark:text-yellow-main transition-all duration-300 ease-in-out cursor-pointer'
            }`}
          >
            blog
          </Link> 
        </motion.div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 justify-items-center grid grid-flow-row grid-cols-6 tracking-wider roboto-mine">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="instagram"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                href="https://www.instagram.com/aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <InstagramLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <InstagramFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="threads"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                href="https://www.threads.net/@aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <ThreadsLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <ThreadsFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="youtube"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                href="https://www.youtube.com/@aka.jimena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <YoutubeLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <YoutubeFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="portfolio"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                onClick={onPortfolioClick}
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <PortfolioLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <PortfolioFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="motevis"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                onClick={onMotevisClick}
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <MotevisLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <MotevisFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="tooltip tooltip-bottom z-40 dark:before:bg-tooltip-dark" 
            data-tip="tiktok"
          >
            <li>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
                className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                href="https://www.tiktok.com/@aka.jimena" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  <TikTokLineIcon />
                </span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                  <TikTokFillIcon />
                </span>
              </motion.a>
            </li>
          </motion.div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar