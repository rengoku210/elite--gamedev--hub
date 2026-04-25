// Elite Game Dev Hub - Vercel Static SPA Configuration
// Final solution: Mock problematic server-core module
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Mock the server-core module that's causing issues
      "@tanstack/start-server-core": path.resolve(__dirname, "./src/empty-module.ts"),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    minify: "terser",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
    exclude: ["@tanstack/start-server-core"],
  },
});
