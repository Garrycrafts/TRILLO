import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {}, // keep this if you ever want global vars, mixins, etc.
    },
  },
  build: {
    minify: false, // 🔥 This disables CSS and JS minification
  },
});
