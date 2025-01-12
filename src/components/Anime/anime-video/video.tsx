import { aniwatchApi } from '@/hooks/api/aniwatch/anime'

import VideoList from './video-list'
import { ScrollRestoration, useParams } from 'react-router-dom'

type Props = {}

function AnimeVideo() {
  const { id } = useParams()
  const { data: videoList } = aniwatchApi.useAnimeEpisodesById({ animeId: id })

  return (
    <div className="chapters-scrollbar h-full overflow-y-scroll pb-6 bg-primary">
      <ScrollRestoration />
      <VideoList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
      />
    </div>
  )
}

export default AnimeVideo
