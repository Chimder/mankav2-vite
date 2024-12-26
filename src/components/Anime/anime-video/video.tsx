import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'

import VideoList from './video-list'

type Props = {}

function AnimeVideo() {
  const { id } = useParams()
  const { data: videoList } = useSuspenseQuery(
    aniwatchApi.useAnimeEpisodesById({ animeId: id }),
  )

  return (
    <div className="chapters-scrollbar h-full overflow-y-scroll pb-6">
      <VideoList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
      />
    </div>
  )
}

export default AnimeVideo
