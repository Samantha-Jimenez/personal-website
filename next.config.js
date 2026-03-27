/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw],
  },
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
}

export default withMDX(nextConfig)
