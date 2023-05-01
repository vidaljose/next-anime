import { CapList } from "@/components/CapList"
import { CardOnly } from "@/components/CardOnly"

const getAnime = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/anime/records/${id}`)
    const data = await res.json()
    return data
}

const getCaps = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/capitulos/records?filter=(field='${id}')`)
    const data = await res.json()
    return data.items
}

const urlFI = "http://127.0.0.1:8090/api/files/jiwk6jd8hx16uwh/"

const Serie = async({ params }) => {

    const anime =await getAnime(params.id)
    const caps = await getCaps(params.id)

    return (
        <>
        <CardOnly key={anime.id}
            caratula={urlFI + anime.id + "/" + anime.caratula}
            nombre={anime.nombre}
            descripcion={anime.descripcion}
            id={anime.id} />
        <ul>
            <CapList caps={caps} /> 
        </ul>
        </>
    )
}

export default Serie