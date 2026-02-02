import React from 'react';
import { getAllPosts } from '@/app/blog/utils/getAllPosts';
import BlogIndexPageComponent from './BlogIndexPageComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tabs Open - Tech, Lifestyle, & Thoughts I Forgot to Close. Read articles about tech, lifestyle, fitness, beauty, food, and music.',
  openGraph: {
    type: 'website',
    title: 'Blog | aka.jimena',
    description: 'Tabs Open - Tech, Lifestyle, & Thoughts I Forgot to Close. Read articles about tech, lifestyle, fitness, beauty, food, and music.',
    url: '/blog',
    images: [
      {
        url: '/blog-images/blog-hero.png',
        width: 1200,
        height: 630,
        alt: 'aka.jimena Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | aka.jimena',
    description: 'Tabs Open - Tech, Lifestyle, & Thoughts I Forgot to Close. Read articles about tech, lifestyle, fitness, beauty, food, and music.',
    images: ['/blog-images/blog-hero.png'],
  },
};

interface SearchParams {
  tag: string; // Define the expected structure for searchParams
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
