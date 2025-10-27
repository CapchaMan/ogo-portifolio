import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ This is needed for Netlify (and GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: './',
})
