import { getPostBySlug, PostWithContent } from '@/app/blog/utils/getPostBySlug';
import { getRelatedPosts } from '@/app/blog/utils/getRelatedPosts';
import { notFound } from 'next/navigation';
import BlogPostComponent from '@/app/blog/BlogPostComponent';
import { serialize } from 'next-mdx-remote/serialize';

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

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <BlogPostComponent post={post} mdxSource={mdxSource} relatedPosts={relatedPosts} />
    </div>
  );
}
