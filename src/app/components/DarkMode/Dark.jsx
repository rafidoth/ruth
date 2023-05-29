'use client'

import {useState, useEffect} from 'react'
export function Dark (){
    const [isDark, setIsDark] = useState(true)

    useEffect(()=>{
        isDark? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    },[isDark])


    return(
        <div>
            <button onClick= {()=> setIsDark(true)}>Dark</button>
            <button onClick={()=>setIsDark(false)}>Light</button>
        </div>
    );
}