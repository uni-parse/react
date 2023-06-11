import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  preview: {
    port: 5000
  },
  server: {
    port: 3001,
  },
  plugins: [react()],
})
