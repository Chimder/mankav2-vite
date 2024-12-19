import Cards from '@/components/Manga/cards/cards'
import { FilterMangaBar } from '@/components/Manga/filter-manga-bar/filter-manga-bar'
import { ScrollRestoration } from 'react-router-dom'

function SearchManga() {
  return (
    <div className="flex w-full h-full flex-col items-center bg-black ">
      <div className="flex w-full h-full">
        <ScrollRestoration />
        <Cards />
        <FilterMangaBar />
      </div>
    </div>
  )
}

export default SearchManga
