import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import { parseMarkdown } from '@/app/blog/utils/parseMarkdown';
import BlogPostComponent from '@/app/blog/BlogPostComponent';

interface Params {
  postId: string;
}

type PageProps = {
  params: Promise<Params>; // Ensure params is a Promise
};

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params; // Await the params
  const post = await getPostBySlug(resolvedParams.postId); // Fetch post data directly
  if (!post) return notFound(); // Handle not found

  const content = parseMarkdown(post.content);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <BlogPostComponent post={post} content={content} />
    </div>
  );
}
