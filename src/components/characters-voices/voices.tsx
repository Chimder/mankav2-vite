import { PeopleImages, PersonFull } from '@/shared/api/jikan/generated'
import { usePersoneStore } from '@/store/characters-people'
import dayjs from 'dayjs'

type Props = {
  voices: PersonFull
}

export function getPersoneImg(img?: PeopleImages) {
  if (img?.jpg?.image_url) return img.jpg.image_url
}

function Voices({ voices }: Props) {
  const setPersone = usePersoneStore().setPersone

  function handleSetCharacter(characterId?: number) {
    if (!characterId) return null
    setPersone(characterId, 'character')
  }
  if (!voices) return null
  return (
    <section className="w-full h-full overflow-y-scroll filterBar">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-6">
        <img
          className="w-56 h-72 mx-auto md:mx-0 object-cover"
          src={getPersoneImg(voices.images)}
        />
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="font-bold">Name:</dt>
          <dd>
            {voices.name} / {voices.given_name} / {voices.family_name}
          </dd>
          <dt className="font-bold">Birthday:</dt>
          <dd>{dayjs(voices.birthday).format('DD.MM.YYYY')}</dd>
          {voices.about && (
            <>
              <dt className="font-bold">About:</dt>
              <dd>{voices.about}</dd>
            </>
          )}
        </dl>
      </div>
      <div>
        {voices.voices &&
          voices.voices.map(anime => (
            <div
              key={`${anime.character?.name} ${anime.anime?.title} ${anime.character?.mal_id} voicesAnime`}
              className="group flex flex-co mb-2 items-center justify-between w-full border border-border p-4 rounded-lg hover:bg-accent/10 transition-colors md:flex-row"
            >
              <div className="center">
                <img
                  className="w-20 h-24 object-cover rounded"
                  src={getPersoneImg(anime.anime?.images)}
                />
                <div className="ml-4">{anime.anime?.title}</div>
              </div>

              <div
                onClick={() => handleSetCharacter(anime.character?.mal_id)}
                className="center cursor-pointer"
              >
                <div className="flex flex-col items-end mr-4">
                  <div>{anime.character?.name}</div>
                  <div>{anime.role}</div>
                </div>
                <img
                  className="w-20 h-24 object-cover rounded"
                  src={getPersoneImg(anime.character?.images)}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Voices
