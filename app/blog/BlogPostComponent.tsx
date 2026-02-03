'use client'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from './utils/formatDate'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from './MDXComponent'
import { motion } from 'framer-motion'
import Toggle from 'react-toggle'
import { Post } from './utils/getAllPosts'
import ShareButtons from './components/ShareButtons'
import PortfolioModal from '../components/PortfolioModal'
import MotevisModal from '../components/MotevisModal'

const BlogPostComponent = ({
  post,
  mdxSource,
  relatedPosts = [],
  slug,
  previousPost,
  nextPost,
}: {
  post: any,
  mdxSource: MDXRemoteSerializeResult,
  relatedPosts?: Post[],
  slug: string,
  previousPost?: Post | null,
  nextPost?: Post | null,
}) => {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isMotevisModalOpen, setIsMotevisModalOpen] = useState(false);
  const components = useMDXComponents({});
  // Initialize from document class (set by script in layout) or matchMedia to avoid flash
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if document already has dark class (set by script in layout)
      if (document.documentElement.classList.contains('dark')) {
        return true;
      }
      // Fallback to matchMedia if class not set yet
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // SSR default
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setReadingProgress(Math.min(100, progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial progress
    return () => window.removeEventListener('scroll', handleScroll);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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

  return (
    <div>
      {/* Reading progress bar - fixed at top */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[5px] z-50 bg-zinc-200/80 dark:bg-zinc-700/80"
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-red-secondary dark:bg-yellow-main transition-[width] duration-150 ease-out motion-reduce:transition-none"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
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
            className='custom-classname'
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
      {/* <div className="max-w-4xl mx-auto px-4 pt-8 pb-12"> */}
      <div className="px-6 md:px-40 pt-8 pb-12 bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white">
        <motion.nav 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base mb-6 text-zinc-800 dark:text-zinc-200"
        >
          <Link href="/">Home</Link> <span className="text-black dark:text-zinc-500">/</span> <Link href="/blog">Blog</Link> <span className="text-black dark:text-zinc-500">/</span> <span>{post.data.title}</span>
        </motion.nav>

        <article className="flex items-start">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-4"
            >
              {post.data.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase"
            >
              {formatDate(post.data.date)}
              <span className="mx-2">·</span>
              <span>{post.data.readingTime}</span>
            </motion.p>
            <ShareButtons title={post.data.title} slug={slug} />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-headings:text-zinc-800 dark:prose-headings:text-zinc-100 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-li:text-zinc-700 dark:prose-li:text-zinc-300 prose-li:marker:text-zinc-700 dark:prose-li:marker:text-zinc-300 prose-ul:list-[circle] max-w-none text-black"
            >
              <MDXRemote {...mdxSource} components={components} />
            </motion.div>
          </div>
        </article>

        {/* Previous/Next Post Navigation */}
        {(previousPost || nextPost) && (
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-zinc-300 dark:border-zinc-700"
            aria-label="Post navigation"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Previous Post (Older) */}
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200"
                >
                  <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-2 text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase">
                    <span className="icon-[mdi--arrow-left] mr-1 group-hover:-translate-x-1 transition-transform duration-200" />
                    Previous
                  </div>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2 group-hover:text-red-main dark:group-hover:text-yellow-main transition-colors">
                    {previousPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {/* Next Post (Newer) */}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 text-right"
                >
                  <div className="flex items-center justify-end text-sm text-zinc-500 dark:text-zinc-400 mb-2 text-[0.72rem] text-gray-200 tracking-[0.28em] uppercase">
                    Next
                    <span className="icon-[mdi--arrow-right] ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2 group-hover:text-red-main dark:group-hover:text-yellow-main transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </motion.nav>
        )}

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700"
          >
            <h2 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-background-light-main dark:bg-background-dark-tertiary rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {relatedPost.coverImage && (
                      <div className="aspect-[21/9] overflow-hidden">
                        <Image
                          src={relatedPost.coverImage.startsWith('/') ? relatedPost.coverImage : `/${relatedPost.coverImage}`}
                          alt={relatedPost.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-1">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                        {formatDate(relatedPost.date)}
                        <span className="mx-2">·</span>
                        {relatedPost.readingTime}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

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
      <div className="">
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-30 right-2 md:right-8 z-50 p-[10px_10px_4px_10px] rounded-full bg-[#AD8F68] dark:bg-green-main text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          aria-label="Scroll to top"
        >
          <span className="icon-[mdi--arrow-up] text-2xl" />
        </motion.button>
      )}
    </div>
  )
}

export default BlogPostComponent