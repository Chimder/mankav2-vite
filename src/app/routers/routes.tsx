import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MangaSearch } from '../../pages/manga/search'
import { queryClient } from '../providers/tanstack-query'

// import Layout from './layout'

export default function Routes() {
  const router = createBrowserRouter([
    {
      // element: <Layout />,
      async lazy() {
        let { Layout } = await import('./layout')
        return { Component: Layout }
      },
      children: [
        {
          path: '/',
          // element: <Home />,
          // lazy: () => import('../../pages/home'),
          async lazy() {
            let { Home } = await import('../../pages/home')
            return { Component: Home }
          },
        },
        {
          path: 'manga',
          children: [
            {
              path: '',
              // element: <MangaMain />,
              async lazy() {
                let { MangaMain } = await import('../../pages/manga/index')
                return { Component: MangaMain }
              },
            },
            {
              path: 'search',
              // element: <MangaSearch />,
              async lazy() {
                let { MangaSearch } = await import('../../pages/manga/search')
                return { Component: MangaSearch }
              },
            },
            {
              path: 'title/:id',
              // element: <MangaTitle />,
              async lazy() {
                let { loader, MangaTitle } = await import(
                  '../../pages/manga/title'
                )
                return { loader: loader(queryClient), Component: MangaTitle }
              },
            },
            // {
            //   path: 'chapter/:id',
            //   // element: <MangaChapter />,
            //   async lazy() {
            //     let { MangaChapter } = await import('../../pages/manga/chapter')
            //     return {
            //       Component: MangaChapter,
            //     }
            //   },
            // },
          ],
        },
        {
          path: 'anime',
          // element: <AnimeLayout />,
          children: [
            {
              path: '',
              // element: <AnimeMain />,
              async lazy() {
                let { AnimeMain } = await import('../../pages/anime/index')
                return { Component: AnimeMain }
              },
            },
            {
              path: 'title/:id',
              // element: <AnimeTitle />,
              async lazy() {
                let { AnimeTitle } = await import('../../pages/anime/title')
                return { Component: AnimeTitle }
              },
            },
            // {
            //   path: 'search',
            //   // element: <AnimeSearch />,
            // },
            // {
            //   path: 'chapter/:id',
            //   // element: <AnimeChapter />,
            // },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
