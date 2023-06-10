'use client'
import { useState } from "react"
import { Input } from "../../components/UI/Input"
import { Btn } from "../../components/UI/Btn"
import { signIn } from "../api"


export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    name  : '',
    password  :''
  })


  const handleSignIn = async (e)=>{
    e.preventDefault();
    const flag = Object.values(user).every(item=>item!== ''&& item !== null);
    if(flag){
      const response = await signIn(email,password);
      if(response){
        localStorage.setItem('isLoggedIn','1');
        window.location.href = "/dashboard"
      }else{
        localStorage.setItem('0');
        console.log("Invalid email password")
      }
    }else{
      alert('Please fill all fields')
    }
    
  }
  return (
    <><main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSignIn} className="flex flex-col font-jetBrain gap-y-6">
            <label >Enter your email</label>
            <Input inputType={'normal'} handleFunction={e=> setUser({...user, email : e.target.value})} placeholder='Enter email here (required)' type={'email'} name ={'email'}/>
            <label>Enter your password</label>
            <Input inputType={'normal'} handleFunction={e=> setUser({...user, email : e.target.value})} placeholder='Enter password here (required)' type={'password'} name ={'password'}/>
            <Btn type ='submit'>Sign In</Btn>
          </form>
        </div>
    </main> 
    </>
  )
}
