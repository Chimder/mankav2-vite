import Cards from '@/components/Manga/cards/cards'
import { FilterMangaBar } from '@/components/Manga/filter-manga-bar/filter-manga-bar'

export const MangaSearch = () => {
  return (
    <div className="flex  flex-col items-center overflow-y-hidden bg-black lg:overflow-y-scroll w-screen">
      <div className="flex h-[calc(100vh-64px)] w-full lg:h-full lg:flex-col">
        <section className="filterBar flex-[2_1_0%] h-full overflow-y-scroll lg:order-1 lg:flex-[1_1_100%]">
          <Cards />
        </section>
        <section className="filterBar w-[300px] overflow-y-scroll lg:w-full">
          <FilterMangaBar />
        </section>
      </div>
    </div>
  )
}
