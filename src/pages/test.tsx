import React, { ReactElement, Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

import { jikanMangaApi } from '@/hooks/api/jikan/manga'

async function searchAnime(query: string, page = 1) {
  try {
    const response = await axios.get(
      `https://api.consumet.org/anime/9anime/${query}`,
      {
        params: { page },
      },
    )
    console.log('Результаты поиска:', response.data.results)
  } catch (error) {
    console.log('Ошибка поиска аниме:')
  }
}

searchAnime('naruto')

function Test() {
  const { data: test } = useQuery({
    queryKey: ['dsad'],
    queryFn: () => searchAnime('dandadan'),
  })
  console.log('data>>>', test)

  return (
    <Suspense fallback={<div className="text-5xl text-white">loading....</div>}>
      <div className="h-full w-full">
        <ul></ul>
        <div className="text-6xl text-amber-300">Test text</div>
      </div>
    </Suspense>
  )
}

export default Test
