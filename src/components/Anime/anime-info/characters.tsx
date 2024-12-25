import { useState } from 'react'
import { CharacterImages } from '@/shared/api/jikan/generated'
import { usePersoneStore } from '@/store/characters-people'

import { jikanAnimeApi } from '@/hooks/api/jikan/anime'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import DialogCharactersPeople from '@/components/characters-voices/dialog'

export function getCharacterImg(img?: CharacterImages) {
  return img?.jpg?.image_url ?? undefined
}
type Props = {
  id?: number
}
const Characters = ({ id }: Props) => {
  const {
    data: characters,
    isFetching,
    isLoading,
  } = jikanAnimeApi.useAnimeCharactersById({ id: Number(id) })

  console.log('ADADUWUUW')
  const setPersone = usePersoneStore().setPersone

  const [isOpen, setIsOpen] = useState(false)
  async function handlePerson(id: number) {
    await setPersone(id, 'character')
    setIsOpen(true)
  }
  console.log('IS', isOpen)

  const firstSixCharacters = characters?.data?.slice(0, 6) || []
  const restCharacters = characters?.data?.slice(6) || []

  // const isLoading = isLoadingManga || isLoadingCharacters
  // const isFetching = isFetchingManga || isFetchingCharacters
  if (isFetching || isLoading || !characters?.data?.length) {
    return null
  }

  return (
    <div className="center m-1 flex-col border-1 border-yellow-800">
      <h1 className="text-lg text-yellow-700">Characters</h1>
      <div className="">
        <ul className="center flex flex-wrap gap-2">
          {firstSixCharacters.map(character => (
            <div
              className="flex w-32 flex-col items-center"
              key={`${character.character?.name} six`}
              onClick={() =>
                handlePerson(character.character?.mal_id as number)
              }
            >
              <div className="mb-2 flex h-40 w-32 items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={getCharacterImg(character.character?.images)}
                  alt={character.character?.name}
                />
              </div>
              <p className="line-clamp-2 h-10 text-center text-sm">
                {character.character?.name}
              </p>
            </div>
          ))}
        </ul>
        <DialogCharactersPeople setIsOpen={setIsOpen} isOpen={isOpen} />

        {restCharacters.length > 0 && (
          <Accordion
            type="single"
            collapsible
            className="mb-1 mt-4 w-full border-0"
          >
            <AccordionItem value="all-characters border-0">
              <AccordionTrigger className="flex h-6 w-6 justify-center border-0"></AccordionTrigger>
              <AccordionContent className="border-0">
                <ul className="center flex flex-wrap gap-2">
                  {restCharacters.map(character => (
                    <div
                      className="flex w-32 flex-col items-center"
                      key={`${character.character?.name}rest`}
                      onClick={() =>
                        handlePerson(character.character?.mal_id as number)
                      }
                    >
                      <div className="mb-2 flex h-40 w-32 items-center justify-center overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={getCharacterImg(character.character?.images)}
                          alt={character.character?.name}
                        />
                      </div>
                      <p className="line-clamp-2 h-10 text-center text-sm">
                        {character.character?.name}
                      </p>
                    </div>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default Characters
