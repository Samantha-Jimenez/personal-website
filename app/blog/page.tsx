import React from 'react';
import { getAllPosts } from '@/app/blog/utils/getAllPosts'; // Update the path
import Link from 'next/link'; // Import Link for navigation

const BlogPage: React.FC = async () => {
  const posts = await getAllPosts(); // Fetch all posts

  if (posts.length === 0) {
    return <div className="p-8">No blog posts available.</div>; // Display a message if no posts are found
  }

  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-base-100 shadow">
        <div className="container mx-auto p-6">
          <nav className="breadcrumbs">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </nav>
          <h1 className="text-4xl font-bold text-center">My Blog</h1>
          <p className="text-center text-gray-600">Welcome to my blog! Here you will find my latest posts.</p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
              <div className="card-body">
                <h2 className="card-title">
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <Link href={`/blog/${post.slug}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-base-100 text-center p-4 mt-6">
        <p className="text-gray-600">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
