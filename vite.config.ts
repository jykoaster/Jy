import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Jy/',
  plugins: [vue(), pluginRewriteAll()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`,
      },
    },
  },
})
