import { useParams } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'

import VideoList from './video-list'

type Props = {}

function AnimeVideo() {
  const { id } = useParams()
  const { data: videoList } = aniwatchApi.useAnimeEpisodesById({ animeId: id })

  return (
    <div className="chapters-scrollbar overflow-y-scroll h-full pb-6">
      <VideoList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
      />
    </div>
  )
}

export default AnimeVideo
