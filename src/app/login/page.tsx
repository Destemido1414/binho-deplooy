"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function login(e:any){
e.preventDefault()

if(email === "admin@binho.com" && password === "12345678"){

localStorage.setItem("admin","true")
router.push("/admin")

}else{

alert("Login inválido")

}

}

return(

<div className="flex h-screen items-center justify-center bg-black">

<form onSubmit={login} className="bg-zinc-900 p-8 rounded-xl">

<h1 className="text-white text-2xl mb-6">
Login Admin BINHO
</h1>

<input
className="block mb-4 p-2"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="block mb-4 p-2"
placeholder="Senha"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="bg-white px-4 py-2">
Entrar
</button>

</form>

</div>

)

}