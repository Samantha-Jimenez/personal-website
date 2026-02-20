'use client'

import { motion } from 'framer-motion'

const SPOTIFY_ALBUM_EMBED_SRC = 'https://open.spotify.com/embed/album/1xlNNw1T0pxoTpm1ZGWRG7?utm_source=generator'

const SpotifyEmbed = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="w-full lg:w-[250px] flex-shrink-0 order-2 lg:order-none flex flex-col lg:min-h-0"
      aria-label="Now playing on Spotify"
    >
      <h2 className="text-[0.72rem] text-zinc-500 dark:text-zinc-400 tracking-[0.28em] uppercase mb-3 flex-shrink-0">
        Currently Listening
      </h2>
      <div className="flex-1 min-h-[352px] flex flex-col">
        <iframe
          data-testid="embed-iframe"
          className="w-full flex-1 min-h-[220px] rounded-xl"
          src={SPOTIFY_ALBUM_EMBED_SRC}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify album embed"
        />
      </div>
    </motion.aside>
  )
}

export default SpotifyEmbed
