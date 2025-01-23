import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { queryClient } from '../providers/tanstack-query'
import { Layout } from './layout'

export default function Routes() {
  const router = createBrowserRouter([
    {
      // async lazy() {
      //   let { Layout } = await import('./layout')
      //   return { Component: Layout }
      // },
      element: <Layout />,
      children: [
        {
          path: '/test',
          async lazy() {
            let { Test } = await import('../../pages/test')
            return { Component: Test }
          },
        },
        {
          path: '/',
          async lazy() {
            let { Home } = await import('../../pages/home')
            return { Component: Home }
          },
        },
        {
          path: '/favorites',
          async lazy() {
            let { Favorites } = await import('../../pages/favorites')
            return { Component: Favorites }
          },
        },

        {
          path: 'manga',
          children: [
            {
              path: '',
              async lazy() {
                let { MangaMain } = await import('../../pages/manga/index')
                return { Component: MangaMain }
              },
            },
            {
              path: 'search',
              async lazy() {
                let { MangaSearch } = await import('../../pages/manga/search')
                return { Component: MangaSearch }
              },
            },
            {
              path: 'title/:id',
              async lazy() {
                let { MangaTitle, loader } = await import(
                  '../../pages/manga/title'
                )
                return { loader: loader(queryClient), Component: MangaTitle }
              },
            },
            {
              path: 'chapter/:id',
              async lazy() {
                let { MangaChapter } = await import('../../pages/manga/chapter')
                return {
                  Component: MangaChapter,
                }
              },
            },
          ],
        },
        {
          path: 'anime',
          children: [
            {
              path: '',
              async lazy() {
                let { AnimeMain } = await import('../../pages/anime/index')
                return { Component: AnimeMain }
              },
            },
            {
              path: 'title/:id',
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
