import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Fastag Recharge App",
        short_name: "FastagApp",
        description: "FASTag recharge web app built with React + Vite",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1a73e8",
        icons: [
          {
            src: "/icons/iconL-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
        ],
       
        
      },
    }),
  ],
});
