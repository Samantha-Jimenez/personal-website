'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatDate } from './utils/formatDate'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from './MDXComponent'
import { motion } from 'framer-motion'

const BlogPostComponent = ({
  post,
  mdxSource,
}: {
  post: any,
  mdxSource: MDXRemoteSerializeResult
}) => {
  const components = useMDXComponents({});

  return (
    <div>
      <div className="">
        <NavBar onPortfolioClick={() => {}} onMotevisClick={() => {}} />
      </div>
      {/* <div className="max-w-4xl mx-auto px-4 pt-8 pb-12"> */}
      <div className="px-6 md:px-38 pt-8 pb-12 bg-background-light-secondary dark:bg-background-dark-secondary text-black dark:text-white">
        <motion.nav 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base mb-6 text-gray-900 dark:text-gray-400"
        >
          <Link href="/">Home</Link> <span className="text-black dark:text-white">/</span> <Link href="/blog">Blog</Link> <span className="text-black dark:text-white">/</span> <span>{post.data.title}</span>
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
              className="text-sm text-gray-900 dark:text-gray-400 mb-4"
            >
              {formatDate(post.data.date)}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-headings:text-gray-800 dark:prose-headings:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-500 prose-li:text-gray-800 dark:prose-li:text-gray-400 prose-li:marker:text-gray-500 dark:prose-li:marker:text-green-100 prose-ul:list-[circle] prose-a:text-red-main dark:prose-a:text-yellow-main max-w-none text-black"
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