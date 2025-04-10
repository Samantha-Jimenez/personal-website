import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from '@/app/blog/utils/formatDate';
import { parseMarkdown } from '@/app/blog/utils/parseMarkdown';
import Image from 'next/image';

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
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.data.title}</span>
        </nav>

        <article className="flex items-start">
          {post.data.coverImage && (
            <Image
              width={100}
              height={150}
              src={post.data.coverImage.startsWith('/') ? post.data.coverImage : `/${post.data.coverImage}`}
              alt={post.data.title}
              className="w-24 h-32 object-cover rounded mr-4"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{formatDate(post.data.date)}</p>
            <div className="prose prose-p:text-gray-500 prose-headings:text-gray-600 prose-strong:text-gray-700 prose-li:text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </div>

      <footer className="py-8 text-center text-gray-500 border-t mt-12">
        © {new Date().getFullYear()} My Journal. All rights reserved.
      </footer>
    </div>
  );
}
