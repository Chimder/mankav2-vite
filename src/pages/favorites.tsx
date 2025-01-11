import { useState } from 'react'
import { getFirstTitle } from '@/shared/utils/get-first-title'
import { Link } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { mangaApi } from '@/hooks/api/mangadex/manga'
import { useFavoriteAnime } from '@/hooks/favorite-toggle/use-favorite-anime'
import { useFavoriteManga } from '@/hooks/favorite-toggle/use-favorite-manga'
import { PATH } from '@/app/routers/path-constants'

export const Favorites = () => {
  const { favorites } = useFavoriteManga()
  const [type, setType] = useState<'anime' | 'manga'>('anime')
  const { favorites: animeFavorites } = useFavoriteAnime()
  // const { data } = aniwatchApi.useAnimesInfoByIds({ids:animeFavorites})
  // console.log('FAVVV', data)

  const { data: fav } = mangaApi.useMangaSearchFav({ ids: favorites })

  return (
    <div className="center mx-auto mt-10 w-full max-w-[1400px] flex-col">
      <div className="center mb-6 gap-x-10">
        <button className="w-full rounded-lg bg-orange-600 px-40 py-4 hover:bg-orange-500">
          Manga
        </button>
        <button className="w-full rounded-lg bg-teal-600 px-40 py-4 hover:bg-teal-500">
          Anime
        </button>
      </div>
      <ul className="boxes">
        {fav?.data?.length && type === 'manga' ? (
          fav.data.map(manga => (
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
          <div className="center h-[calc(100vh-64px)]">
            You dont have Favorite manga
          </div>
        )}
      </ul>
      {type === 'anime' && (
        <div className="text-white">
          {animeFavorites.map(anime => (
            <div key={'dsadad'}>{anime}</div>
          ))}
        </div>
      )}
    </div>
  )
}
