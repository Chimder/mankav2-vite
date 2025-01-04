import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function Routes() {
  const router = createBrowserRouter([
    {
      async lazy() {
        let { Layout } = await import('./layout')
        return { Component: Layout }
      },
      children: [
        {
          path: '/',
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
                let { MangaTitle } = await import('../../pages/manga/title')
                return { Component: MangaTitle }
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
