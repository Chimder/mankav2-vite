import { QueryClient } from '@tanstack/react-query'
import { LoaderFunctionArgs } from 'react-router-dom'

import { mangaApi } from '@/hooks/api/mangadex/manga'
import Chapters from '@/components/Manga/title-info/chapters'
import Info from '@/components/Manga/title-info/info'

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params
    if (!params.id) {
      throw new Error('No ID')
    }
    await queryClient.ensureQueryData(mangaApi.useMangaByID(id))
    return { id: id }
  }

export const MangaTitle = () => {
  // const { dehydratedState } = useLoaderData<typeof loader>()

  return (
    <div className="z-10 flex h-[calc(100vh-64px)] border-green-400 bg-black px-[2px] text-white">
      <div className="order-2 flex w-2/5 flex-col overflow-hidden">
        <div className="chapters-scrollbar flex flex-col overflow-y-auto">
          <Info />
        </div>
      </div>
      <div className="relative flex w-3/5 flex-col rounded-lg border bg-primary text-white">
        <div className="flex-grow overflow-y-auto">
          <Chapters />
        </div>
      </div>
    </div>
  )
}
