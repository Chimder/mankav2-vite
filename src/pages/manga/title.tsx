import { QueryClient } from '@tanstack/react-query'
import { LoaderFunctionArgs } from 'react-router-dom'

import { mangaApi } from '@/hooks/api/mangadex/manga'
import Chapters from '@/components/Manga/title-info/chapters'
import Info from '@/components/Manga/title-info/info'

export const loader =
  (queryClient: QueryClient) =>
  async ({ params, request }: LoaderFunctionArgs) => {
    const { id } = params
    if (!params.id) {
      throw new Error('No ID')
    }
    console.log('REQ', request)
    queryClient.ensureQueryData(mangaApi.useMangaByID(id))
    // await queryClient.ensureQueryData(jikanMangaApi.useMangaByName({ name }))
    return { id: id }
  }

export const MangaTitle = () => {
  return (
    <div className="z-10 flex h-[calc(100vh-64px)] border-green-400 bg-black px-[2px] text-white md:h-full md:flex-col">
      <div className="filterBar order-2 flex w-2/5 flex-col overflow-hidden overflow-y-scroll md:order-1 md:w-full">
        <div className="flex w-full flex-col">
          <Info />
        </div>
      </div>
      <div className="relative flex w-3/5 flex-col rounded-lg border border-border bg-primary text-white md:order-2 md:w-full">
        <div className="flex-grow overflow-y-auto">
          <Chapters />
        </div>
      </div>
    </div>
  )
}
