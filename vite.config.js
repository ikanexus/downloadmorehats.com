import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    UnoCSS(),
  ],
})
