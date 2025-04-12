'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatDate } from './utils/formatDate'

const BlogPostComponent = ({ post, content }: { post: any, content: string }) => {
  return (
    <div>
        <div className="border-b">
            <NavBar onPortfolioClick={() => {}} onMvmntClick={() => {}} />
        </div>
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-12">
        <nav className="text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.data.title}</span>
        </nav>

        <article className="flex items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{formatDate(post.data.date)}</p>
            <div className="prose prose-p:text-gray-900 prose-headings:text-gray-800 prose-strong:text-gray-900 prose-li:text-gray-800 prose-li:marker:text-gray-500 prose-ul:list-[circle] max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </div>

      {/* <footer className="py-8 text-center text-gray-500 border-t mt-12">
        © {new Date().getFullYear()} My Journal. All rights reserved.
      </footer> */}
      <div className="border-t">
        <Footer />
      </div>
    </div>
  )
}

export default BlogPostComponent