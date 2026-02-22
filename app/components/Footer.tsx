'use client'
import React, { useRef, FC } from 'react'
import { motion } from 'framer-motion';
import { InstagramFillIcon, InstagramLineIcon, ThreadsLineIcon, ThreadsFillIcon, TikTokLineIcon, TikTokFillIcon, GoogleMailLineIcon, GoogleMailFillIcon, LinkedInLineIcon, LinkedInFillIcon, MotevisLineIcon, MotevisFillIcon, YoutubeLineIcon, YoutubeFillIcon, SpotifyFillIcon, SpotifyLineIcon, GitHubLineIcon, GitHubFillIcon, StravaFillIcon, StravaLineIcon, GoodReadsLineIcon, GoodReadsFillIcon, PortfolioLineIcon, PortfolioFillIcon } from '../icons/Icons'
import NewsletterSignup from './NewsletterSignup'
// import { openMenu } from '../hooks/openMenu';

const Footer = () => {
  // const [openPortfolioMenu, setOpenPortfolioMenu] = useState<boolean>(false);
  // const [openGithubMenu, setOpenGithubMenu] = useState<boolean>(false);
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //     setOpenPortfolioMenu(false);
  //     setOpenGithubMenu(false);
  //   }
  // };
  
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <footer 
      ref={menuRef} 
      className="footer flex flex-row flex-wrap items-center justify-between gap-0 md:gap-4 text-black dark:bg-background-dark-main dark:text-gray-200 pl-4 pr-14 py-2 bg-background-light-main"
    >
        <nav className="flex-none justify-start grid-flow-col gap-6 grid-rows-1 justify-self-start">
            <ul className="menu menu-horizontal px-1 grid-flow-row grid grid-rows-1 grid-cols-5 max-[662px]:grid-cols-5 max-[662px]:justify-self-start tracking-wider roboto-mine">
                <motion.div 
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
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
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={iconVariants}
                    className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
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
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
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
                {/* <motion.div 
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
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
                </motion.div> */}
                <motion.div 
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="portfolio"
                >
                  <li>
                    <motion.a 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.2 }}
                      className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                      href="https://samantha-jimenez.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
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
                {/* <motion.div 
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="portfolio"
                >
                    <li>
                        <motion.div 
                          onClick={() => openMenu('portfolio', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)} 
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 1.2 }}
                          className={`group cursor-pointer hover:bg-transparent hover:z-[12] relative inline-block ${openPortfolioMenu ? 'scale-150 open-menu' : ''}`}
                        >
                          <span className="group-hover:opacity-0 transition-opacity duration-200">
                            <PortfolioLineIcon />
                          </span>
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <PortfolioFillIcon />
                          </span>
                                <span className="ml-1 arrow-icon icon-[ph--arrow-bend-right-up] left-[62%]"></span>
                        </motion.div>
                        {openPortfolioMenu && (
                            <motion.ul 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-[-65%] absolute dark:bg-background-dark-tertiary bg-background-light-tertiary p-2 pb-5 text-xs w-max rounded-lg top-[-245%] z-[11] border-none shadow-lg"
                            >
                                <li className="hover:bg-emerald-700/20 hover:bg-emerald-600/20 rounded"><a href="https://samantha-jimenez.com/" target="_blank" rel="noopener noreferrer">Current Portfolio</a></li>
                                <li className="hover:bg-emerald-700/20 hover:bg-emerald-600/20 rounded"><a href="https://samantha-jimenez.netlify.app/" target="_blank" rel="noopener noreferrer">Previous Portfolio</a></li>
                            </motion.ul>
                        )}
                    </li>
                </motion.div> */}
                <motion.div 
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="motevis"
                >
                  <li>
                    <motion.a 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.2 }}
                      className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                      href="https://motevis.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
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
                {/* <motion.div 
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center align-self dark:before:bg-tooltip-dark" 
                  data-tip="github"
                >
                    <li>
                        <motion.div 
                          onClick={() => openMenu('github', openPortfolioMenu, setOpenPortfolioMenu, openGithubMenu, setOpenGithubMenu, setActiveMenu)} 
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 1.2 }}
                          className={`group cursor-pointer hover:bg-transparent hover:z-[12] relative inline-block ${openGithubMenu ? 'scale-150 open-menu' : ''}`}
                        >
                            <span className="group-hover:opacity-0 transition-opacity duration-200">
                              <GitHubLineIcon />
                            </span>
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <GitHubFillIcon />
                            </span>
                            <span className="ml-1 arrow-icon icon-[ph--arrow-bend-right-up] left-[58%]"></span>
                        </motion.div>
                        {openGithubMenu && (
                            <motion.ul 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-[-65%] absolute dark:bg-background-dark-tertiary bg-background-light-tertiary p-2 pb-5 text-xs w-max rounded-lg top-[-245%] z-[11] border-none shadow-lg"
                            >
                                <li className="hover:bg-emerald-700/20 hover:bg-emerald-600/20 rounded"><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                                <li className="hover:bg-emerald-700/20 hover:bg-emerald-600/20 rounded"><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                            </motion.ul>
                        )}
                    </li>
                </motion.div> */}
                {/* <motion.div 
                  custom={11}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="goodreads"
                >
                    <li>
                      <motion.a 
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.2 }}
                        className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                        href="https://www.goodreads.com/user/show/183397302-samantha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="group-hover:opacity-0 transition-opacity duration-200">
                          <GoodReadsLineIcon />
                        </span>
                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                          <GoodReadsFillIcon />
                        </span>
                      </motion.a>
                    </li>
                </motion.div> */}
                {/* <motion.div 
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="email"
                >
                    <li>
                    <motion.a 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.2 }}
                      className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                      href="mailto:SamanthaB.Jimenez@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <span className="group-hover:opacity-0 transition-opacity duration-200">
                          <GoogleMailLineIcon />
                        </span>
                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                          <GoogleMailFillIcon />
                        </span>
                        </motion.a>
                    </li>
                </motion.div> */}
                {/* <motion.div 
                  custom={6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="linkedin"
                >
                    <li>
                    <motion.a 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.2 }}
                      className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                      href="https://www.linkedin.com/in/samanthabjimenez/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <span className="group-hover:opacity-0 transition-opacity duration-200">
                          <LinkedInLineIcon />
                        </span>
                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                          <LinkedInFillIcon />
                        </span>
                    </motion.a>
                    </li>
                </motion.div> */}
                {/* <motion.div 
                  custom={8}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="strava"
                >
                    <li>
                      <motion.a 
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.2 }}
                        className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                        href="https://strava.app.link/lxN0E2NT0Ob" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="group-hover:opacity-0 transition-opacity duration-200">
                           <StravaLineIcon />
                        </span>
                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                          <StravaFillIcon />
                        </span>
                      </motion.a>
                    </li>
                </motion.div> */}
                {/* <motion.div 
                  custom={10}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="tooltip tooltip-top justify-items-center dark:before:bg-tooltip-dark" 
                  data-tip="spotify"
                >
                  <li>
                    <motion.a 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.2 }}
                      className="group relative inline-block hover:bg-transparent active:bg-white active:dark:bg-neutral-200" 
                      href="https://open.spotify.com/user/jimenamorenita?si=2fa3b2d8e7d147d1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <span className="group-hover:opacity-0 transition-opacity duration-200">
                          <SpotifyLineIcon />
                        </span>
                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center inset-3">
                          <SpotifyFillIcon />
                        </span>
                    </motion.a>
                  </li>
                </motion.div> */}
            </ul>
        </nav>
        <div className="w-full min-w-0 sm:w-auto sm:flex-shrink-0 flex justify-end">
          <NewsletterSignup variant="footer" />
        </div>
    </footer>   
  )
}

export default Footer