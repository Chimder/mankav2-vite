import { usePersoneStore } from '@/store/characters-people'
import { useNavigate } from 'react-router-dom'

import { aniwatchApi } from '@/hooks/api/aniwatch/anime'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { PATH } from '@/app/routers/path-constants'

type Props = {
  name: string
  isOpen: boolean
  handleClose: () => void
}
export function DialogAnime({ isOpen, handleClose, name }: Props) {
  const navigate = useNavigate()
  const { data } = aniwatchApi.useAnimeByName({ name })
  const resetPersone = usePersoneStore().resetPersone

  const handleCloseAndReset = () => {
    resetPersone()
    handleClose()
  }
  const handleAnimeClick = (animeId: string) => {
    handleClose()
    navigate(`${PATH.ANIME.getTitlePath(animeId)}`)
  }
  if (!data) return null
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseAndReset}>
      <DialogContent className="min-h-[310px] w-full max-w-[900px]">
        <DialogTitle></DialogTitle>
        <div className="flex justify-evenly">
          {data?.map(anime => (
            <div
              key={`${anime.id}${anime.name}new`}
              onClick={() => handleAnimeClick(anime.id)}
              className="h-40 w-32"
            >
              <div className="mb-2 h-40 w-32 overflow-hidden rounded-lg">
                <img src={anime.poster} alt="" />
              </div>
              <h1>{anime.name}</h1>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
