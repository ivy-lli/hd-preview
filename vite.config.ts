import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: { outDir: 'build', chunkSizeWarningLimit: 5000, rollupOptions: { input: { index: './index.html', mock: './mock.html' } } },
  server: {
    port: 3010,
    proxy: {
      '/designer': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  base: './'
});
