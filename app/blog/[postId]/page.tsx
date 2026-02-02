import { getPostBySlug, PostWithContent } from '@/app/blog/utils/getPostBySlug';
import { getRelatedPosts } from '@/app/blog/utils/getRelatedPosts';
import { getAdjacentPosts } from '@/app/blog/utils/getAdjacentPosts';
import { notFound } from 'next/navigation';
import BlogPostComponent from '@/app/blog/BlogPostComponent';
import { serialize } from 'next-mdx-remote/serialize';
import type { Metadata } from 'next';

// Generate dynamic metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ postId: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const post = getPostBySlug(resolvedParams.postId);
    const coverImage = post.data.coverImage?.startsWith('/') 
      ? post.data.coverImage 
      : `/${post.data.coverImage}`;

    return {
      title: post.data.title,
      description: post.data.excerpt,
      keywords: post.data.tags,
      openGraph: {
        type: 'article',
        title: post.data.title,
        description: post.data.excerpt,
        url: `/blog/${resolvedParams.postId}`,
        images: post.data.coverImage ? [
          {
            url: coverImage,
            width: 1200,
            height: 630,
            alt: post.data.title,
          },
        ] : [],
        publishedTime: post.data.date,
        authors: ['Samantha Jimenez'],
        tags: post.data.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.data.title,
        description: post.data.excerpt,
        images: post.data.coverImage ? [coverImage] : [],
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ postId: string }> }) {
  const resolvedParams = await params;
  
  let post: PostWithContent;
  try {
    post = getPostBySlug(resolvedParams.postId);
  } catch {
    return notFound();
  }

  // Serialize the MDX content
  const mdxSource = await serialize(post.content);

  // Get related posts based on shared tags
  const relatedPosts = getRelatedPosts(resolvedParams.postId, post.data.tags, 3);

  // Get previous and next posts for navigation
  const { previousPost, nextPost } = getAdjacentPosts(resolvedParams.postId);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <BlogPostComponent 
        post={post} 
        mdxSource={mdxSource} 
        relatedPosts={relatedPosts} 
        slug={resolvedParams.postId}
        previousPost={previousPost}
        nextPost={nextPost}
      />
    </div>
  );
}
