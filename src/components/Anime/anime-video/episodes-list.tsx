import { useState } from 'react'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { AnimeVideoData } from '@/hooks/api/aniwatch/types'

import VideoPlayer from './VideoPlayer'

type Props = {
  video?: AnimeVideoData
}

function EpisodesList({ video }: Props) {
  const [episodeId, setEpisodeId] = useState('')

  const { data: serverData } = aniwatchApi.useAnimeEpisodesServers({
    episodeId,
  })

  const server = serverData?.data

  const { data: sourceData } = aniwatchApi.useAnimeEpisodeSources({
    animeEpisodeId: server?.episodeId,
    server: server?.sub[0]?.serverName,
    catygory: 'sub',
  })

  if (!video || !video.episodes.length) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
        {video.episodes.map(episode => (
          <button
            key={episode.episodeId}
            className="rounded border p-2 hover:bg-gray-100"
            onClick={() => setEpisodeId(episode.episodeId)}
          >
            <div className="text-sm font-medium">
              {`${episode.number}. ${episode.title}`}
            </div>
          </button>
        ))}
      </div>

      {sourceData?.data && (
        <div className="w-full">
          <VideoPlayer {...sourceData.data} />
        </div>
      )}
    </div>
  )
}

export default EpisodesList
