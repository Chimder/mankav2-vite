import { mangaApi } from '@/hooks/api/mangadex/manga'

export const Home = () => {
  const { data } = mangaApi.useMangaSearchPopular()

  return (
    <div>
      <h1>Home</h1>
      {/* {data?.data && <Carousell mangas={data.data} />} */}
      {/* <EmblaCarousel slides={data?.data} options={OPTIONS} /> */}
      {/* {data?.data && <Carousel data={data.data} key={`fsdfsfsdfds`} />} */}
    </div>
  )
}
