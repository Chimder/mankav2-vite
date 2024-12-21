import { CharacterFull } from '@/shared/api/jikan/generated'
import { usePersoneStore } from '@/store/characters-people'
import { Link } from 'react-router-dom'

import { PATH } from '@/app/routers/path-constants'

import { getCharacterImg } from '../Manga/title-info/characters'

type Props = {
  character?: CharacterFull
}
function Characters({ character }: Props) {
  const resetPersone = usePersoneStore().resetPersone
  const setPersone = usePersoneStore().setPersone

  function handleSetPersone() {
    setPersone(getPeople()?.mal_id as number, 'voices')
  }

  function getPeople() {
    return (
      character?.voices &&
      character.voices?.find(per => per.language === 'Japanese')?.person
    )
  }
  if (!character) return null
  return (
    <section className="filterBar h-full w-full overflow-y-scroll">
      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
        <img
          className="mx-auto h-72 w-56 object-cover md:mx-0"
          src={getCharacterImg(character.images)}
        />
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="font-bold">Name:</dt>
          <dd>
            {character.name} {`(${character.name_kanji})`}
          </dd>

          {character.about && (
            <>
              <dt className="font-bold">About:</dt>
              <dd>{character.about}</dd>
            </>
          )}

          {character.nicknames && character.nicknames.length > 0 && (
            <>
              <dt className="font-bold">Nicknames:</dt>
              <dd>{character.nicknames.join(', ')}</dd>
            </>
          )}
        </dl>
      </div>

      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold">Anime Roles</h1>
        <div className="space-y-4">
          {character.anime?.map(manga => (
            <div
              key={manga.anime?.title}
              className="group flex w-full flex-col items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-accent/10 md:flex-row"
            >
              <label
                className="mb-2 flex cursor-pointer items-center space-x-4 md:mb-0"
                // onClick={() => handleReset()}
              >
                <img
                  className="h-24 w-20 rounded object-cover"
                  src={getCharacterImg(manga.anime?.images)}
                  alt={manga.role}
                />
                <div>
                  <div className="font-medium transition-colors group-hover:text-primary">
                    {manga.anime?.title}
                  </div>
                  <div className="text-muted-foreground">{manga.role}</div>
                </div>
              </label>
              <div
                onClick={() => handleSetPersone()}
                className="flex items-center"
              >
                <div className="center mr-4 cursor-pointer">
                  {getPeople()?.name}
                </div>
                {getPeople()?.images?.jpg?.image_url && (
                  <img
                    className="h-24 w-20 cursor-pointer rounded object-cover"
                    src={getPeople()?.images?.jpg?.image_url!}
                    alt="Voice Actor"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full">
        <h1 className="mb-4 text-xl font-semibold">Manga Roles</h1>
        <div className="space-y-4">
          {character.manga?.map(manga => (
            <div
              key={`${manga.manga?.title}mangaa`}
              className="group flex w-full flex-col items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-accent/10 md:flex-row"
            >
              <Link
                className="mb-2 flex cursor-pointer items-center space-x-4 md:mb-0"
                to={'/'}
                // to={`${PATH.MANGA.getTitlePath(manga.manga.)}/title/${manga?.id}?name=${getFirstTitle(manga.attributes?.title)}`}
                // onClick={() => handleReset()}
              >
                <img
                  className="h-24 w-20 cursor-pointer rounded object-cover"
                  src={getCharacterImg(manga.manga?.images)}
                  alt={manga.manga?.title}
                />
                <div>
                  <div className="cursor-pointer font-medium transition-colors group-hover:text-primary">
                    {manga.manga?.title}
                  </div>
                  <div className="text-muted-foreground">{manga.role}</div>
                </div>
              </Link>
              <div className="flex items-center">
                <div className="center mr-4 cursor-pointer">
                  {getPeople()?.name}
                </div>
                {getPeople()?.images?.jpg?.image_url && (
                  <img
                    className="h-24 w-20 cursor-pointer rounded object-cover"
                    src={getPeople()?.images?.jpg?.image_url!}
                    alt="Voice Actor"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Characters
