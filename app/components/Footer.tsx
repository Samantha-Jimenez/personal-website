import React from 'react'
import { ThinInstagramIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinTikTokIcon, ThinStravaIcon, GoodReadsIcon, ThinGoogleMailIcon } from '../icons/Icons'

const Footer = () => {
  return (
    <footer className="footer bg-zinc-900 text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
            <p className="montserrat-mine font-light">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinInstagramIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinThreadsIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinTikTokIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinYoutubeIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGoogleMailIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGitHubIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinLinkedInIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinStravaIcon /></a>
        <a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><GoodReadsIcon /></a>
        </nav>
    </footer>   
  )
}

export default Footer