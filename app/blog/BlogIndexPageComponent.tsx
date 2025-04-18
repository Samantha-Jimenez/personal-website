'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { formatTags } from './utils/formatTags'
import { formatDate } from './utils/formatDate'
import TypewriterText from '../components/TyprewriterText'
import { LifestyleTabIcon, TechTabIconTwo, FitnessTabIcon, BeautyTabIcon, FoodTabIcon, MusicTabIcon, TravelTabIcon, AllTabIcon } from '../icons/BlogIcons'
import Image from 'next/image'

const BlogIndexPageComponent = ({ tag, posts }: { tag: string, posts: any }) => {
  
    // Filter posts based on selected tag
  const filteredPosts = tag 
  ? posts.filter((post: any) => post.tags.includes(tag)) 
  : posts;

  return (
    <div>
        <div className="border-b">
            <NavBar onPortfolioClick={() => {}} onMvmntClick={() => {}} />
        </div>
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/blog-images/blog-hero2.jpg)' }}>
        <div className="text-center bg-gray-900 bg-opacity-55 p-6 w-full h-full content-center">
          <TypewriterText />
          {/* {tag && <p className="text-base text-gray-600">Filtering by tag: {tag}</p>} */}
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <Link
          href="/"
          className="inline-block border border-gray-800 text-gray-800 px-3 py-1 rounded hover:bg-gray-100 transition text-sm"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Tags Tabs */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div className="tabs tabs-lift space-x-2 whitespace-nowrap max-[660px]:place-content-between">
          {[
            { name: "Lifestyle", icon: <LifestyleTabIcon /> },
            { name: "Tech", icon: <TechTabIconTwo /> },
            { name: "Fitness", icon: <FitnessTabIcon /> },
            { name: "Beauty", icon: <BeautyTabIcon /> },
            { name: "Food", icon: <FoodTabIcon /> },
            { name: "Music", icon: <MusicTabIcon /> },
            { name: "Travel", icon: <TravelTabIcon /> },
          ].map(({ name, icon }) => (
            <Link 
              key={name} 
              href={`?tag=${name}`} 
              className={`tab rounded-t-lg ${tag === name ? 'tab-active bg-white' : ''}`}
            >
              <span className="hidden min-[602px]:inline max-[640px]:text-xs">{name}</span>
              <span className="min-[602px]:hidden">{icon}</span>
            </Link>
          ))}
          <Link 
            href="/blog"
            className={`tab rounded-t-lg ${!tag ? 'tab-active' : ''}`}
          >
            <span className="hidden min-[602px]:inline max-[640px]:text-xs">All</span>
            <span className="min-[602px]:hidden"><AllTabIcon /></span>
          </Link>
        </div>
        {tag ? <p className="min-[602px]:hidden text-4xl font-extralight mt-6 text-black">{tag}</p> : <div className="min-[602px]:hidden text-4xl font-extralight mt-6 text-black">All Posts</div>}
        <div className="divider divider-neutral min-[602px]:hidden mt-4 mx-4"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p>Stay tuned—new stories are on the way.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredPosts.reverse().map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="border-b pb-6 flex items-start">
                  {post.coverImage && (
                    <Image
                      width={100}
                      height={100}
                      src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                      alt={post.title}
                      className="w-[5.33rem] h-32 object-cover rounded mr-4 object-left"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-medium mb-1 group-hover:underline">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                    <p>{formatTags(post.tags)}</p>
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t">
        <Footer />
      </footer>
    </div>
  )
}

export default BlogIndexPageComponent