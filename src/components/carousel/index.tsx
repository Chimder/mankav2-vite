import { Manga } from '@/shared/api/mangadex/generated'
import { getFirstTitle } from '@/shared/utils/get-first-title'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { PATH } from '@/app/routers/path-constants'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  manga: Manga[]
}

const Carousel = ({ manga }: Props) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 100,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  }

  return (
    <Slider {...settings} className="mx-10">
      {manga.slice(0, 9).map(mangaItem => (
        <Link
          key={mangaItem.id}
          to={`${PATH.MANGA.getTitlePath(mangaItem.id)}?name=${getFirstTitle(mangaItem.attributes?.title)}`}
        >
          <div className="px-2">
            <img
              src={`${import.meta.env.VITE_IMG_PROXY}/img/mangadex.org/covers/${mangaItem.id}/${
                mangaItem.relationships?.find(obj => obj.type === 'cover_art')
                  ?.attributes?.fileName
              }.512.jpg`}
              alt={getFirstTitle(mangaItem.attributes?.title)}
              className="h-64 w-full rounded-lg object-cover"
            />
            <div className="mt-2 text-center text-white">
              {getFirstTitle(mangaItem.attributes?.title)}
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  )
}

export default Carousel
