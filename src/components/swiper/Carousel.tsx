import { ComponentPropsWithRef, FC } from 'react'
import { Manga } from '@/shared/api/mangadex/generated'
import { getFirstTitle } from '@/shared/utils/get-first-title'
import { Link } from 'react-router-dom'

import { PATH } from '@/app/routers/path-constants'

import { useCarousel } from './use-carousel'

interface CarouselProps {
  data: Manga[]
}

const Carousel: FC<CarouselProps> = ({ data }) => {
  const { currentIndex, next, prev, isPlaying, setIsPlaying } = useCarousel({
    data: data as Manga[],
    interval: 3000,
  })

  if (!data) return undefined

  return (
    <div className="relative h-96 w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${data.length * 100}%`,
        }}
      >
        {data.map(manga => (
          <Link
            key={manga.id}
            className="relative h-full w-full flex-shrink-0"
            to={`${PATH.MANGA.getTitlePath(manga.id)}?name=${getFirstTitle(
              manga.attributes?.title,
            )}`}
          >
            <img
              className="h-[280px] w-[260px] rounded-xl object-cover"
              src={`${
                import.meta.env.VITE_IMG_PROXY
              }/img/mangadex.org/covers/${manga.id}/${
                manga.relationships?.find(obj => obj.type === 'cover_art')
                  ?.attributes?.fileName
              }.256.jpg`}
              width={260}
              height={280}
              loading="lazy"
              alt={getFirstTitle(manga.attributes?.title) || 'Manga cover'}
            />
            <div className="ml-1 mt-1 line-clamp-2 min-h-[40px] w-full overflow-hidden text-ellipsis leading-[20px]">
              {getFirstTitle(manga.attributes?.title)}
            </div>
          </Link>
        ))}
      </div>

      <PrevButton onClick={prev} />
      <NextButton onClick={next} />

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-white/30 px-4 py-2 text-white backdrop-blur-sm"
      >
        {isPlaying ? 'pause' : 'play'}
      </button>
    </div>
  )
}

export default Carousel

type PropType = ComponentPropsWithRef<'button'>
export const PrevButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props

  return (
    <button
      // variant={'ghost'}
      className="center absolute left-0 m-2 h-12 w-12 border transition-transform duration-300 hover:scale-125 hover:border-amber-200"
      {...restProps}
    >
      <svg className="h-10 w-10 rotate-180 fill-white" viewBox="0 0 532 532">
        <path
          // fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
        {children}
      </svg>
    </button>
  )
}

export const NextButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props
  return (
    <button
      // variant={'ghost'}
      className="center absolute right-0 m-2 h-12 w-12 border transition-transform duration-300 hover:scale-125 hover:border-amber-200"
      {...restProps}
    >
      <svg className="h-10 w-10 fill-white" viewBox="0 0 532 532">
        <path
          // fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
        {children}
      </svg>
    </button>
  )
}
