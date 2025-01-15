import { EmblaOptionsType } from 'embla-carousel'

import { mangaApi } from '@/hooks/api/mangadex/manga'
import Carousel from '@/components/swiper/Carousel'
import EmblaCarousel from '@/components/swiper/EmblaCarousel'

export const Home = () => {
  const { data } = mangaApi.useMangaSearchPopular()
  const OPTIONS: EmblaOptionsType = { align: 'start' }

  return (
    <div>
      <h1>Home</h1>
      {/* <EmblaCarousel slides={data?.data} options={OPTIONS} /> */}
      {data?.data && <Carousel data={data.data} key={`fsdfsfsdfds`} />}
    </div>
  )
}
