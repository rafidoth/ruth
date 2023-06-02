'use client'
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/solid'
import {useState, useEffect} from 'react'
export function Dark (){
    const [isDark, setIsDark] = useState(true)

    useEffect(()=>{
        isDark? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    },[isDark])

    const changeTheme = ()=>{
        if(isDark){
            setIsDark(false);
        }else{
            setIsDark(true);
        }
    }
    return(
        <div>
            <span className='cursor-pointer' onClick = {changeTheme}>{(isDark? <SunIcon className="h-6 w-6 text-amber-400"/>:<MoonIcon className="h-6 w-6 text-amber-400 "/>)}</span>
        </div>
    );
}