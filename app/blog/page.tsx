import React from 'react';
import { getAllPosts } from '@/app/blog/utils/getAllPosts'; // Update the path

const BlogPage: React.FC = async () => {
  const posts = await getAllPosts(); // Fetch all posts

  if (posts.length === 0) {
    return <div>No blog posts available.</div>; // Display a message if no posts are found
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <p className="mb-6">Welcome to my blog! Here you will find my latest posts.</p>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                <a href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  {post.title}
                </a>
              </h2>
              <p>{post.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
