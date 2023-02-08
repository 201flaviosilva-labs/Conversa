import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  build: {
    // Do not inline images and assets to avoid the phaser error
    // "Local data URIs are not supported"
    assetsInlineLimit: 0
  },
});
