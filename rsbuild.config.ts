// import { defineConfig, loadEnv } from '@rsbuild/core'
// import { pluginBabel } from '@rsbuild/plugin-babel'
// import { pluginReact } from '@rsbuild/plugin-react'

// const { publicVars } = loadEnv({ prefixes: ['VITE_'] })

// export default defineConfig({
//   plugins: [
//     pluginReact(),
//     pluginBabel({
//       include: /\.(?:jsx|tsx)$/,
//       babelLoaderOptions(opts) {
//         opts.plugins?.unshift('babel-plugin-react-compiler')
//       },
//     }),
//   ],

//   html: {
//     template: './index.html',
//   },

//   source: {
//     define: publicVars,
//     entry: {
//       index: './src/app/main.tsx',
//     },
//   },
//   performance: {
//     removeMomentLocale: true,
//   },
// })
