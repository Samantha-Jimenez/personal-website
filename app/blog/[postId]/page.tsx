import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Params {
  postId: string;
}

type PageProps = {
  params: Promise<Params>;
};

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const postId = resolvedParams.postId;
  const post = await getPostBySlug(postId);
  if (!post) return notFound();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
        </nav>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{post.date}</p>
          {post.image && (
            <img src={post.image} alt={post.title} className="rounded mb-8 w-full h-auto" />
          )}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="bg-gray-50 border p-6 rounded shadow-sm">
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-gray-500 border-t mt-12">
        © {new Date().getFullYear()} My Journal. All rights reserved.
      </footer>
    </div>
  );
}