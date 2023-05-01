"use client"

import { useRouter } from "next/navigation"

export const Navbar = () => {
    
    const router = useRouter()
    
    return (
        <>
         <h1 className="capElement" onClick={()=> {router.push('/')}}>next anime</h1>
        <hr />
        </>
    )
}