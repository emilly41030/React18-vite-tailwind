import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock';

const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: isDev,
      prodEnabled: !isDev,
      supportTs: false,
      watchFiles: true,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      injectFile: path.resolve(process.cwd(), 'src/main.jsx')
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    open: true
    // proxy: {
    //   "/api": {
    //     target: "https://624659e7e3450d61b0fd6ba2.mockapi.io/api/v1",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev-api/, ""),
    //   },
    // },
  },
})
