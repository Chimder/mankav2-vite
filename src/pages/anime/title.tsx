import AnimeTitleInfo from '@/components/Anime/anime-info/info'
import AnimeVideo from '@/components/Anime/anime-video/video'

type Props = {}

function AnimeTitle({}: Props) {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full">
      <AnimeTitleInfo />
      <section className="relative flex w-3/5 flex-col border border-green-400 text-white">
        <AnimeVideo />
      </section>
      <div></div>
    </div>
  )
}

export default AnimeTitle
