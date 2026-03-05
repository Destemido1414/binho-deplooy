"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminLayout({children}:any){

const router = useRouter()

useEffect(()=>{

const admin = localStorage.getItem("admin")

if(!admin){

router.push("/login")

}

},[])

function logout(){

localStorage.removeItem("admin")
router.push("/login")

}

return(

<div>

<div className="bg-black text-white p-4 flex justify-between">

<h1>Admin BINHO</h1>

<button
onClick={logout}
className="bg-red-600 px-3 py-1 rounded"
>
Logout
</button>

</div>

{children}

</div>

)

}