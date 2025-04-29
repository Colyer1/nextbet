import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',   // True black
        accent: '#3b82f6',    // Electric blue
      }
    }
  },
  plugins: []
}

export default config
