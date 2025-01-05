// import path from 'path'
// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//     }),
//   ],
//   base: '/',
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },

//   // cacheDir: path.resolve(__dirname, 'node_modules/.vite'),

//   server: {
//     port: 3000,
//   },

//   // build: {
//   //   outDir: 'dist',
//   // rollupOptions: {
//   // cache: true,
//   // },
//   // modulePreload: {
//   //   polyfill: false,
//   // },
//   // },

//   preview: {
//     port: 3000,
//     strictPort: true,
//     open: true,
//     cors: true,
//   },

//   optimizeDeps: {
//     include: [
//       'react',
//       'react-dom',
//       'react-router-dom',
//       '@tanstack/react-query',
//       '@tanstack/react-query-devtools',
//       'axios',
//       'zustand',
//       'immer',
//       'clsx',
//       'classnames',
//       'dayjs',
//     ],
//     exclude: ['@radix-ui/themes'],
//   },
// })
