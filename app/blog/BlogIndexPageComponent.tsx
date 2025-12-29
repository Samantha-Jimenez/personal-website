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
        // Check user's preferred color scheme
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
        document.documentElement.classList.toggle('dark', prefersDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        document.documentElement.classList.toggle('dark');
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
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/blog-images/blog-hero2.jpg)' }}>
        <div className="text-center bg-gray-900 bg-opacity-55 p-6 w-full h-full content-center">
          <TypewriterText />
          {/* {tag && <p className="text-base text-gray-600">Filtering by tag: {tag}</p>} */}
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="max-w-2xl pl-36 px-4 pt-10">
        <Link
          href="/"
          className="inline-block border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:dark:bg-neutral-800 px-3 py-1 rounded hover:bg-amber-300/10 transition text-sm"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Tags Tabs */}
      <div className="max-w-2xl mx-auto px-4 pt-4">
        <div className="tabs tabs-lift space-x-2 whitespace-nowrap place-content-between">
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
        </div>
        {tag ? <p className="min-[528px]:hidden text-4xl font-extralight mt-6 text-black">{tag}</p> : <div className="min-[528px]:hidden text-4xl font-extralight mt-6 text-black">All Posts</div>}
        <div className="divider divider-neutral min-[528px]:hidden mt-4 mx-4"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p>Stay tuned—new stories are on the way.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredPosts.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="border-b dark:border-neutral-600 pb-6 flex items-start">
                  {post.coverImage && (
                    <Image
                      width={100}
                      height={100}
                      src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                      alt={post.title}
                      className="object-cover rounded mr-4 object-left"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-medium mb-1 group-hover:underline">{post.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formatDate(post.date)}</p>
                    <p>{formatTags(post.tags)}</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
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