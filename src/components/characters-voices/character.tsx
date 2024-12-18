import { CharacterFull } from '@/shared/api/jikan/generated'
import { usePersoneStore } from '@/store/characters-people'
import { Link } from 'react-router-dom'

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
    <section className="w-full h-full overflow-y-scroll filterBar">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-6">
        <img
          className="w-56 h-72 mx-auto md:mx-0 object-cover"
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
        <h1 className="text-xl font-semibold mb-4">Anime Roles</h1>
        <div className="space-y-4">
          {character.anime?.map(manga => (
            <div
              key={manga.anime?.title}
              className="group flex flex-col items-center justify-between w-full border border-border p-4 rounded-lg hover:bg-accent/10 transition-colors md:flex-row"
            >
              <label
                className="flex items-center space-x-4 mb-2 md:mb-0 cursor-pointer"
                // onClick={() => handleReset()}
              >
                <img
                  className="w-20 h-24 object-cover rounded"
                  src={getCharacterImg(manga.anime?.images)}
                  alt={manga.role}
                />
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors ">
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
                    className="w-20 h-24 object-cover rounded cursor-pointer"
                    src={getPeople()?.images?.jpg?.image_url!}
                    alt="Voice Actor"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-6">
        <h1 className="text-xl font-semibold mb-4">Manga Roles</h1>
        <div className="space-y-4">
          {character.manga?.map(manga => (
            <div
              key={`${manga.manga?.title}mangaa`}
              className="group flex flex-col md:flex-row items-center justify-between w-full border border-border p-4 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Link
                className="flex items-center space-x-4 mb-2 md:mb-0 cursor-pointer"
                to={`/`}
                // to={`/title/${manga?.id}?name=${getFirstTitle(manga.attributes?.title)}`}
                // onClick={() => handleReset()}
              >
                <img
                  className="w-20 h-24 object-cover rounded cursor-pointer "
                  src={getCharacterImg(manga.manga?.images)}
                  alt={manga.manga?.title}
                />
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors cursor-pointer">
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
                    className="w-20 h-24 object-cover rounded cursor-pointer "
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
