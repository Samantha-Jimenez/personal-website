/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const mdxOptions = {
  extension: /\.mdx?$/,
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw],
}

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
}

export default withMDX({
  ...nextConfig,
  mdxOptions,
  // other Next.js configurations
})
