'use client'
import { useState } from "react"
import { Input } from "../../components/UI/Input"
import { Btn } from "../../components/UI/Btn"
import Google from '../../../public/images/google.png'
import Github from '../../../public/images/github.png'
import Image from "next/image"
import { singnInWIthGoogle } from "../api"


export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const handleGoogle = async(e)=>{
    await singnInWIthGoogle();
    localStorage.setItem('isLoggedIn','1');
  }
  
  return (
    <><main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSubmit} className="flex flex-col font-jetBrain gap-y-6">
            <label >Enter your email</label>
            <Input handleFunction={handleEmail} placeholder='Enter email here' type={'email'} name ={'email'}/>
            <label>Enter your password</label>
            <Input handleFunction={handlePassword} placeholder='Enter password here' type={'password'} name ={'password'}/>
            <Btn type ='submit'>Sign In</Btn>
            <div className="flex items-center justify-center gap-x-6">
              <span>Sign in with</span>
              <button onClick={handleGoogle}><Image src={Google} width={30} alt="google"/></button>
              <button><Image src={Github} width={30} alt="git"/></button>
            </div>
          </form>
        </div>
    </main> 
    </>
  )
}
