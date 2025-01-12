import { useState } from 'react'
import { getFirstTitle } from '@/shared/utils/get-first-title'
import { Link } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { mangaApi } from '@/hooks/api/mangadex/manga'
import { useFavoriteAnime } from '@/hooks/favorite-toggle/use-favorite-anime'
import { useFavoriteManga } from '@/hooks/favorite-toggle/use-favorite-manga'
import { Skeleton } from '@/components/ui/skeleton'
import { PATH } from '@/app/routers/path-constants'

export const Favorites = () => {
  const [type, setType] = useState<'anime' | 'manga'>('manga')
  const { favorites: favoritesManga } = useFavoriteManga()
  const { favorites: favoritesAnime } = useFavoriteAnime()
  // console.log('FAVVV', data)

  const { data: animesData, isFetching: isFetchingAnime } =
    aniwatchApi.useAnimesInfoByIds({
      ids: favoritesAnime,
      type,
    })
  const { data: mangasData, isFetching: isFetchingManga } =
    mangaApi.useMangaSearchFav({
      ids: favoritesManga,
    })

  return (
    <div className="center mx-auto mt-10 w-full max-w-[1400px] flex-col">
      <div className="center mb-6 gap-x-10">
        <button
          onClick={() => setType('manga')}
          className="w-full rounded-lg bg-orange-600 px-40 py-4 hover:bg-orange-500"
        >
          Manga
        </button>
        <button
          onClick={() => setType('anime')}
          className="w-full rounded-lg bg-teal-600 px-40 py-4 hover:bg-teal-500"
        >
          Anime
        </button>
      </div>

      {type === 'manga' && (
        <ul className="boxes">
          {isFetchingManga ? (
            Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} className="skeletonBoxes" />
            ))
          ) : mangasData?.data?.length ? (
            mangasData.data.map(manga => (
              <Link
                className="flex w-[260px] flex-col overflow-hidden rounded-xl pb-1 text-white hover:outline hover:outline-1 hover:outline-red-400"
                to={`${PATH.MANGA.getTitlePath(manga.id)}?name=${getFirstTitle(manga.attributes?.title)}`}
                key={manga.id}
              >
                <img
                  className="h-[280px] w-[260px] rounded-xl object-cover"
                  src={`${import.meta.env.VITE_IMG_PROXY}/img/mangadex.org/covers/${manga.id}/${manga.relationships?.find(obj => obj.type === 'cover_art')?.attributes?.fileName}.256.jpg`}
                  width={260}
                  height={280}
                  loading="lazy"
                  alt=""
                />
                <div className="ml-1 mt-1 line-clamp-2 min-h-[40px] w-full overflow-hidden text-ellipsis leading-[20px]">
                  {getFirstTitle(manga.attributes?.title)}
                </div>
              </Link>
            ))
          ) : (
            <div className="center h-[calc(100vh-64px)] text-white">
              You dont have favorite manga
            </div>
          )}
        </ul>
      )}

      {type === 'anime' && (
        <ul className="boxes">
          {isFetchingAnime ? (
            Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} className="skeletonBoxes" />
            ))
          ) : animesData?.length ? (
            animesData.map(anime => (
              <Link
                to={PATH.ANIME.getTitlePath(anime.anime.info.id)}
                key={anime.anime.info.id}
                className="flex w-[260px] flex-col overflow-hidden rounded-xl pb-1 text-white"
              >
                <img
                  className="h-[280px] w-[260px] rounded-xl object-cover"
                  src={anime.anime.info.poster}
                  alt={anime.anime.info.name}
                />
                <div className="ml-1 mt-1 line-clamp-2 min-h-[40px] w-full overflow-hidden text-ellipsis leading-[20px]">
                  {anime.anime.info.name}
                </div>
              </Link>
            ))
          ) : (
            <div className="center h-[calc(100vh-64px)] text-white">
              You dont have favorite anime
            </div>
          )}
        </ul>
      )}
    </div>
  )
}
