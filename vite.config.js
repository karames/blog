import {
  defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/views/livewire/**/*.blade.php',
        'resources/views/**/*.blade.php',
      ],
      refresh: true,
    }),
    tailwindcss(),
  ],
  server: {
    cors: true,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'public/build',
    manifest: true,
    sourcemap: true,
  },
});
