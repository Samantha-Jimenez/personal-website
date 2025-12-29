'use client'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatDate } from './utils/formatDate'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from './MDXComponent'
import { motion } from 'framer-motion'
import Toggle from 'react-toggle'

const BlogPostComponent = ({
  post,
  mdxSource,
}: {
  post: any,
  mdxSource: MDXRemoteSerializeResult
}) => {
  const components = useMDXComponents({});
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

  return (
    <div>
      <div className="">
        <NavBar onPortfolioClick={() => {}} onMotevisClick={() => {}} />
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
      {/* <div className="max-w-4xl mx-auto px-4 pt-8 pb-12"> */}
      <div className="px-6 md:px-38 pt-8 pb-12 bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white">
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
              className="text-sm text-zinc-800 dark:text-zinc-200 mb-4"
            >
              {formatDate(post.data.date)}
            </motion.p>
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
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default BlogPostComponent