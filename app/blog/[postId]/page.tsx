import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import BlogPostComponent from '@/app/blog/BlogPostComponent';
import { serialize } from 'next-mdx-remote/serialize';

export default async function BlogPost({ params }: { params: Promise<{ postId: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.postId);
  if (!post) return notFound();

  // Serialize the MDX content
  const mdxSource = await serialize(post.content);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <BlogPostComponent post={post} mdxSource={mdxSource} />
    </div>
  );
}
