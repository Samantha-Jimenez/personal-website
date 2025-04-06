import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/app/blog/utils/getAllPosts';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/blog-images/blog-hero.png)' }}>
        <div className="text-center bg-white bg-opacity-70 p-6 rounded">
          <h1 className="text-5xl font-bold mb-2">My Journal</h1>
          <p className="text-lg text-gray-700">Sharing my stories, tips & adventures</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.reverse().map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="block rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
                <img src={post.coverImage || '/images/placeholder.jpg'} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-gray-500">
        © {new Date().getFullYear()} My Journal. All rights reserved.
      </footer>
    </div>
  );
};

export default BlogPage;