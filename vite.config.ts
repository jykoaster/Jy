import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  appType: 'spa',
  
  base: '/',
  
  plugins: [
    vue()
  ],
  
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/main.scss" as *;`,
        api: 'modern-compiler'
      },
    },
  },

  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollToPlugin']
  }
})