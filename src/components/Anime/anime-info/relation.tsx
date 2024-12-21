import { Link } from 'react-router-dom'

import { RelatedAnime } from '@/hooks/api/aniwatch/types'
import { PATH } from '@/app/routers/path-constants'

type Props = {
  animes: RelatedAnime[]
}

function AnimeRelation({ animes }: Props) {
  if (!animes || !animes.length) return null
  return (
    <div className="w-full">
      <div className="flex- flex-col">
        <h1 className="center mt-4">Relation</h1>
        <div className="flex flex-row flex-wrap justify-center gap-3">
          {animes.map(anime => (
            <Link
              to={PATH.ANIME.getTitlePath(anime.id)}
              className="flex w-32 flex-col items-center"
            >
              <div className="mb-2 h-40 w-32 overflow-hidden rounded-lg">
                <div className="text-white" key={anime.name}></div>
                <img src={anime.poster} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimeRelation
