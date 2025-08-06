import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: [
        "resources/views/**/*.blade.php",
        "app/Http/Livewire/**",
        "app/Livewire/**",
        "app/Volt/**",
      ],
    }),
    tailwindcss(),
  ],
  server: {
    cors: true,
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: false,
  },
}));
