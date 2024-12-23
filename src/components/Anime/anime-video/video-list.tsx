import { useEffect, useRef, useState } from 'react'
import { cn } from '@/shared/lib/tailwind'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { AnimeVideoData } from '@/hooks/api/aniwatch/types'
import { Input } from '@/components/ui/input'

import VideoDialog from './video-dialog'

type Props = {
  video?: AnimeVideoData
  containerRef: React.RefObject<HTMLDivElement | null>
}

function EpisodesList({ video, containerRef }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [episodeId, setEpisodeId] = useState('')
  const [searchPageQuery, setSearchPageQuery] = useState('')
  const [highlightedChapter, setHighlightedChapter] = useState<number | null>()

  // const containerRef = useRef<HTMLDivElement>(null)
  const refEpisodes = useRef<Record<number, HTMLDivElement | null>>({})

  const { data: serverData } = aniwatchApi.useAnimeEpisodesServers({
    episodeId,
  })
  const server = serverData?.data

  const { data: sourceData } = aniwatchApi.useAnimeEpisodeSources({
    animeEpisodeId: server?.episodeId,
    server: server?.sub[0]?.serverName,
    catygory: 'sub',
  })
  function handleVideoDialog(episodeId: string) {
    setIsOpen(true)
    setEpisodeId(episodeId)
  }

  useEffect(() => {
    function scrollTo(episode: number) {
      const ref = refEpisodes.current[episode]
      if (!ref || !containerRef.current) return

      const elementPosition = ref.getBoundingClientRect().top
      const containerPosition = containerRef.current.getBoundingClientRect().top
      const relativePosition = elementPosition - containerPosition

      containerRef.current.scrollTo({
        top:
          containerRef.current.scrollTop +
          relativePosition -
          containerRef.current.clientHeight / 2,
        behavior: 'smooth',
      })

      setHighlightedChapter(episode)
    }

    if (searchPageQuery && searchPageQuery !== '') {
      scrollTo(Number(searchPageQuery))
    } else if (video?.episodes[0]?.number) {
      scrollTo(video.episodes[0].number)
    }
  }, [searchPageQuery, video?.episodes])

  if (!video || !video.episodes.length) return null

  return (
    <div className="ref={containerRef} m-4 flex h-full flex-col">
      <div className="m-4 flex h-full flex-col">
        <Input
          value={searchPageQuery}
          onChange={e => setSearchPageQuery(e.target.value)}
          className="center w-full bg-black text-center text-lg text-white"
        />
        {video.episodes.map(video => (
          <div
            className={cn(
              'mx-0 my-1.5 flex min-h-[52px] flex-wrap border border-gray-900 p-1 text-lg hover:border-teal-300',
              highlightedChapter === video.number && 'border-green-400',
            )}
            key={video.title}
            onClick={() => handleVideoDialog(video.episodeId)}
            ref={el => {
              refEpisodes.current[video.number] = el
            }}
          >
            <div className="flex items-center">
              <div>{` ${video.number}. ${video.title}`}</div>
            </div>
          </div>
        ))}
      </div>

      {sourceData?.data && (
        <div className="w-full">
          <VideoDialog
            source={sourceData.data}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      )}
    </div>
  )
}

export default EpisodesList
