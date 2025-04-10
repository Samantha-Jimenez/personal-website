import { getPostBySlug } from '@/app/blog/utils/getPostBySlug';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from '@/app/blog/utils/formatDate';
import { parseMarkdown } from '@/app/blog/utils/parseMarkdown';

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
          <div>
            <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{formatDate(post.data.date)}</p>
            <div className="prose prose-p:text-gray-900 prose-headings:text-gray-800 prose-strong:text-gray-900 prose-li:text-gray-800 prose-li:marker:text-gray-500 prose-ul:list-[circle] max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </div>

      <footer className="py-8 text-center text-gray-500 border-t mt-12">
        © {new Date().getFullYear()} My Journal. All rights reserved.
      </footer>
    </div>
  );
}
