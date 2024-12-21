import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PATH } from '@/app/routers/path-constants'

type Props = {
  name: string
  // children?: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
// export function DialogAnime({ children, name }: Props) {
export function DialogAnime({ isOpen, setIsOpen, name }: Props) {
  const { data } = aniwatchApi.useAnimeByName({ name })
  if (!data) return null
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <div className="flex justify-evenly">
          {data?.map(anime => (
            <Link to={`${PATH.ANIME.getTitlePath(anime.id)}`}>
              <img src={anime.poster} alt="" />
              <h1>{anime.name}</h1>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
