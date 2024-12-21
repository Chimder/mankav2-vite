import AnimeMain from '@/pages/anime'
import AnimeTitle from '@/pages/anime/title'
import Home from '@/pages/home'
import MangaMain from '@/pages/manga'
import MangaChapter from '@/pages/manga/chapter'
import MangaSearch from '@/pages/manga/search'
import MangaTitle from '@/pages/manga/title'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout'

export default function Routes() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'manga',
          // element: <MangaLayout />,
          children: [
            {
              path: '',
              element: <MangaMain />,
            },
            {
              path: 'search',
              element: <MangaSearch />,
            },
            {
              path: 'title/:id',
              element: <MangaTitle />,
            },
            {
              path: 'chapter/:id',
              element: <MangaChapter />,
            },
          ],
        },
        {
          path: 'anime',
          // element: <AnimeLayout />,
          children: [
            {
              path: '',
              element: <AnimeMain />,
            },
            {
              path: 'search',
              // element: <AnimeSearch />,
            },
            {
              path: 'title/:id',
              element: <AnimeTitle />,
            },
            {
              path: 'chapter/:id',
              // element: <AnimeChapter />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
