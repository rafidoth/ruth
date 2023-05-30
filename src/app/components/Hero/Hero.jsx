import {Grid} from '../UI/Grid'
import { Navbar } from '../Navbar/Navbar'
import {inter} from '../../util/font'
import Image from 'next/image'
import blur from '../../../../public/images/blur.png'
import blur1 from '../../../../public/images/blur1.png'
const Hero = ()=>{
    return(
        <>
            <Navbar/>  
            <div className={`container-fluid h-screen overflow-hidden relative ${inter.className}`}>
                <Grid/>
                <div className=' max-w-screen-lg h-full mx-auto px-4 flex flex-col gap-6 text-center justify-center'>
                    <h1 className='text-9xl text-center font-black'><span className=''>Collaborate</span> &<br/> <span className='text-amber-400 '>Code</span> with Ease</h1>
                    <Image className='absolute inset-y-0 right-[400px] opacity-[0.5]' src={blur}/>  
                    <div className='flex justify-center gap-4'>
                        <Btn colorClass={'bg-amber-400'}>Find Ruth</Btn>
                        <Btn colorClass={'bg-amber-400'}>Explore</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}


const Btn =({children, colorClass})=>{
    return(
        <button className={`${colorClass}  text-black text-2xl px-5 py-2 rounded-xl`}>{children}</button>
    )
}

export {Hero}