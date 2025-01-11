// import InputeSearch from './inpute-search'
import { lazy } from 'react'
import Icons from '@/assets/svg/icons'
import { Link } from 'react-router-dom'

import { PATH } from '@/app/routers/path-constants'

import { Button } from '../ui/button'

const InputeSearch = lazy(() => import('./inpute-search'))

export default function Header() {
  return (
    <div className="sticky top-0 z-50 h-[64px] w-full bg-black shadow-header">
      <div className="center relative justify-between border-cyan-200 p-2">
        <div className="center flex-[1_1_33%]">
          <Link
            className="font-logo mr-10 list-none text-6xl text-cyan-300"
            to={PATH.MANGA.MAIN}
          >
            <h1 className="text-4xl decoration-cyan-200 hover:underline">
              Manka
            </h1>
          </Link>

          <Link
            className="center ml-10 whitespace-nowrap text-white"
            to={PATH.MANGA.SEARCH}
          >
            <Button
              className="cursor-default text-green-400 decoration-green-400 hover:underline"
              variant={'link'}
            >
              Advanced Search
            </Button>
          </Link>
        </div>
        <InputeSearch />
        <Link
          to={PATH.FAVORITES}
          className="mr-8 flex flex-[1_2_28%] justify-end text-red-500"
        >
          <div className="h-6 w-6 transition-transform duration-300 hover:scale-125 hover:text-red-600">
            <Icons.Heart />
          </div>
        </Link>
      </div>
    </div>
  )
}
