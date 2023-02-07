/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import {hero} from '../lib/data';
import {useState, useRef, useEffect} from 'react';

export function Hero() {

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

  const {title1, title2,title3,title4,title5,title6,title7,title8,title9} = hero;

  return (

<div>
 <div id="controls-carousel" class=" carousel relative mx-auto" data-carousel="static">
    {/*<!-- Carousel wrapper -->*/}
    <div ref={carousel} class="relative overflow-hidden md:h-[39rem] w-full flex flex-row scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ">
  {/*<!-- Item -->*/}
          <div  className=" text-center relative h-full snap-start">
                   <div priority="true" className=" h-[60vh] md:h-full flex items-center w-screen bg-hero1 bg-cover gap-1  aspect-w-16 aspect-h-9 bg-left-top bg-no-repeat z-0 duration-300 ease-in-out" data-carousel-item>
                       <span className=" text-white bg-gray-800  p-3 bg-opacity-30  rounded-md  md:text-4xl font-bold flex self-center text-center justify-center mx-auto ">{title1}<br/>{title2}<br/>{title3}</span>
                   </div>
            </div>
            <div  className=" text-center relative h-full snap-start">
                   <div priority="true" className="h-[60vh] md:h-[100%] flex items-center w-screen bg-hero2 bg-cover gap-1  aspect-w-16 aspect-h-9 bg-left-top bg-no-repeat z-0 duration-300 ease-in-out" data-carousel-item>
                       <span className=" text-white bg-gray-800  p-3 bg-opacity-30  rounded-md md:text-4xl font-bold flex self-center text-center justify-center mx-auto ">{title4}<br/>{title5}<br/>{title6}</span>
                   </div>
            </div>
            <div  className=" text-center relative h-full snap-start">
                   <div priority="true" className="h-[60vh] md:h-[100%] flex items-center w-screen bg-hero3 bg-cover gap-1  aspect-w-16 aspect-h-9 bg-left-top  bg-no-repeat z-0 duration-300 ease-in-out" data-carousel-item>
                       <span className=" text-white bg-gray-800  p-3 bg-opacity-30  rounded-md md:text-4xl font-bold flex self-center text-center justify-center mx-auto ">{title7}<br/>{title8}<br/>{title9}</span>
                   </div>
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

  