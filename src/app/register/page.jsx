'use client'
import { Btn } from "@/components/UI/Btn"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/UI/Input"
import {signUp, singnInWIthGoogle} from '../api'




export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const router = useRouter();
 

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }


  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signUp(email, password, name)
    localStorage.setItem('isLoggedIn','1')
    // router.push('/dashboard')
    window.location.href = "/dashboard"
  }
  



  return (
    <main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSubmit} className="flex flex-col font-jetBrain gap-y-6">
            <label>Enter your name</label>
            <Input inputType={'normal'} handleFunction={e=>setName(e.target.value)} placeholder='Enter name here' type={'name'} name ={'name'}/>
            <label >Enter your email</label>
            <Input inputType={'normal'} handleFunction={handleEmail} placeholder='Enter email here' type={'email'} name ={'email'}/>
            <label>Enter your password</label>
            <Input inputType={'normal'} handleFunction={handlePassword} placeholder='Enter password here' type={'password'} name ={'password'}/>
            <Btn type ='submit'>Sign Up</Btn>
          </form>
        </div>
    </main>
  )
}
