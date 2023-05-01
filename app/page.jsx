import { Cards } from "@/components/Cards"

const getAnimeAll = async () => {
  //No se puede usar local host
  const res = await fetch(`http://127.0.0.1:8090/api/collections/anime/records`)
  const data = await res.json()
  return data.items
}

const urlFI = "http://127.0.0.1:8090/api/files/jiwk6jd8hx16uwh/"

const Home = async() => {

  const animeAll = await getAnimeAll()
  
  return (
    <div>
      <Cards urlFI={urlFI} animeAll={animeAll} />   
    </div>
  )
}

export default Home