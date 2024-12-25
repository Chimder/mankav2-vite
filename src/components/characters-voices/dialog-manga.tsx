import { useNavigate } from 'react-router-dom'

import { mangaApi } from '@/hooks/api/mangadex/manga'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { PATH } from '@/app/routers/path-constants'

import { getMangaImg, getMangaTitle } from '../Manga/title-info/info'

type Props = {
  name: string
  isOpen: boolean
  handleClose: () => void
}
export function DialogManga({ isOpen, handleClose, name }: Props) {
  const navigate = useNavigate()
  const { data } = mangaApi.useMangaSeachInput(name)

  const handleCloseAndReset = () => {
    handleClose()
  }
  const handleAnimeClick = (mangaId?: string) => {
    handleClose()
    navigate(`${PATH.MANGA.getTitlePath(mangaId)}`)
  }
  if (!data) return null
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseAndReset}>
      <DialogContent className="min-h-[310px] w-full max-w-[900px]">
        <DialogTitle></DialogTitle>
        <h1 className="center flex text-xl">Available Manga</h1>
        <div className="flex justify-evenly">
          {data.data?.map(manga => (
            <div
              className="w-full"
              key={`${manga.id}${manga.attributes?.title}`}
              onClick={() => handleAnimeClick(manga?.id)}
            >
              <div className="mb-2 h-40 w-32 overflow-hidden rounded-lg">
                <img className="" src={getMangaImg(manga.id, manga)} alt="" />
              </div>
              <h1>{getMangaTitle(manga)}</h1>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
