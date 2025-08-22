import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "themes",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
