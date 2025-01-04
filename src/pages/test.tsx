import { Suspense } from 'react'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { Button } from '@/components/ui/button'

// import { jikanMangaApi } from '@/hooks/api/jikan/manga'

function Test() {
  // const { data } = aniwatchApi.useAnimeByName({
  //   name: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season',
  // })
  // console.log('data>>>', data)

  return (
    <Suspense fallback={<div className="text-5xl text-white">loading....</div>}>
      <div className="h-full w-full bg-primary">
        <ul className="text-secondary">test ONe</ul>
        <div className="text-6xl text-amber-500">Test text</div>
        {/* <Button variant={'outline'}> butt</Button> */}
      </div>
    </Suspense>
  )
}

export default Test
