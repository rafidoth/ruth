'use client'
import { useState } from "react"
import { Input } from "../../components/UI/Input"
import { Btn } from "../../components/UI/Btn"
import { signIn } from "../api"


export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }


  const handleSignIn = async ()=>{
    await signIn(email,password);
    localStorage.setItem('isLoggedIn','1');
    window.location.href = "/dashboard"
  }
  return (
    <><main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSignIn} className="flex flex-col font-jetBrain gap-y-6">
            <label >Enter your email</label>
            <Input inputType={'normal'} handleFunction={handleEmail} placeholder='Enter email here' type={'email'} name ={'email'}/>
            <label>Enter your password</label>
            <Input inputType={'normal'} handleFunction={handlePassword} placeholder='Enter password here' type={'password'} name ={'password'}/>
            <Btn onClick={handleSignIn} type ='submit'>Sign In</Btn>
          </form>
        </div>
    </main> 
    </>
  )
}
