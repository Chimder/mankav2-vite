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
    <div className="flex h-[calc(100vh-64px)] w-full bg-black">
      <AnimeTitleInfo />
      <section className="relative mx-1 flex w-3/5 flex-col rounded-md border border-border text-white">
        <AnimeVideo />
      </section>
    </div>
  )
}
