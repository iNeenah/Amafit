import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Para Vercel usamos base root
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})