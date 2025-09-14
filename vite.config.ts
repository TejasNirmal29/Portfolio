import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { global: "window" },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/": path.resolve(__dirname, "src"),
      "@navigation": path.resolve(__dirname, "src/navigation"),
      "@components": path.resolve(__dirname, "src/components"),

      "@constants": path.resolve(__dirname, "src/constants"),
      "@db": path.resolve(__dirname, "src/db"),
      "@types": path.resolve(__dirname, "src/types"),
      "@helpers": path.resolve(__dirname, "src/helpers"),

      "@layouts": path.resolve(__dirname, "src/layouts"),

      "@themes": path.resolve(__dirname, "src/themes"),

      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
