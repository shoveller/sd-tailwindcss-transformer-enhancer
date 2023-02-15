import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()],
  build: {
    lib: {
      entry: 'src',
      formats: ['cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['style-dictionary'],
    },
  },
})
