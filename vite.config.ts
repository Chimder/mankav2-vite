import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },

  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-radix': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-icons',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/themes',
          ],
          'vendor-tanstack': [
            '@tanstack/react-query',
            '@tanstack/react-query-devtools',
          ],
          'vendor-utils': ['dayjs', 'axios', 'zustand', 'immer', 'zod'],
        },
      },
    },

    assetsInlineLimit: 4096,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'axios',
      'dayjs',
      'zustand',
      'immer',
      'zod',
      '@radix-ui/themes',
    ],
    exclude: [],
    esbuildOptions: {
      target: 'esnext',
    },
  },

  preview: {
    port: 8080,
    strictPort: true,
    open: true,
    cors: true,
  },

  cacheDir: 'node_modules/.vite',
})
