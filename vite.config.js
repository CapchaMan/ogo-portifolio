import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ogo-portifolio/', // 👈 use your repo name exactly
})
