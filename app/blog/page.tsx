import React from 'react';
import { getAllPosts } from '@/app/blog/utils/getAllPosts';
import BlogIndexPageComponent from './BlogIndexPageComponent';

interface SearchParams {
  tag?: string; // Define the expected structure for searchParams
}

interface PageProps {
  searchParams: Promise<SearchParams>; // Change to Promise
}

const BlogPage: React.FC<PageProps> = async ({ searchParams }) => {
  const posts = await getAllPosts(); // Fetch posts directly in the component
  const resolvedSearchParams = await searchParams; // Await the searchParams
  const tag = resolvedSearchParams.tag; // Access the tag

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <BlogIndexPageComponent posts={posts} tag={tag} />
    </div>
  );
};

export default BlogPage;
