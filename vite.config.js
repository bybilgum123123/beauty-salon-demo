import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  build: {
    target: 'es2020',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/enhancements.jsx',
      output: {
        entryFileNames: 'enhancements.js',
        chunkFileNames: 'chunks/[name]-[hash].js'
      }
    }
  }
});
