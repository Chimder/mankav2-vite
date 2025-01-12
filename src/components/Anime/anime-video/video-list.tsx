// VideoList.tsx
import { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { AnimeVideoData } from '@/hooks/api/aniwatch/types'
import { cn } from '@/shared/lib/tailwind'

import VideoDialog from './video-dialog'

type Props = {
  video?: AnimeVideoData
}

function VideoList({ video }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [episodeId, setEpisodeId] = useState('')
  const [searchPageQuery, setSearchPageQuery] = useState('')
  const [highlightedChapter, setHighlightedChapter] = useState<number | null>()
  const refEpisodes = useRef<Record<number, HTMLDivElement | null>>({})

  function handleVideoDialog(episodeId: string) {
    setIsOpen(true)
    setEpisodeId(episodeId)
  }

  useEffect(() => {
    function scrollTo(episode: number) {
      const ref = refEpisodes.current[episode]
      if (!ref) return
      requestAnimationFrame(() => {
        ref.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
        setHighlightedChapter(episode)
      })
    }

    if (video?.episodes?.length) {
      if (searchPageQuery && searchPageQuery !== '') {
        scrollTo(Number(searchPageQuery))
      } else if (video.episodes[0]?.number) {
        scrollTo(video.episodes[0].number)
      }
    }
  }, [searchPageQuery, video?.episodes])

  if (!video || !video.episodes.length) return null

  return (
    <div className=" p-5 mt-10 flex h-full flex-col">
      <Input
        value={searchPageQuery}
        onChange={e => setSearchPageQuery(e.target.value)}
        className="absolute left-1/2 top-4 z-10 w-[32%] -translate-x-1/2 transform rounded-md border-2 !border-emerald-400 bg-black p-2 text-center text-lg text-white focus-visible:ring-0"
      />
      <div className=" flex h-full flex-col">
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

      <VideoDialog
        episodeId={episodeId}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  )
}

export default VideoList
