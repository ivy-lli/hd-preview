import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: { outDir: 'build', chunkSizeWarningLimit: 5000, rollupOptions: { input: { index: './index.html', mock: './mock.html' } } },
  server: {
    port: 3000
  },
  base: './'
});
