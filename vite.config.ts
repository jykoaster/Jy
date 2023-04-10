import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), pluginRewriteAll()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/main.scss";`,
      },
    },
  },
});
