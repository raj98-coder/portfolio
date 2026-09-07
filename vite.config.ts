import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const port = Number(process.env.PORT ?? 5173);
const previewPort = Number(process.env.PREVIEW_PORT ?? 4173);
const basePath = process.env.BASE_PATH ?? '/';
const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, isReplit ? 'dist/public' : 'dist'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: process.env.PORT !== undefined,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: previewPort,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
