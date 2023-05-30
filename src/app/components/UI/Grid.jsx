'use client'
import {useState, useEffect} from 'react'


const Grid = () =>{   
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
    const handleResize = ()=>{
        setWindowSize({...windowSize, width:window.innerWidth, height:window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    const divGenerator = ()=>{
        const w = windowSize.width
        const h = windowSize.height
        //pixel sizing
        const number = (w*h)/(40*40)
        return [...Array(Math.ceil(number)).keys()].map((item) => <div className='w-[40px] h-[40px] border border-black dark:border-white'></div>)
    }

    return(
            <>  
                <div className='flex flex-wrap absolute inset-0 scale-110 opacity-[0.04]'>
                    {divGenerator()}
                </div>   
            </>
        )
}


export {Grid}