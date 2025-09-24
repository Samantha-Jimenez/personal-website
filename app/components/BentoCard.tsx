import React from "react";
import Image from "next/image";

/**
 * Bento-style media card
 * - Responsive CSS Grid with overlapping corner badge
 * - Big primary tile + vertical strip of thumbs + CTA button
 * - Works with TailwindCSS (no extra plugins required)
 */
export default function BentoCard() {
  return (
    <div className="w-full max-w-4xl ml-auto p-4">
      {/* Card wrapper */}
      <div className="relative grid md:grid-cols-[110px_1fr_1fr_1fr_1fr] md:grid-rows-[166px_230px_145px_145px] rounded-[60px] p-3 md:p-4">
        {/* Corner badge */}
        <div className="col-start-5 col-end-6 row-start-1 row-end-2 grid gap-3 md:gap-4 bg-black text-white place-items-center shadow-xl h-28 w-28 rounded-full place-self-center z-20">
          <span className="text-xl">🌐</span>
        </div>

        {/* Inner L-corner cutout for rounded effect */}
        <div
          className="bg-[#F3F4F6] z-10 hidden md:block absolute right-[116.5px] top-[102px] w-20 h-20 rounded-bl-[75px] pointer-events-none"
        />
        <div
          className="bg-[#FDB74A] z-0 hidden md:block absolute right-[116.5px] top-[102px] w-20 h-20 z-20 pointer-events-none"
        />

        {/* Left strip: two thumbs + CTA */}
        <div className="md:col-span-1 col-start-1 col-end-2 row-start-3 row-end-5 grid justify-self-center mt-4">
        {/* <div className="grid-rows-[30px_30px_30px] grid gap-3 md:gap-4"> */}
          <button className="aspect-square rounded-full overflow-hidden bg-white shadow ring-1 ring-black/5 hover:ring-black/10 transition h-20 w-20 z-20">
            <Image
              alt="thumb 1"
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=400&auto=format&fit=crop"
              width={80}
              height={80}
              className="h-full w-full object-cover relative"
            />
          </button>
          <button className="aspect-square rounded-full overflow-hidden bg-white shadow ring-1 ring-black/5 hover:ring-black/10 transition h-20 w-20">
            <Image
              alt="thumb 2"
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </button>
          <a
            href="#"
            className="aspect-square rounded-full bg-black text-white grid place-items-center shadow-lg hover:opacity-90 transition h-20 w-20"
            aria-label="Open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M14 3h7v7h-2V6.414l-8.293 8.293-1.414-1.414L17.586 5H14V3Z" />
              <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
            </svg>
          </a>
        </div>

        {/* Main tile */}
        <div className="col-start-1 col-end-5 md:row-start-1 md:row-end-3 relative rounded-t-[60px] rounded-l-[60px] overflow-hidden bg-[#FDB74A] flex">
          {/* Background image */}
          {/* <img
            alt="hero"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
          /> */}

          {/* Content */}
          <div className="relative flex-1 grid md:grid-cols-5">
            <div className="col-span-3 flex items-end justify-center md:justify-start p-6">
              {/* Person with camera */}
              {/* <img
                alt="person"
                src="https://images.unsplash.com/photo-1520975930019-47a5ad9b64ac?q=80&w=900&auto=format&fit=crop"
                className="h-[85%] object-contain drop-shadow-xl"
              /> */}
            </div>
            <div className="col-span-2 relative">
              {/* Signature / scribble */}
              {/* <svg
                className="absolute top-6 left-6 w-40 md:w-52 opacity-90 text-white"
                viewBox="0 0 513 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 88C84 4 188 76 188 92c0 32-56 40-56 14 0-26 116-60 192-60 76 0 112 24 160 24"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg> */}
            </div>
          </div>

          {/* Rounded shadow fade at bottom */}
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent" /> */}
        </div>

        {/* Main tile */}
        <div className="md:col-start-2 md:col-end-6 md:row-start-2 md:row-end-5 relative rounded-b-[60px] rounded-tr-[60px] overflow-hidden bg-[#FDB74A] min-h-72 md:min-h-[420px] flex">
          {/* Background image */}
          {/* <img
            alt="hero"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
          /> */}

          {/* Content */}
          <div className="relative flex-1 grid md:grid-cols-5">
            <div className="col-span-3 flex items-end justify-center md:justify-start p-6">
              {/* Person with camera */}
              {/* <img
                alt="person"
                src="https://images.unsplash.com/photo-1520975930019-47a5ad9b64ac?q=80&w=900&auto=format&fit=crop"
                className="h-[85%] object-contain drop-shadow-xl"
              /> */}
            </div>
            <div className="col-span-2 relative">
              {/* Signature / scribble */}
              {/* <svg
                className="absolute top-6 left-6 w-40 md:w-52 opacity-90 text-white"
                viewBox="0 0 513 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 88C84 4 188 76 188 92c0 32-56 40-56 14 0-26 116-60 192-60 76 0 112 24 160 24"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg> */}
            </div>
          </div>

          {/* Rounded shadow fade at bottom */}
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent" /> */}
        </div>
        <div
          className="bg-[#F3F4F6] z-10 hidden md:block absolute left-[86.5px] bottom-[266px] w-10 h-10 rounded-tr-[60px] pointer-events-none"
        />

        {/* Inner L-corner cutout for rounded effect */}
        <div
          className="bg-[#FDB74A] z-0 hidden md:block absolute left-[86.5px] bottom-[266px] w-16 h-16 z-20 pointer-events-none"
        />
      </div>
      
    </div>
  );
}
