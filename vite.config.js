import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/etsy-tailwind-project-v2",
  plugins: [react()],
})
