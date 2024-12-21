import { useParams } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'

import EpisodesList from './episodes-list'

type Props = {}

function AnimeVideo({}: Props) {
  const { id } = useParams()
  const { data: videoList } = aniwatchApi.useAnimeEpisodesById({ animeId: id })

  // const {data} = aniwatchApi.useAnimeEpisodeSources({animeEpisodeId,catygory,server})
  // const {data} = aniwatchApi.useAnimeEpisodesServers({episodeId})
  return (
    <div className="h-full overflow-hidden pb-6">
      <EpisodesList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
      />
    </div>
  )
}

export default AnimeVideo
