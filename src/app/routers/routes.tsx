import Chapter from '@/pages/chapter'
import Home from '@/pages/home'
import SearchManga from '@/pages/search'
import Title from '@/pages/title'
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
          // async lazy() {
          //   let { loader, Home } = await import('../../pages/home')
          //   return { loader: loader(queryClient), Component: Home }
          // },
        },
        {
          path: 'search',
          element: <SearchManga />,
          // async lazy() {
          //   let { loader, Streamer } = await import('../../pages/streamer')
          //   return { loader: loader(queryClient), Component: Streamer }
          // },
        },
        {
          path: 'chapter/:id',
          element: <Chapter />,
        },
        {
          path: 'title/:id',
          element: <Title />,
        },
        {
          path: 'chapter/:id',
          element: <Chapter />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
