import Chapters from '@/components/Manga/title-info/chapters'
import Info from '@/components/Manga/title-info/info'

// export const loader =
//   (queryClient: QueryClient) =>
//   async ({ params }: LoaderFunctionArgs) => {
//     const { id } = params
//     if (!params.id) {
//       throw new Error('No ID')
//     }
//     await queryClient.ensureQueryData(mangaApi.useMangaByID(id))
//     return { id: id }
//   }

export const MangaTitle = () => {
  return (
    <div className="z-10 flex h-[calc(100vh-64px)] border-green-400 bg-black px-[2px] text-white md:h-full md:flex-col">
      <div className="order-2 flex w-2/5 flex-col overflow-hidden overflow-y-scroll md:order-1 md:w-full">
        <div className="chapters-scrollbar flex w-full flex-col overflow-y-auto overflow-x-hidden">
          <Info />
        </div>
      </div>
      <div className="relative  flex w-3/5 flex-col rounded-lg border border-border bg-primary text-white md:order-2 md:w-full">
        <div className="flex-grow overflow-y-auto">
          <Chapters />
        </div>
      </div>
    </div>
  )
}
