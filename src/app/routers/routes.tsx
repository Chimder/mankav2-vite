import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AnimeMain } from '../../pages/anime/index'
import { AnimeTitle } from '../../pages/anime/title'
import { Favorites } from '../../pages/favorites'
import { Home } from '../../pages/home'
import { MangaChapter } from '../../pages/manga/chapter'
import { MangaMain } from '../../pages/manga/index'
import { MangaSearch } from '../../pages/manga/search'
import { MangaTitle } from '../../pages/manga/title'
import { Test } from '../../pages/test'
import { Layout } from './layout'

export default function Routes() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/test',
          element: <Test />,
          // async lazy() {
          //   let { Test } = await import('../../pages/test')
          //   return { Component: Test }
          // },
        },
        {
          path: '/',
          element: <Home />,
          // async lazy() {
          //   let { Home } = await import('../../pages/home')
          //   return { Component: Home }
          // },
        },
        {
          path: '/favorites',
          element: <Favorites />,
          // async lazy() {
          //   let { Favorites } = await import('../../pages/favorites')
          //   return { Component: Favorites }
          // },
        },

        {
          path: 'manga',
          children: [
            {
              path: '',
              element: <MangaMain />,
              // async lazy() {
              //   let { MangaMain } = await import('../../pages/manga/index')
              //   return { Component: MangaMain }
              // },
            },
            {
              path: 'search',
              element: <MangaSearch />,
              // async lazy() {
              //   let { MangaSearch } = await import('../../pages/manga/search')
              //   return { Component: MangaSearch }
              // },
            },
            {
              path: 'title/:id',
              element: <MangaTitle />,
              // async lazy() {
              //   let { MangaTitle } = await import('../../pages/manga/title')
              //   return { Component: MangaTitle }
              // },
            },
            {
              path: 'chapter/:id',
              element: <MangaChapter />,
              // async lazy() {
              //   let { MangaChapter } = await import('../../pages/manga/chapter')
              //   return {
              //     Component: MangaChapter,
              //   }
              // },
            },
          ],
        },
        {
          path: 'anime',
          children: [
            {
              path: '',
              element: <AnimeMain />,
              // async lazy() {
              //   let { AnimeMain } = await import('../../pages/anime/index')
              //   return { Component: AnimeMain }
              // },
            },
            {
              path: 'title/:id',
              element: <AnimeTitle />,
              // async lazy() {
              //   let { AnimeTitle } = await import('../../pages/anime/title')
              //   return { Component: AnimeTitle }
              // },
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
