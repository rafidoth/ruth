'use client'
import { Btn } from "@/components/UI/Btn"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/UI/Input"
import {signUp, singnInWIthGoogle} from '../api'




export default function Page() {
  const [user, setUser] = useState({
    name : '',
    email : '',
    password : ''
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const flag = Object.values(user).every(item=>item!== ''&& item !== null);
    if(flag){
      await signUp(user.email, user.password, user.name)
      localStorage.setItem('isLoggedIn','1')
      // router.push('/dashboard')
      window.location.href = "/dashboard"
    }else{
      alert('Please fill all fields')
    }r
    
  }
  



  return (
    <main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSubmit} className="flex flex-col font-jetBrain gap-y-6">
            <label>Enter your name </label>
            <Input inputType={'normal'} handleFunction={e=>setUser({...user,name: e.target.value})} placeholder='Enter name here (required)' type={'name'} name ={'name'}/>
            <label >Enter your email*</label>
            <Input inputType={'normal'} handleFunction={e=>setUser({...user,email: e.target.value})} placeholder='Enter email here (required)' type={'email'} name ={'email'}/>
            <label>Enter your password*</label>
            <Input inputType={'normal'} handleFunction={e=>setUser({...user,password: e.target.value})} placeholder='Enter password here (required)' type={'password'} name ={'password'}/>
            <Btn type ='submit'>Sign Up</Btn>
          </form>
        </div>
    </main>
  )
}
