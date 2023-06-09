'use client'


import { useEffect, useState } from "react";
import { getLoggedInAccount, getLoggedInSession, isProfileCompleted } from "../api";
import InputForm from "@/components/Dashboard/InputForm";


export default function Page(){
    const [completed, setCompleted] = useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            const loggedInId = await getLoggedInAccount()
            // const loggedInId = await getLoggedInSession()
            console.log(loggedInId)
            const isCompleted = await isProfileCompleted(loggedInId)
            // console.log(`complted : ${isCompleted}`)
            setCompleted(isCompleted)
        }
        fetchData()
    },[])

   
    return(<>
        <div className="container mx-auto px-5 py-16 font-inter">
            <h1 className="text-center font-jetBrain text-5xl">Hey,ruth<span className="text-amber-400">.</span></h1>
            <h3 className="text-center font-jetBrain text-3xl">How are <span className="text-ambedr-400">you</span>?</h3>
            {completed? <h1>completed</h1>: <InputForm/>}
        </div>
    </>)
}