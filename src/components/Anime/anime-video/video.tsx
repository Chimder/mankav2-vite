import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { useParams } from 'react-router-dom'
import EpisodesList from './episodes-list'

type Props = {}

function AnimeVideo() {
  const { id } = useParams()
  const { data: videoList } = aniwatchApi.useAnimeEpisodesById({ animeId: id })

  // const {data} = aniwatchApi.useAnimeEpisodeSources({animeEpisodeId,catygory,server})
  // const {data} = aniwatchApi.useAnimeEpisodesServers({episodeId})
  return (
    <div className="h-full overflow-hidden overflow-y-scroll pb-6">
      <EpisodesList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
      />
    </div>
  )
}

export default AnimeVideo
