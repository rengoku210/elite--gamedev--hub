// Elite Game Dev Hub - Vercel Static Deployment Configuration
// Builds as a pure client SPA (server functions handled separately)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    target: "esnext",
    minify: "terser",
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
    ],
  },
  define: {
    // Prevent server-side code from being imported
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  ssr: {
    noExternal: [],
    external: [
      "@tanstack/start-server-core",
      "node:async_hooks",
      "crypto",
    ],
  },
});
