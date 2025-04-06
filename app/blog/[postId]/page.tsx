import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';

interface Params {
  postId: string; // Define the type for postId
}

type PageProps = {
  params: Promise<Params>; // Change this to a Promise<Params>
};

export default async function BlogPost({ params }: PageProps) { // Specify the type for params
  const resolvedParams = await params; // Await the params
  const postId = resolvedParams.postId; // Access postId from the resolved params
  const post = await getPostBySlug(postId); // Use postId here
  if (!post) return notFound();

  return (
    <article className="p-8 prose max-w-none">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-6 text-gray-600">{post.date}</div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}