import {Grid} from '../UI/Grid'
import { Navbar } from '../Navbar/Navbar'
import {inter, jetBrain} from '../../util/font'
import Image from 'next/image'
import blur from '../../../../public/images/blur.png'
import blur1 from '../../../../public/images/blur1.png'
import {Btn} from '../UI/Btn'
const Hero = ()=>{
    return(
        <>
            <Navbar/>  
            <div className={`container-fluid h-screen overflow-hidden relative ${inter.className}`}>
                <Grid/>
                <div className=' max-w-screen-lg h-full mx-auto px-4 flex flex-col gap-6 justify-center'>
                    <h1 className='text-9xl text-center font-black'><span className=''>Collaborate</span> &<br/> <span className='text-amber-400 '>Code</span> with Ease</h1>
                    
                    <Image className='absolute inset-y-0 right-[400px] opacity-[0.5]' src={blur}/>
                    <div className='text-center text-medium'> 
                       <p className={`${jetBrain.className}`}>
                       Coding with someone amplifies productivity, enhances code quality, and fosters accelerated learning. Collaborative programming allows for effective error detection, knowledge sharing, and better problem-solving. By tapping into the collective expertise of a coding partner, you can achieve greater efficiency and unlock the full potential of your projects. 
                       </p>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Btn colorClass={''}>Find Ruth</Btn>
                        <Btn colorClass={''}>Explore</Btn>
                    </div>
                </div>
            </div>
            <div className="h-[2px] bg-yellow-500 "></div>
        </>
    )
}



export {Hero}