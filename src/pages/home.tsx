import { mangaApi } from '@/hooks/api/mangadex/manga'
import { Skeleton } from '@/components/ui/skeleton'
import { CarouselMain } from '@/components/carousel/carousel'
import { CarouselPop } from '@/components/carousel/carousel-many'

export const Home = () => {
  const { data, isFetching } = mangaApi.useMangaSearchRating()
  const { data: popular, isFetching: popularIsFetching } =
    mangaApi.useMangaSearchPopular()
  const { data: latest, isFetching: latestIsFetching } =
    mangaApi.useMangaSearchLatest()

  return (
    <div className="w-full">
      <h1 className="my-8 text-center text-2xl">Top Rated</h1>

      {isFetching ? (
        <div className="mx-10 flex space-x-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              className="h-64 w-full rounded-lg bg-gray-300"
              key={index}
            />
          ))}
        </div>
      ) : (
        data?.data && <CarouselMain manga={data.data} />
      )}

      <h1 className="my-8 text-center text-2xl">Latest Popular</h1>
      {popularIsFetching ? (
        <div className="mx-10 flex space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton
              className="h-64 w-full rounded-lg bg-gray-300"
              key={index}
            />
          ))}
        </div>
      ) : (
        popular?.data && <CarouselPop manga={popular.data} />
      )}

      <h1 className="my-8 text-center text-2xl">Latest Uploaded</h1>
      {latestIsFetching ? (
        <div className="mx-10 flex space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton
              className="h-64 w-full rounded-lg bg-gray-300"
              key={index}
            />
          ))}
        </div>
      ) : (
        latest?.data && <CarouselPop manga={latest.data} />
      )}
    </div>
  )
}
