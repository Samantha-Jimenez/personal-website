/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const mdxOptions = {
  extension: /\.mdx?$/,
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw],
}

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  mdxOptions,
  // other Next.js configurations
})
