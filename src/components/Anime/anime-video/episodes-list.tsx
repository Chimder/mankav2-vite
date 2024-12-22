import { useState } from 'react'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { AnimeVideoData } from '@/hooks/api/aniwatch/types'

type Props = {
  video?: AnimeVideoData
}

function EpisodesList({ video }: Props) {
  // const {data} = aniwatchApi.
  console.log('VIDEO', video)
  const id = 'dandadan-19319?ep=130044'
  const [episodeId, setEpisodeId] = useState('')
  const { data } = aniwatchApi.useAnimeEpisodesServers({
    episodeId: id,
  })
  const server = data?.data
  const { data: ana } = aniwatchApi.useAnimeEpisodeSources({
    animeEpisodeId: server?.episodeId,
    server: server?.sub[0].serverName,
    catygory: 'sub',
  })

  console.log('EPISE', data)
  if (!video || !video.episodes.length) return null
  return (
    <div className="m-4 flex h-full flex-col">
      <div className="chapters-scrollbar flex-grow overflow-y-auto">
        {video.episodes.map(video => (
          <div
            className="mx-0 my-1.5 flex min-h-[52px] flex-wrap border border-gray-900 p-1 text-lg hover:border-teal-300"
            key={video.title}
          >
            <div className="flex items-center">
              <div>{` ${video.number}. ${video.title}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EpisodesList
