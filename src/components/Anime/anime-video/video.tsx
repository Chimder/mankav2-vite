import { useRef } from 'react'
import { useParams } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'

import EpisodesList from './video-list'

type Props = {}

function AnimeVideo() {
  const { id } = useParams()
  const { data: videoList } = aniwatchApi.useAnimeEpisodesById({ animeId: id })
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="chapters-scrollbar h-full pb-6" ref={containerRef}>
      <EpisodesList
        key={`${videoList?.data?.totalEpisodes}${id}`}
        video={videoList?.data}
        containerRef={containerRef}
      />
    </div>
  )
}

export default AnimeVideo
