/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import {hero} from '../lib/data';
import {useState, useRef, useEffect} from 'react';

export function Herow() {

  const maxScrollWidth= useRef(0);
  const  [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0){
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if(carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current){
        setCurrentIndex((prevState) => prevState + 1);
      }
  };

  



  const isDisabled =(direction) => {
    if(direction ==='prev'){
      return currentIndex <= 0;
    }

    if(direction ==='next' && carousel.current !==null){
      return(
         carousel.current.offsetWidth*currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if(carousel !== null && carousel.current !== null){
      carousel.current.scrollLeft = carousel.current.offsetWidth* currentIndex;
    }
  },[currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
    ? carousel.current.scrollWidth - carousel.current.offsetWidth:0;

  }, []);

//   const autoPlay =()=> {
//     console.log('autoPlay');
//     setCurrentIndex((prevState) => prevState + 1);
// };
//   setTimeout(()=>{
//     autoPlay();
//   },5000);

  const {title1, title2,title3,title4,title5,title6,title7,title8,title9,bgHero1,bgHero2,bgHero3} = hero;

  return (

<div>
 <div id="controls-carousel" class=" carousel relative  " data-carousel="static">
    {/*<!-- Carousel wrapper -->*/}
    <div ref={carousel} class="relative overflow-hidden  w-full flex flex-row justify-center  mx-auto items-center scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ">
  {/*<!-- Item -->*/}
                   <div priority="true" className="h-[35vh] md:h-[100vh] w-screen overflow-hidden z-[-1]" data-carousel-item>
                      <Image alt="Mountains" src={bgHero1} placeholder="blur" quality={100} fill sizes="100vw" style={{objectFit: 'cover' }}/>
                   </div>
                      <div className="container bg-gray-800 bg-opacity-30 mx-auto py-2 items-center">
                  <span className="text-white  text-sm md:text-4xl font-bold text-center">{title1}</span>
                  </div>
                 
                  
     </div>
  
    {/*<!-- Slider controls -->*/}
    <div className=" flex justify-between absolute top-0 left-0 w-full h-full">
       <button type="button" onClick={movePrev} disabled={isDisabled('prev')} 
               className="inline-flex text-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-gray-700 opacity-75 disabled:cursor-not-allowed z-10 p-2 mx-5 my-auto transition-all ease-in-out duration-500">
               <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
           <span class="sr-only">Previous</span>
       </button>
       <button type="button" onClick={moveNext} disabled={isDisabled('next')} 
               className="inline-flex text-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-gray-700 opacity-75 disabled:cursor-not-allowed z-10 p-2 mx-5 my-auto transition-all ease-in-out duration-500">
               <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
           <span class="sr-only">Next</span>
       </button>

    </div>
  </div>
 
</div>    
  )
}

  