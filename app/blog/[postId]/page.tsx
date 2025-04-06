import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link'; // Import Link for navigation

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
    <div className="min-h-screen bg-base-200 p-6">
      <nav className="breadcrumbs mb-4">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li>{post.title}</li>
        </ul>
      </nav>
      <article className="bg-base-100 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          <span>{post.date}</span>
          {/* You can add an author here if you have that data */}
          {/* <span className="ml-4">by {post.author}</span> */}
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {/* Placeholder for comments section */}
        <div className="bg-base-100 p-4 rounded-lg shadow">
          <p>No comments yet. Be the first to comment!</p>
          {/* You can implement a comment form here */}
        </div>
      </div>
    </div>
  );
}