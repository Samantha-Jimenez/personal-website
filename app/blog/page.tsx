import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/app/blog/utils/getAllPosts';
import { formatDate } from '@/app/blog/utils/formatDate';
import Image from 'next/image';

const BlogPage = async ({ searchParams }: { searchParams: { tag?: string } }) => {
  const posts = await getAllPosts();
  const tag = await searchParams.tag; // Await the searchParams

  // Tags array
  const tags = ["Lifestyle", "Hair & Beauty", "Fitness", "Tech", "Food", "Music", "Travel"];

  // Filter posts based on selected tag
  const filteredPosts = tag 
    ? posts.filter(post => post.tags.includes(tag)) 
    : posts;

  const handleTagClick = (selectedTag: string | null) => {
    // This function will not be used in server components
    // You can handle navigation with links instead
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/blog-images/blog-hero2.jpg)' }}>
        <div className="text-center bg-white bg-opacity-80 p-6 rounded-md shadow-sm">
          <h1 className="text-4xl font-semibold mb-2 tracking-tight">Tabs Open</h1>
          <p className="text-base text-gray-600">Tech, lifestyle, and thoughts I forgot to close.</p>
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
        <div className="tabs tabs-lift flex space-x-2">
          {tags.map(tagName => (
            <Link 
              key={tagName} 
              href={`?tag=${tagName}`} 
              className={`tab rounded-t-lg ${tag === tagName ? 'tab-active bg-white' : ''}`}
            >
              {tagName}
            </Link>
          ))}
          <Link 
            href="/blog"
            className={`tab rounded-t-lg ${!tag ? 'tab-active' : ''}`}
          >
            All
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p>Stay tuned—new stories are on the way.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredPosts.reverse().map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="border-b pb-6 flex items-start">
                  {post.coverImage && (
                    <Image
                      width={100}
                      height={100}
                      src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                      alt={post.title}
                      className="w-24 h-32 object-cover rounded mr-4"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-medium mb-1 group-hover:underline">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} My Journal
      </footer>
    </div>
  );
};

export default BlogPage;
