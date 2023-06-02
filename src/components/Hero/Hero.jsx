import {Grid} from '../UI/Grid'
import Image from 'next/image'
import blur from '../../../public/images/blur.png'
import blur1 from '../../../public/images/blur1.png'
import {Btn} from '../UI/Btn'
import {heroHeading} from '../../../public/data/data'
import {Heading} from './Heading'
import Link from 'next/link'
const Hero = ()=>{
    return(
        <>
            <div className={`container-fluid h-screen overflow-hidden relative border-b border-white/[0.1]`}>
                <Grid/>
                <div className=' max-w-screen-lg h-full mx-auto px-4 flex flex-col gap-6 justify-center'>
                    <Heading/>
                    <Image className='absolute -z-10 inset-y-0 right-[400px] opacity-[0.5]' src={blur}/>
                    <div className='text-center text-medium z-10'> 
                       <p className={`font-jetBrain`}>
                            {heroHeading}
                       </p>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Btn><Link href={'/login'}>Find Ruth</Link></Btn>
                        <Btn colorClass={''}>Explore</Btn>
                    </div>
                </div>

                <Image className='absolute -z-10 inset-y-0 blur-2xl opacity-[0.5]' src={blur1}/> 
            </div>
            {/* <div className="h-[2px] bg-yellow-500 "></div> */}
        </>
    )
}



export {Hero}