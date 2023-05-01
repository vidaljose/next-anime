import { Card } from "./Card"

export const Cards = ({animeAll,urlFI}) => {
    
    return (
        <div style={{display:"flex"}}>
            {animeAll?.map(e => (
                <Card key={e.id}
                    caratula={urlFI + e.id + "/" + e.caratula}
                    nombre={e.nombre}
                    descripcion={e.descripcion}
                    id={e.id}
                    />
            ))}
        </div>

    )

}