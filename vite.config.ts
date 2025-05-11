import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  root: "client",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src")
    }
  },
  server: {
    host: true, // Listen on all local IPs
    strictPort: false // Allow Vite to use another port if default is taken
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
