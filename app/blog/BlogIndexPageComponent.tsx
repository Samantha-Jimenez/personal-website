'use client'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatTags } from './utils/formatTags'
import { formatDate } from './utils/formatDate'
import TypewriterText from '../components/TypewriterText'
import { LifestyleTabIcon, TechTabIcon, FitnessTabIcon, BeautyTabIcon, FoodTabIcon, MusicTabIcon, TravelTabIcon, AllTabIcon } from '../icons/BlogIcons'
import Image from 'next/image'
import PortfolioModal from '../components/PortfolioModal'
import MotevisModal from '../components/MotevisModal'
import { motion } from 'framer-motion'
import Toggle from 'react-toggle'

const BlogIndexPageComponent = ({ tag, posts }: { tag: string, posts: any }) => {
    const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
    const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);
    // Fixed initial state so server and client render the same (avoids hydration mismatch).
    // useEffect below syncs from localStorage and updates state + document class.
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Sync state with localStorage/preference (script in layout already set the class)
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            const isDark = savedMode === 'true';
            setDarkMode(isDark);
            // Ensure class matches state
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
        setIsMotevisModalOpen(true);
    };
    
    const handleCloseMotevisModal = () => {
        setIsMotevisModalOpen(false);
    };
    
    const handleConfirmMotevisRedirect = () => {
        window.open("https://motevis.com/", "_blank");
        setIsMotevisModalOpen(false);
    };

  // Filter by tag first, then by search query
  const filteredPosts = posts
    .filter((post: any) => !tag || post.tags.includes(tag))
    .filter((post: any) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t: string) => t.toLowerCase().includes(query))
      );
    });

  return (
    <div className="bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white min-h-screen flex flex-col">
        <div className="">
            <NavBar onPortfolioClick={handlePortfolioClick} onMotevisClick={handleMotevisClick} />
        </div>
        <div className="sticky top-0 z-30 dark:bg-green-main bg-[#AD8F68]">
          <label className="flex items-center py-2 pl-6">
            <Toggle
              icons={{
                checked: <span className="icon-[arcticons--sunilpaulmathew-weather]"/>,
                unchecked: <span className="icon-[arcticons--moon]"/>,
              }}
              checked={darkMode}
              onChange={toggleDarkMode}
              className="custom-classname"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            />
            <motion.p 
              key={darkMode ? 'dark' : 'light'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[0.72rem] pl-4 text-gray-200 tracking-[0.28em] uppercase"
            >
              {darkMode ? 'Dark Mode' : 'Light Mode'}
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
        {darkMode && (
          <div className="absolute inset-0 z-10 bg-[#0c0805]/40" aria-hidden="true" />
        )}
        {darkMode && (
          <div
            className="absolute inset-0 z-10 opacity-90"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at center, rgba(12,8,5,0) 45%, rgba(10,6,4,0.8) 90%)"
            }}
          />
        )}
        {darkMode && (
          <div
            className="absolute inset-0 z-10 opacity-60"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at 38% 42%, rgba(255,214,160,0.18) 0%, rgba(255,214,160,0) 55%)"
            }}
          />
        )}
        {darkMode && (
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/15 to-transparent" aria-hidden="true" />
        )}
        {darkMode && (
          <div className="absolute inset-0 z-10 hero-grain pointer-events-none" aria-hidden="true" />
        )}
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
        className="max-w-4xl mx-auto w-full px-4 pt-4"
      >
        <Link
          href="/"
          className="inline-block text-zinc-800 dark:text-zinc-200 hover:dark:bg-neutral-800 px-3 py-1 rounded hover:bg-background-light-main/50 transition duration-300 ease-in-out text-sm"
        >
          ← Home
        </Link>
      </motion.div>

      {/* Tags Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl md:mx-auto w-full px-4 pt-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="tabs tabs-lift flex w-full flex-nowrap"
          role="tablist"
        >
          {[
            { name: "Lifestyle", icon: <LifestyleTabIcon /> },
            { name: "Tech", icon: <TechTabIcon /> },
            { name: "Fitness", icon: <FitnessTabIcon /> },
            // { name: "Beauty", icon: <BeautyTabIcon /> },
            // { name: "Food", icon: <FoodTabIcon /> },
            { name: "Music", icon: <MusicTabIcon /> },
            // { name: "Travel", icon: <TravelTabIcon /> },
          ].map(({ name, icon }) => (
            <Link 
              key={name}
              href={`?tag=${name}`} 
              className={`tab flex-1 min-w-0 flex justify-center items-center rounded-t-lg px-1 sm:px-2 ${tag === name ? 'tab-active bg-white' : ''}`}
            >
              <span className="hidden min-[650px]:inline text-zinc-400 hover:text-zinc-500 dark:text-zinc-400 hover:dark:text-zinc-300 hover:scale-110 transition-all duration-300 ease-in-out text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase truncate">{name}</span>
              <span className="min-[650px]:hidden flex-shrink-0 align-self-end place-self-end">{icon}</span>
            </Link>
          ))}
          <Link 
            href="/blog"
            className={`tab flex-1 min-w-0 flex justify-center items-center rounded-t-lg px-1 sm:px-2 min-[655px]:!px-4 ${!tag ? 'tab-active' : ''}`}
          >
            <span className="hidden min-[650px]:inline text-gray-400 hover:text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase truncate">All</span>
            <span className="min-[650px]:hidden flex-shrink-0 align-self-end place-self-end"><AllTabIcon /></span>
          </Link>
        </motion.div>
        {tag ? (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="min-[650px]:hidden text-4xl font-extralight mt-6 text-black dark:text-white"
          >
            {tag}
          </motion.p>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="min-[650px]:hidden text-4xl font-extralight mt-6 text-black dark:text-white"
          >
            All Posts
          </motion.div>
        )}
        <div className="divider divider-neutral min-[650px]:hidden mt-4 mx-4 dark:before:bg-neutral-200 dark:after:bg-neutral-200"></div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto w-full px-4 pt-6"
      >
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search posts by title, summary, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-md bg-white dark:bg-background-dark-tertiary text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-zinc-400 dark:focus:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:border-transparent transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-zinc-500 dark:text-zinc-400 mt-2"
          >
            {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for &quot;{searchQuery}&quot;
            {tag && ` in ${tag}`}
          </motion.p>
        )}
      </motion.div>

      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        {filteredPosts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-gray-500 dark:text-gray-400"
          >
            {searchQuery ? (
              <>
                <h2 className="text-xl font-semibold mb-4">No posts found</h2>
                <p>No posts match &quot;{searchQuery}&quot;{tag && ` in ${tag}`}.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-zinc-600 dark:text-zinc-300 underline hover:no-underline transition-all"
                >
                  Clear search
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
                <p>Stay tuned—new stories are on the way.</p>
              </>
            )}
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
                  <div className={`pb-6 flex items-start ${index < filteredPosts.length - 1 ? 'border-b border-zinc-300 dark:border-zinc-600' : ''}`}>
                    {post.coverImage && (
                      <motion.div
                        transition={{ duration: 0.2 }}
                        className="mr-4 w-[100px] h-[140px] flex-shrink-0 group-hover:scale-105 transition-all duration-300 ease-in-out"
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
                      <h2 className="text-2xl font-medium mb-1 group-hover:scale-100 group-hover:font-bold transition-all duration-300 ease-in-out">{post.title}</h2>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase">
                        {formatDate(post.date)}
                        <span className="mx-2">·</span>
                        <span>{post.readingTime}</span>
                      </p>
                      <p>{formatTags(post.tags)}</p>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{post.excerpt}</p>
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