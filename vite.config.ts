// TanStack Start configuration for Vercel deployment
// Uses the official @lovable.dev/vite-tanstack-config preset
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStartConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    tanstackStartConfig(), // Official TanStack Start configuration
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "@tanstack/react-start",
    ],
  },
});
