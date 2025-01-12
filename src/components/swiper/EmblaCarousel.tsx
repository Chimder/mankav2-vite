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
          {slides.map(index => (
            <div className="embla__slide" key={index.id}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              lol
            </div>
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
