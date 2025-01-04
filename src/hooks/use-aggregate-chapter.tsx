
import { useParams, useSearchParams } from 'react-router-dom'
import { chapterApi } from './api/mangadex/chapter'

const useAggregateChapter = () => {
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  // const router = useRouter()
  // const navigate = useNavigate()
  const lang = searchParams.get('lang') as string
  const manga = searchParams.get('manga') as string

  const { data: aggregate } = chapterApi.useMangaAggregate(manga, lang)

  console.log('AGGRE', aggregate)
  const flatAggregate = Object.values(aggregate?.volumes || {})
    .map(volume => Object.values(volume.chapters || {}))
    .reduce((acc, chapters) => acc.concat(chapters), [])

  const currentChapterIndex = flatAggregate.findIndex(chap => chap.id === id)

  // const prewChapter =
  //   currentChapterIndex > 0 ? flatAggregate[currentChapterIndex - 1] : undefined

  const nextChapter =
    currentChapterIndex < flatAggregate.length - 1
      ? flatAggregate[currentChapterIndex + 1]
      : undefined

  // console.log('CURChap', currentChapterIndex, 'andNEXT:', nextChapter)
  // console.log('AGGREAG', flatAggregate)
  // console.log('AGGREAG@@@', aggregate)

  return { flatAggregate, nextChapter }
}

export default useAggregateChapter
