import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'><path fill='%2329a664' d='M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z'></path><path fill='%23fff' d='M23.102 22.799c0 5.209-3.318 6.573-6.139 6.573c-2.14 0-5.705-.837-5.705-3.534c0-.838.713-1.892 1.736-1.892c1.24 0 2.325 1.147 3.721 1.147c1.736 0 1.736-1.613 1.736-2.605V9.156c0-1.55.993-2.418 2.325-2.418c1.334 0 2.326.868 2.326 2.418z'></path></svg>" />
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&quot;);
        </style>
        {/* <link rel="stylesheet" href="https://code.iconify.design/3/3.1.0/iconify.min.css" /> */}
      </head>
      <body className={`${inter.className} montserrat-mine`}>
        <NavBar />
        <Toaster 
          toastOptions={{
            className: 'montserrat-mine',
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
