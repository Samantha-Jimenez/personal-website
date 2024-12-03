import React from 'react'
import { ThinInstagramIcon, ThinTikTokIcon, ThinYoutubeIcon, ThinThreadsIcon, ThinGitHubIcon, ThinLinkedInIcon, ThinGoogleMailIcon, YoutubeIcon, InstagramIcon, ThinStravaIcon, GoodReadsIcon, ThinPorftolioIcon } from '../icons/Icons'

const NavBar = () => {
  return (
    <div className="navbar bg-zinc-900 flex flex-col min-[715px]:flex-row min-[546px]:flex-col min-[455px]:flex-row justify-between">
      <div className="">
            <a className="px-5 btn-ghost text-xl bungee-hairline-regular hover:bg-transparent active:transform-none focus:transform-none">aka.jimena</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 max-[545px]:grid max-[545px]:grid-flow-col max-[545px]:grid-cols-5 max-[545px]:grid-rows-2">
            {/* <ul className="menu menu-horizontal px-1 max-[340px]:grid max-[340px]:grid-cols-3 min-[340px]:flex"> */}
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinInstagramIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinThreadsIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinTikTokIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinYoutubeIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGoogleMailIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinGitHubIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinLinkedInIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinStravaIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><GoodReadsIcon /></a></li>
                <li><a className="hover:scale-150 hover:bg-transparent transition-transform duration-200"><ThinPorftolioIcon /></a></li>
            {/* <li>
                <details>
                <summary className="montserrat-mine">Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a><TikTokIcon /></a></li>
                    <li><a><InstagramIcon /></a></li>
                    <li><a><YoutubeIcon /></a></li>
                </ul>
                </details>
            </li> */}
            </ul>
      </div>
    </div>
  )
}

export default NavBar