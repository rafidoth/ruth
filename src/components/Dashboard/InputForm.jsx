'use client'

import { Input } from "@/components/UI/Input";
import { Btn } from "@/components/UI/Btn";
import { useState } from "react";
export default function InputForm (){
    const [data, setData] = useState({
        'name' : '',
        'tech_interest':'',
        'github_profile' : '',
        'project' : ''
    })
    const handleSubmit =async (e)=>{
        e.preventDefault();
        // const isValid = Object.values(data).every(item=> item !== null && item !== '')
        // if(isValid) {

        // }else{
        //     alert('Please fill all fields');
        // }
    }

    return(<>
        <div className="border rounded-2xl border-white/[0.1] px-8 py-14 my-7">
                <form className="flex gap-6">
                        <div className="flex flex-col gap-6 w-1/2">
                            <label>😀 Can we know your name?</label>
                            <Input handleFunction={(e)=>setData({...data, 'name' : e.target.value})}  inputType={'normal'} placeholder={'enter name here please'}/>
                            <label>👉 In which tech area you are interested in?</label>
                            <Input handleFunction={(e)=>setData({...data, 'tech_interest' : e.target.value})} inputType={'optional'} placeholder={'choose your here please'}/>
                            <label>👉 Your Github profile link</label>
                            <Input handleFunction={(e)=>setData({...data, 'github_profile' : e.target.value})} inputType={'normal'} placeholder={'enter the link here please'}/>
                        </div>
                        <div className="flex flex-col gap-6 w-1/2">
                            <label>👉 Do you have an project idea to work with a collaborator ?</label>
                            <Input handleFunction={(e)=>setData({...data, 'project' : e.target.value})} inputType={'textarea'}/>
                            <div className=""><Btn onClick = {handleSubmit} behindBlack={false}>Done</Btn></div>
                        </div>
                </form>
            </div>
    </>);
}