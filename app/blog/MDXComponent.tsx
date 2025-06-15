import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>{children}</h3>
    ),
    a: ({ children, ...props }) => (
      <a {...props} style={{ color: 'green', textDecoration: 'underline' }}>
        {children}
      </a>
    ),
    p: ({ children }) => (
      <p style={{ fontWeight: '200', marginTop: '0px', marginBottom: '.75rem' }}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul style={{ marginTop: '0px', marginBottom: '.75rem', listStyleType: 'circle', fontWeight: '200', fontSize: '16px' }}>{children}</ul>
    ),
    img: (props) => {
      const { alt, width, height, src, ...rest } = props;
      const parsedWidth = width ? Number(width) : 800;
      const parsedHeight = height ? Number(height) : 600;
      const normalizedSrc =
        typeof src === 'string'
          ? src.startsWith('/') ? src : `/${src}`
          : '';
      return (
        <Image
          src={normalizedSrc}
          sizes="100vw"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            width: width ? `${parsedWidth}px` : '200px',
            height: 'auto',
            marginRight: '1em',
          }}
          alt={alt || ''}
          width={parsedWidth}
          height={parsedHeight}
          {...(rest as Omit<ImageProps, 'alt' | 'width' | 'height' | 'src'>)}
        />
      );
    },
    Image,
    Signature: ({ children }) => (
      <div className="nothing-you-could-do-regular text-3xl !text-zinc-600">
        {children}
      </div>
    ),
    Quote: ({ children }) => (
      <div className="text-sm italic !text-zinc-500 border-l-4 border-green-800/50 pl-4 my-6 leading-6">
       {children}
      </div>
    ),
    ...components,
  }
}