'use client'
import { useState } from "react"
import { Input } from "../../../components/UI/Input"
import { Btn } from "../../../components/UI/Btn"
import { signIn } from "../../api"


export default function Page() {
  const [user, setUser] = useState({
    email  : '',
    password  :''
  });
  const [error, setError] = useState('');

  const handleEmail = e =>{
    setUser({...user, email : e.target.value})
  }

  const handlePassword = e =>{
    setUser({...user, password : e.target.value})
  }
  const handleSignIn = async (e)=>{
    e.preventDefault();
    const flag = Object.values(user).every(item=>item!== ''&& item !== null);
    if(flag){
      const response = await signIn(user.email,user.password);
      if(response === 'x'){
        setError("The email address you entered isn't matched with the password")
        
      }else{
        localStorage.setItem('user', JSON.stringify(response))
        window.location.href = "/dashboard"
      }
    }else{
      alert('Please fill all fields')
    }
    
  }
  return (
    <><main className="container-fluid mx-auto h-screen flex justify-center items-center">
        <div className="min-w-[470px] border px-6 py-12 rounded-3xl border-black/[0.1] dark:border-white/[.1] ">
          <form onSubmit={handleSignIn} className="flex flex-col font-jetBrain gap-y-6">
            <p className="text-[12px] text-red-600 font-inter">{error}</p>
            <label >Enter your email</label>
            <Input inputType={'normal'} handleFunction={handleEmail} placeholder='Enter email here (required)' type={'email'} name ={'email'}/>
            <label>Enter your password</label>
            <Input inputType={'normal'} handleFunction={handlePassword} placeholder='Enter password here (required)' type={'password'} name ={'password'}/>
            <Btn type ='submit'>Sign In</Btn>
          </form>
        </div>
    </main> 
    </>
  )
}
