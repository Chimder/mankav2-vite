import { ReactNode } from 'react'
import {
  CharacterMeta,
  GetCharacterFullById200,
} from '@/shared/api/jikan/generated'
import { usePersoneStore } from '@/store/characters-people'

import { jikanCharacterPeopleApi } from '@/hooks/api/jikan/characters'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { Button } from '../ui/button'

type Props = {
  children?: ReactNode
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}

function DialogCharactersPeople({ isOpen, setIsOpen }: Props) {
  const personeId = usePersoneStore().id
  const personeType = usePersoneStore().type

  const { data } = jikanCharacterPeopleApi.useCharacterById({ id: personeId })

  const handleClose = () => {
    setIsOpen(false)
  }
  console.log('DADTTA', data?.data)
  function getPeople() {
    return (
      data?.data &&
      data?.data?.voices?.find(per => per.language === 'Japanese')?.person
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-[1200px] w-[80vw] h-[90vh]  flex flex-col items-center justify-center p-2"
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
      >
        <DialogTitle></DialogTitle>
        <div>Character: {data?.data?.name}</div>
        <div>
          <img
            src={data?.data?.images?.jpg?.image_url!}
            alt={data?.data?.name || 'Character image'}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>Voices</div>
        <div>
          <img src={getPeople()?.images?.jpg?.image_url!} alt="" />
        </div>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button>Footer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCharactersPeople
