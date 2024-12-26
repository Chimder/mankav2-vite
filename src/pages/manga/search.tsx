import { Suspense } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import Cards from '@/components/Manga/cards/cards'
import { FilterMangaBar } from '@/components/Manga/filter-manga-bar/filter-manga-bar'

export const MangaSearch = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-black">
      <div className="flex h-full w-full">
        <ScrollRestoration />
        <Cards />
        <FilterMangaBar />
      </div>
    </div>
  )
}
