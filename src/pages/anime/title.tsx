import AnimeTitleInfo from '@/components/Anime/anime-info/info'
import AnimeVideo from '@/components/Anime/anime-video/video'

// export async function loader({ params }: LoaderFunctionArgs) {
//   const queryClient = new QueryClient()
//   const id = params.id as string

//   await queryClient.prefetchQuery({
//     queryKey: [aniwatchApi.baseKey, 'info', id],
//     queryFn: async ({ signal }) => {
//       const res = await instance.get<AnimeByIdType>(`/anime/${id}`, {
//         signal,
//       })
//       return res.data
//     },
//   })

//   return json({ dehydratedState: dehydrate(queryClient) })
// }

export const AnimeTitle = () => {
  // const { dehydratedState } = useLoaderData<typeof loader>()

  return (
    <div className="z-10 flex h-[calc(100vh-64px)] border-green-400 bg-black text-white md:h-full md:flex-col">
        <AnimeTitleInfo />

      <section className="relative mx-1 flex w-3/5 flex-col rounded-md border border-border text-white">
        {/* <AnimeVideo /> */}
      </section>
    </div>
  )
}
