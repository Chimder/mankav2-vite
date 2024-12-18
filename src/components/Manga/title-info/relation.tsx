import { Manga } from '@/shared/api/mangadex/generated'
import { Link, useParams } from 'react-router-dom'

import { mangaApi } from '@/hooks/api/mangadex/manga'

import { getFirstTitle } from '../cards/cards-list'

const Relation = () => {
  const { id: mangaId } = useParams()
  const { data: manga, isFetching, isLoading } = mangaApi.useMangaByID(mangaId)

  const mangasIds = manga?.data?.relationships
    ?.map(id => id.id)
    .filter((id): id is string => id !== undefined)

  const { data: relations, isFetching: isRelationsFetching } = mangaApi.useMangaSearchMany({
    ids: mangasIds,
  })

  // function backgroundImageUrl(manga: Manga) {
  //   return `/api/proxy?url=https://mangadex.org/covers/${manga.id}/${manga?.relationships?.find(obj => obj.type === 'cover_art')?.attributes?.fileName}`
  // }

  if (!relations?.data?.length || isFetching || isRelationsFetching || isLoading) return null
  return (
    <div className="border-1 border-yellow-800 m-1 flex flex-col items-center">
      <h1>Relation Manga</h1>
      <ul className="flex flex-row flex-wrap justify-center gap-3">
        {relations?.data?.map(manga => (
          <Link
            className="flex flex-col items-center w-32"
            to={`/title/${manga?.id}?name=${getFirstTitle(manga.attributes?.title)}`}
            key={manga.id}
          >
            <div className="w-32 h-40 mb-2 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src={`${import.meta.env.VITE_IMG_PROXY!}/img/mangadex.org/covers/${manga.id}/${manga?.relationships?.find(obj => obj.type === 'cover_art')?.attributes?.fileName}`}
                loading="lazy"
                alt={getFirstTitle(manga.attributes?.title)}
              />
            </div>
            <div className="text-center text-sm line-clamp-2">
              {getFirstTitle(manga.attributes?.title)}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Relation
