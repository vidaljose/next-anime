"use client"

import { useRouter } from "next/navigation"

export const CapList = ({caps}) => {

    const router = useRouter()

    return (
        <>
        {caps.map(cap => (
                <li key={cap.id} className="capElement" onClick={()=>{router.push(`/capitulo/${cap.id}`)}}>Capitulo {cap.titulo}</li>
            ))}
        </>
    )
}