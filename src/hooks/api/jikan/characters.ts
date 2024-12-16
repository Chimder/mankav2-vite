import {
  getCharacterFullById,
  getPersonFullById,
} from '@/shared/api/jikan/generated'
import { useQuery } from '@tanstack/react-query'

export const jikanCharacterPeopleApi = {
  baseKey: 'jikanManga',
  useCharacterById: ({ id }: { id?: number }) => {
    return useQuery({
      queryKey: [jikanCharacterPeopleApi.baseKey, 'characters', id],
      queryFn: ({ signal }) => getCharacterFullById(id!, { signal }),
      refetchOnMount: false,
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
      staleTime: 100000,
      retry: 0,
    })
  },
  usePeopleById: ({ id }: { id: number }) => {
    return useQuery({
      queryKey: [jikanCharacterPeopleApi.baseKey, 'people', id],
      queryFn: ({ signal }) => getPersonFullById(id, { signal }),
      refetchOnMount: false,
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
      staleTime: 100000,
      retry: 0,
    })
  },
}
