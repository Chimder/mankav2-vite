import { Manga } from '@/shared/api/mangadex/generated'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

import { mangaApi } from '@/hooks/api/mangadex/manga'

import Characters from './characters'
import Relation from './relation'

type Props = {}

export const getMangaTitle = (manga?: Manga) => {
  if (!manga?.attributes?.title) return undefined
  manga.relationships
  return (
    manga.attributes.title.en ||
    (manga.attributes.title && Object.values(manga.attributes.title)[0])
  )
}
export const getMangaImg = (id?: string, manga?: Manga) => {
  if (!id || !manga?.relationships) return undefined

  return `${import.meta.env.VITE_IMG_PROXY!}/img/mangadex.org/covers/${id}/${
    manga.relationships.find(obj => obj.type === 'cover_art')?.attributes
      ?.fileName
  }`
}
const Info = (props: Props) => {
  const { id: mangaId } = useParams()
  const { data: manga } = mangaApi.useMangaByID(mangaId)

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center border-[1px] border-green-400">
        <img
          className="relative z-10 h-[440px] w-[310px]"
          src={getMangaImg(mangaId, manga?.data)}
          alt=""
        />
        <div className="flex h-full">
          <div className="py-4">
            <div className="mx-0 my-3 text-sm">
              <span className="mb-2.5 mr-1 text-sm">Title:</span>
              <span className="text-base">{getMangaTitle(manga?.data)}</span>
            </div>
            <div className="title">
              <span className="head">Created:</span>
              <span className="text-sm">
                {dayjs(manga?.data?.attributes?.createdAt).format('YYYY')}
              </span>
            </div>
            <div className="title">
              <span className="head">Year:</span>
              <span className="text-sm">{manga?.data?.attributes?.year}</span>
            </div>
            <div className="title">
              <span className="head">Chapters:</span>
              {/* <span className="text-sm">{chapters?.data?.length}</span> */}
            </div>

            <div className="titleGenres">
              <span className="head">Status: </span>
              <div className="rounded-4xl mb-1 ml-[2px] inline-block border-1 bg-transparent px-2 py-1 text-sm">
                {manga?.data?.attributes?.status}
              </div>
            </div>
            <div className="titleGenres">
              <span className="head">Genres: </span>
              {manga?.data?.attributes?.tags?.slice(0, 5).map(tag => (
                <div
                  className="rounded-4xl mb-1 ml-[2px] inline-block border-1 bg-transparent px-2 py-1 text-sm"
                  key={tag.id}
                >
                  {tag.attributes?.name?.en}
                </div>
              ))}
            </div>
            <div className="title">
              <span className="head">Author</span>
              <span className="text-sm">
                {
                  manga?.data?.relationships?.find(obj => obj.type == 'author')
                    ?.attributes?.name as string
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      <Characters />
      <Relation />
    </section>
  )
}

export default Info
