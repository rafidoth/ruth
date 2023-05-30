import {Grid} from '../UI/Grid'
import { Navbar } from '../Navbar/Navbar'
import {inter, jetBrain} from '../../util/font'
import Image from 'next/image'
import blur from '../../../../public/images/blur.png'
import blur1 from '../../../../public/images/blur1.png'
import {Btn} from '../UI/Btn'
import {heroHeading} from '../../../../public/data/data'
import {Heading} from './Heading'
const Hero = ()=>{
    return(
        <>
            <Navbar/>  
            <div className={`container-fluid h-screen overflow-hidden relative ${inter.className}`}>
                <Grid/>
                <div className=' max-w-screen-lg h-full mx-auto px-4 flex flex-col gap-6 justify-center'>
                    <Heading/>
                    <Image className='absolute -z-10 inset-y-0 right-[400px] opacity-[0.5]' src={blur}/>
                    <div className='text-center text-medium'> 
                       <p className={`${jetBrain.className}`}>
                            {heroHeading}
                       </p>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Btn colorClass={''}>Find Ruth</Btn>
                        <Btn colorClass={''}>Explore</Btn>
                    </div>
                </div>

                <Image className='absolute -z-10 inset-y-0 blur-2xl opacity-[0.5]' src={blur1}/> 
            </div>
            <div className="h-[2px] bg-yellow-500 "></div>
        </>
    )
}



export {Hero}