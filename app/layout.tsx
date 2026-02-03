import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import BuyMeACoffeeAnimation from './components/BuyMeACoffeeAnimation'

const inter = Inter({ subsets: ['latin'] })

// Base URL for the site - update this when deploying
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://akajimena.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'aka.jimena | Samantha Jimenez',
    template: '%s | aka.jimena',
  },
  description: 'Personal website and blog by Samantha Jimenez. Tech, lifestyle, fitness, beauty, food, and music.',
  keywords: ['Samantha Jimenez', 'aka.jimena', 'blog', 'tech', 'lifestyle', 'fitness', 'beauty', 'food', 'music'],
  authors: [{ name: 'Samantha Jimenez' }],
  creator: 'Samantha Jimenez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'aka.jimena',
    title: 'aka.jimena | Samantha Jimenez',
    description: 'Personal website and blog by Samantha Jimenez. Tech, lifestyle, fitness, beauty, food, and music.',
    images: [
      {
        url: '/blog-images/blog-hero.png',
        width: 1200,
        height: 630,
        alt: 'aka.jimena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aka.jimena | Samantha Jimenez',
    description: 'Personal website and blog by Samantha Jimenez. Tech, lifestyle, fitness, beauty, food, and music.',
    images: ['/blog-images/blog-hero.png'],
    creator: '@akajimena', // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedMode = localStorage.getItem('darkMode');
                  if (savedMode !== null) {
                    const isDark = savedMode === 'true';
                    if (isDark) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } else {
                    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDarkMode) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                    localStorage.setItem('darkMode', prefersDarkMode.toString());
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* <link rel="stylesheet" href="https://code.iconify.design/3/3.1.0/iconify.min.css" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <script 
          defer
          data-name="BMC-Widget" 
          data-cfasync="false" 
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
          data-id="samanthabj8" 
          data-description="Support me on Buy me a coffee!" 
          data-message="" 
          data-color="#40DCA5" 
          data-position="right"
          data-x_margin="8" 
          data-y_margin="10">
        </script>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Chango&family=Knewave&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap&quot;);
          @import url(&quot;https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Chango&family=Knewave&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap&quot;);
        </style>  
      </head>
      <body className={`${inter.className} roboto-mine`}>
        <BuyMeACoffeeAnimation />
        <Toaster 
          toastOptions={{
            className: 'roboto-mine',
          }}
        />
        {children}
      </body>
    </html>
  )
}
