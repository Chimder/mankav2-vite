import AnimeTitleInfo from '@/components/Anime/anime-info/info'
import AnimeVideo from '@/components/Anime/anime-video/video'
import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { QueryClient } from '@tanstack/react-query'
import { LoaderFunctionArgs } from 'react-router-dom'

type Props = {}

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) {
      console.log(params.id)
      throw new Error('No contact ID provided')
    }
    const id = params.id
    queryClient.ensureQueryData(aniwatchApi.useAnimeEpisodesById({animeId:id}))
    queryClient.ensureQueryData(aniwatchApi.useAnimeInfoById({id}))
    return id
  }
export const AnimeTitle = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full">
      <AnimeTitleInfo />
      <section className="relative flex w-3/5 flex-col border border-green-400 text-white">
        <AnimeVideo />
      </section>
    </div>
  )
}
