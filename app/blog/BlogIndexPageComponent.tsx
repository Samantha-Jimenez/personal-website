'use client'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatTags } from './utils/formatTags'
import { formatDate } from './utils/formatDate'
import TypewriterText from '../components/TyprewriterText'
import { LifestyleTabIcon, TechTabIcon, FitnessTabIcon, BeautyTabIcon, FoodTabIcon, MusicTabIcon, TravelTabIcon, AllTabIcon } from '../icons/BlogIcons'
import Image from 'next/image'
import PortfolioModal from '../components/PortfolioModal'
import MotevisModal from '../components/MotevisModal'
import { motion } from 'framer-motion'
import Toggle from 'react-toggle'

const BlogIndexPageComponent = ({ tag, posts }: { tag: string, posts: any }) => {
    const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
    const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Check localStorage first, then fallback to system preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            const isDark = savedMode === 'true';
            setDarkMode(isDark);
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDarkMode);
            if (prefersDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('darkMode', prefersDarkMode.toString());
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode.toString());
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };

    const handlePortfolioClick = () => {
        console.log("Portfolio button clicked");
        setIsPortfolioModalOpen(true);
    };
    
    const handleClosePortfolioModal = () => {
        setIsPortfolioModalOpen(false);
    };
    
    const handleConfirmPortfolioRedirect = () => {
        window.open("https://samantha-jimenez.com/", "_blank");
        setIsPortfolioModalOpen(false);
    };
    
    const handleMotevisClick = () => {
        console.log("Motevis button clicked");
        setIsMotevisModalOpen(true);
    };
    
    const handleCloseMotevisModal = () => {
        setIsMotevisModalOpen(false);
    };
    
    const handleConfirmMotevisRedirect = () => {
        window.open("https://motevis.com/", "_blank");
        setIsMotevisModalOpen(false);
    };

  const filteredPosts = tag 
  ? posts.filter((post: any) => post.tags.includes(tag)) 
  : posts;

  return (
    <div className="bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white min-h-screen flex flex-col">
        <div className="">
            <NavBar onPortfolioClick={handlePortfolioClick} onMotevisClick={handleMotevisClick} />
        </div>
        <div className="sticky top-0 z-[11] dark:bg-green-main bg-[#AD8F68]">
        <label className="flex items-center py-2 pl-6">
          <Toggle
            icons={{
              checked: <span className="icon-[arcticons--sunilpaulmathew-weather]"/>,
              unchecked: <span className="icon-[arcticons--moon]"/>,
            }}
            checked={darkMode}
            onChange={toggleDarkMode}
            className='custom-classname'
          />
          <motion.p 
            key={darkMode ? 'light' : 'dark'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-base pl-2 text-gray-200 tracking-wider roboto-mine text-neon-very-very-subtle"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.p>
        </label>
      </div>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 flex items-center justify-center overflow-hidden"
      >
        <motion.video
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 w-full h-full object-cover"
          src="/heroVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute inset-0 bg-stone-900/60 z-10"
        />
        <div className="relative z-20 text-center p-6 w-full h-full flex items-center justify-center">
          <TypewriterText />
          {/* {tag && <p className="text-base text-gray-600">Filtering by tag: {tag}</p>} */}
        </div>
      </motion.header>

      {/* Back to Home Button */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto w-full px-4 pt-10"
      >
        <Link
          href="/"
          className="inline-block border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:dark:bg-neutral-800 px-3 py-1 rounded hover:bg-amber-300/10 transition text-sm"
        >
          ← Back to Home
        </Link>
      </motion.div>

      {/* Tags Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto px-4 pt-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="tabs tabs-lift space-x-2 whitespace-nowrap place-content-between"
        >
          {[
            { name: "Lifestyle", icon: <LifestyleTabIcon /> },
            { name: "Tech", icon: <TechTabIcon /> },
            { name: "Fitness", icon: <FitnessTabIcon /> },
            { name: "Beauty", icon: <BeautyTabIcon /> },
            { name: "Food", icon: <FoodTabIcon /> },
            { name: "Music", icon: <MusicTabIcon /> },
            // { name: "Travel", icon: <TravelTabIcon /> },
          ].map(({ name, icon }) => (
            <Link 
              key={name}
              href={`?tag=${name}`} 
              className={`tab rounded-t-lg min-[655px]:!px-6 ${tag === name ? 'tab-active bg-white' : ''}`}
            >
              <span className="hidden min-[528px]:inline max-[640px]:text-xs text-gray-400 hover:text-gray-500 dark:text-gray-400 hover:dark:text-gray-300">{name}</span>
              <span className="min-[528px]:hidden">{icon}</span>
            </Link>
          ))}
          <Link 
            href="/blog"
            className={`tab rounded-t-lg ${!tag ? 'tab-active' : ''}`}
          >
            <span className="hidden min-[528px]:inline max-[640px]:text-xs text-gray-400 hover:text-gray-500 dark:text-gray-400 hover:dark:text-gray-300">All</span>
            <span className="min-[528px]:hidden"><AllTabIcon /></span>
          </Link>
        </motion.div>
        {tag ? (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="min-[528px]:hidden text-4xl font-extralight mt-6 text-black dark:text-white"
          >
            {tag}
          </motion.p>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="min-[528px]:hidden text-4xl font-extralight mt-6 text-black dark:text-white"
          >
            All Posts
          </motion.div>
        )}
        <div className="divider divider-neutral min-[528px]:hidden mt-4 mx-4 dark:before:bg-neutral-200 dark:after:bg-neutral-200"></div>
      </motion.div>

      <main className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        {filteredPosts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-gray-500"
          >
            <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p>Stay tuned—new stories are on the way.</p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {filteredPosts.map((post: any, index: number) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="border-b dark:border-neutral-600 pb-6 flex items-start">
                    {post.coverImage && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="mr-4 w-[100px] h-[140px] flex-shrink-0"
                      >
                        <Image
                          width={100}
                          height={140}
                          src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                          alt={post.title}
                          className="object-cover rounded object-left w-[100px] h-[140px]"
                        />
                      </motion.div>
                    )}
                    <div>
                      <h2 className="text-2xl font-medium mb-1 group-hover:underline">{post.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formatDate(post.date)}</p>
                      <p>{formatTags(post.tags)}</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <PortfolioModal 
          isOpen={isPortfolioModalOpen} 
          onClose={handleClosePortfolioModal} 
          onConfirm={handleConfirmPortfolioRedirect} 
      />
      <MotevisModal 
          isOpen={isMotevisModalOpen} 
          onClose={handleCloseMotevisModal} 
          onConfirm={handleConfirmMotevisRedirect} 
      />
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}

export default BlogIndexPageComponent