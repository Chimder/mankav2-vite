import { cn } from '@/shared/lib/tailwind'

import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom'

export const PaginationButtons = ({
  currentPage = 1,
  totalPages = 0,
}: {
  currentPage?: number
  totalPages?: number
}) => {
  const navigate = useNavigate()

  if (!currentPage || !totalPages || totalPages < 1) return null

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      navigate(`/search?page=${page}`)
    }
  }

  const getPageNumbers = () => {
    const maxButtons = 7
    const pageNumbers: number[] = []

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)

      const start = Math.max(2, currentPage - 2)
      const end = Math.min(totalPages - 1, currentPage + 2)

      if (start > 2) {
        pageNumbers.push(-1)
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      if (end < totalPages - 1) {
        pageNumbers.push(-1)
      }

      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pages = getPageNumbers()

  return (
    <div className="center mt-4">
      <div className="border-[1px] border-yellow-800 p-2">
        {pages &&
          pages.map((page, index) =>
            page === -1 ? (
              <span key={`ellipsis-${index}`} className="mx-2 text-gray-500">
                ...
              </span>
            ) : (
              <Button
                className={cn(
                  'mx-1 text-white hover:bg-orange-700',
                  page === currentPage && 'bg-orange-500',
                )}
                key={page}
                onClick={() => handlePageChange(page)}
                // disabled={page === currentPage}
              >
                {page}
              </Button>
            ),
          )}
      </div>
    </div>
  )
}
