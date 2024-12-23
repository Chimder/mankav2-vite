import { SourcesData } from '@/hooks/api/aniwatch/types'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

import VideoPlayer from './video-player'

type Props = {
  source?: SourcesData
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}
function VideoDialog({ source, isOpen, setIsOpen }: Props) {
  function handleClose() {
    setIsOpen(false)
  }

  if (!source) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="flex h-[90vh] w-[80vw] max-w-[1200px] flex-col items-center justify-center p-2"
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
      >
        <div className="w-full">
          <VideoPlayer {...source} />
        </div>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  )
}

export default VideoDialog
