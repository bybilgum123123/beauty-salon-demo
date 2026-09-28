import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    target: 'es2020',
    emptyOutDir: true,
    lib: {
      entry: 'src/enhancements.jsx',
      name: 'LumiereEnhancements',
      formats: ['es'],
      fileName: () => 'enhancements.js',
      cssFileName: 'enhancements'
    }
  }
});
