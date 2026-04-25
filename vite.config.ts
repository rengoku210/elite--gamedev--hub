// Elite Game Dev Hub - WORKING VERCEL CONFIG
// Aliases all server-side modules to empty placeholder
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Alias all server-side TanStack modules to empty module
      "@tanstack/start-server-core": path.resolve(__dirname, "./src/empty-module.ts"),
      "@tanstack/start-storage-context": path.resolve(__dirname, "./src/empty-module.ts"),
      "@tanstack/react-start": path.resolve(__dirname, "./src/empty-module.ts"),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    minify: "terser",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/start-storage-context",
      "@tanstack/react-start",
    ],
  },
});
