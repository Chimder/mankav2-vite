import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createSelectors } from './create-Selectors'

export type Persone = {
  id?: number
  type?: 'character' | 'people'
  // chaptersLanguage?: string
}

export type PersoneAction = Persone & {
  setPersone: (id: number, type: 'character' | 'people') => void
}
export const personeStore = create<PersoneAction>()(
  immer((set, get) => ({
    id: undefined,
    type: 'character',
    setPersone: async (id, type) => {
      await set(state => {
        ;(state.id = id), (state.type = type)
      })
    },
  })),
)

export const usePersoneStore = createSelectors(personeStore)
