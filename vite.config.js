import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  //moving asset folder under public folder includes it in the dist folder so they can be accessed 
  //in production after building the app
  //setting base as "./" allows relative imgs paths
  //other option would be to remove all imgs from img folder and put them directly under public folder
  base: "./",
  plugins: [react()],
})
