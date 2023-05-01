"use client"
import { useRouter } from "next/navigation"

export const ButtonCaps = ({ field }) => {
    
    const router = useRouter()
    
    return (
        <button onClick={() => { router.push(`/series/${field}`) }}>Capitulos</button>

    )
}