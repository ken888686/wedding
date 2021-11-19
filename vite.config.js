import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": pathSrc,
      "/img": "src/assets/img",
      "/styles": "src/styles",
    },
  },
});
