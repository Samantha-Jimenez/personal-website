import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  // Note: In Tailwind 4, plugins are loaded via @plugin in CSS
  // daisyUI, @tailwindcss/typography, and @iconify/tailwind4 are loaded in globals.css
}
export default config
