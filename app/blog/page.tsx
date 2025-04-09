import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/app/blog/utils/getAllPosts';
import { formatDate } from '@/app/blog/utils/formatDate';
import Image from 'next/image';

const BlogPage = async () => {
  const posts = await getAllPosts();
  
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
          className="inline-block border border-gray-800 text-gray-800 px-5 py-2 rounded hover:bg-gray-100 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p>Stay tuned—new stories are on the way.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.reverse().map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="border-b pb-6">
                  {post.coverImage && (
                    <Image
                      width={1000}
                      height={1000}
                      src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded mb-4 transition group-hover:opacity-90"
                    />
                  )}
                  <h2 className="text-2xl font-medium mb-1 group-hover:underline">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                  <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
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
