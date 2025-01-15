import { useEffect, useState } from 'react'
import { Manga } from '@/shared/api/mangadex/generated'

type UseCarouselProps = {
  data: Manga[]
  interval?: number
}

export const useCarousel = ({ data, interval = 3000 }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const next = () => {
    setCurrentIndex(current => (current + 1) % data?.length)
  }

  const prev = () => {
    setCurrentIndex(current => (current - 1 + data.length) % data?.length)
  }

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      next()
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, interval])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === ' ') setIsPlaying(p => !p)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return {
    currentIndex,
    next,
    prev,
    isPlaying,
    setIsPlaying,
  }
}
