import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()],
  build: {
    lib: {
      entry: 'src',
      name: 'index.js',
    },
    rollupOptions: {
      external: ['style-dictionary'],
    },
  },
})
