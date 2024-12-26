import { LoaderFunctionArgs, ScrollRestoration } from 'react-router-dom'

import Chapters from '@/components/Manga/title-info/chapters'
import Info from '@/components/Manga/title-info/info'
import { QueryClient } from '@tanstack/react-query'
import { mangaApi } from '@/hooks/api/mangadex/manga'

//   () => import('../../components/Manga/title-info/characters'),
// )
// const Info = lazy(() => import('../../components/Manga/title-info/info'))
// const Chapters = lazy(


export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) {
      console.log(params.id)
      throw new Error('No contact ID provided')
    }
    const id = params.id

    queryClient.ensureQueryData(mangaApi.useMangaByID(id))
    // queryClient.ensureQueryData(useUserEmotes(id))
    return id
  }

export const MangaTitle = () => {
  return (
    <div className="z-10 flex h-[calc(100vh-64px)] border-green-400 px-[2px] text-white">
      <ScrollRestoration />
      <div className="order-2 flex w-2/5 flex-col overflow-hidden">
        <div className="chapters-scrollbar flex flex-col overflow-y-auto">
          <Info />
        </div>
      </div>
      <div className="relative flex w-3/5 flex-col border border-green-400 text-white">
        <div className="flex-grow overflow-y-auto">
          <Chapters />
        </div>
      </div>
    </div>
  )
}
