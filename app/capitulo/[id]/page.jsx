import { ButtonCaps } from "@/components/ButtonCaps"
import { Video } from "@/components/Video"
// import { useRouter } from "next/navigation"

const urlFI = 'http://127.0.0.1:8090/api/files'

const getCap = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/capitulos/records/${id}`)
    const data = await res.json()
    return data
}

const Capitulo =async ({ params }) => {
    const cap = await getCap(params.id)

    // const router = useRouter()
    
    return (
        <>
            <h1>Capitulo {cap.titulo}</h1>
            <Video urlFI={urlFI} cap={cap} />
            <br />
            <ButtonCaps field={cap.field} />
        </>
    )
}

export default Capitulo