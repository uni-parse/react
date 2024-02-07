import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import eslint from 'vite-plugin-eslint'

export default defineConfig({
  base: './',
  preview: {
    port: 5000,
  },
  server: {
    port: 3001,
  },
  plugins: [
    react(), 
   // eslint()
  ],
})
