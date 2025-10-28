import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ Clean setup for Netlify / GitHub
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // <-- very important: makes assets load correctly
  server: {
    open: true,
  },
});
