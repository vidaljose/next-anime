"use client"

import { useRouter } from "next/navigation"

export const Card = ({descripcion, caratula,nombre,id }) => {
    
    const router = useRouter()
    
    return (
        <div className="card" onClick={() => {router.push(`/series/${id}`)}}>
            <h3>{nombre}</h3>
            <img src={caratula} alt={nombre} width="500"/>
            <p>{descripcion}</p>
        </div>
    )
}