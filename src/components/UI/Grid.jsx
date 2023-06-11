'use client'
import {useState, useEffect} from 'react'

const Grid = () =>{   
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
      });
    
    const handleResize = ()=>{
        setWindowSize({...windowSize, width:window.innerWidth, height:window.innerHeight})
    }

    useEffect(() => {
        setWindowSize({...windowSize, width:window.innerWidth, height:window.innerHeight})
        window.addEventListener('resize', handleResize);
    }, []);

    const lightUp = e =>{
        e.currentTarget.classList.add('bg-amber-400');
    }

    const lightDown = e =>{
        e.currentTarget.classList.remove('bg-amber-400');
    }

    const lightItUp = e =>{
        e.currentTarget.classList.add('bg-amber-300');
    }
    const divGenerator = ()=>{
        const w = windowSize.width
        const h = windowSize.height
        const number = (w*h)/(40*40)
        return [...Array(Math.ceil(number)).keys()].map((item,index) => <div key={index}  onClick={lightItUp} onMouseEnter={lightUp} onMouseLeave={lightDown} className='w-[40px] h-[40px] border border-black/[0.04] dark:border-white/[0.01]'></div>)
    }

    return(
            <>  
                <div className='flex flex-wrap absolute inset-0 scale-110 '>
                    {divGenerator()}
                </div>   
            </>
        )
}


export {Grid}
