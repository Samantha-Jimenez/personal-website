import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    img: (props) => {
      const { alt, ...rest } = props;
      return (
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...(rest as ImageProps)}
        />
      );
    },
    ...components,
  }
}