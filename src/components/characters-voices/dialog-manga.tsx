import { mangaApi } from '@/hooks/api/mangadex/manga'
import { PATH } from '@/shared/constants/path-constants'

import { getMangaImg, getMangaTitle } from '../Manga/title-info/info'
import { Dialog, DialogContent } from '../ui/dialog'
import { Link, useNavigate } from 'react-router-dom'
import { getFirstTitle } from '@/shared/utils/get-first-title'

type Props = {
  name: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleClose: () => void
}
export default function DialogManga({
  isOpen,
  setIsOpen,
  handleClose,
  name,
}: Props) {
  const navigate = useNavigate()
  const { data } = mangaApi.useMangaSeachInput(name)

  // const handleAnimeClick = (mangaId?: string) => {
  //   handleClose()
  //   navigate(`${PATH.MANGA.getTitlePath(mangaId)}`)
  // }
  if (!data) return null
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="min-h-[420px] w-full max-w-[900px]">
        {/* <DialogTitle></DialogTitle> */}
        <h1 className="center flex text-xl">Available Manga</h1>
        <div className="flex justify-evenly">
          {data.data?.map(manga => (
            <Link
              className="h-40 w-32"
              key={`${manga.id}${manga.attributes?.title}`}
               to={`${PATH.MANGA.getTitlePath(manga?.id)}?name=${getFirstTitle(manga.attributes?.title)}`}
            >
              <div className="mb-2 h-40 w-32 overflow-hidden rounded-lg">
                <img className="" src={getMangaImg(manga.id, manga)} alt="" />
              </div>
              <h1>{getMangaTitle(manga)}</h1>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
