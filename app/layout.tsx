import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aka.jimena',
  description: 'Created by Samantha Jimenez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://code.iconify.design/3/3.1.0/iconify.min.css" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&quot;);
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Nothing+You+Could+Do&display=swap');
        </style>
      </head>
      <body className={`${inter.className} montserrat-mine`}>
        <Toaster 
          toastOptions={{
            className: 'montserrat-mine',
          }}
        />
        {children}
      </body>
    </html>
  )
}
