import React from 'react'
import { Manga } from '@/shared/api/mangadex/generated'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { PATH } from '@/app/routers/path-constants'
import { getFirstTitle } from '@/shared/utils/get-first-title'
import { Link } from 'react-router-dom'

type PropType = {
  slides?: Manga[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)
  if (!slides) return undefined

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(manga => (
             <Link
                  className="flex w-[260px] flex-col overflow-hidden rounded-xl pb-1 text-white hover:outline hover:outline-1 hover:outline-red-400"
                  to={`${PATH.MANGA.getTitlePath(manga?.id)}?name=${getFirstTitle(manga.attributes?.title)}`}
                  key={manga?.id}
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

            // <div className="embla__slide" key={index.id}>
            //   {/* <div className="embla__slide__number">{index + 1}</div> */}
            //   lol
            // </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
