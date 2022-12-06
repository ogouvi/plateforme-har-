import React from 'react';
import Image from 'next/image';
import {hero} from '../pages/data';
import {useState, useRef, useEffect} from 'react';


export function Hero2() {
    return (

        <div>
         <div id="controls-carousel" class=" carousel relative mx-auto" data-carousel="static">
            {/*<!-- Carousel wrapper -->*/}
            <div  class="relative overflow-hidden md:h-[39rem] w-full flex flex-row scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ">
                {hero.map((item, index)=>{
                    const {title, title2,title3} = item;
                    const imgHero2 =[
                        "../public/assets/images/tractor-june252020.jpg",
                        "../public/assets/images/banner.jpg",
                        "../public/assets/images/pexels-flambo-1112080.jpg",
                      ];
                    {/*<!-- Item -->*/}
                    return(
                          
                    <div key={index} className=" text-center relative h-full snap-start">
                           <Image width=" " height=" " alt="" src={imgHero2}  class="h-full w-screen aspect-w-16 aspect-h-9 bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 duration-700 ease-in-out" data-carousel-item />
                               <span className=" text-black text md:text-4xl font-bold flex self-center text-center justify-center py-[12rem] ">{title}<br/>{title2}<br/>{title3}</span>
                           
                    </div>
                    )
                })}
              
             </div>
        
            {/*<!-- Slider controls -->*/}
            <div className=" flex justify-between absolute top-0 left-0 w-full h-full">
               <button type="button" onClick={movePrev} disabled={isDisabled('prev')} 
                       className="inline-flex text-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-70 hover:bg-gray-700 opacity-75 disabled:cursor-not-allowed z-10 p-2 mx-5 my-auto transition-all ease-in-out duration-500">
                       <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                   <span class="sr-only">Previous</span>
               </button>
               <button type="button" onClick={moveNext} disabled={isDisabled('next')} 
                       className="inline-flex text-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-70 hover:bg-gray-700 opacity-75 disabled:cursor-not-allowed z-10 p-2 mx-5 my-auto transition-all ease-in-out duration-500">
                       <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                   <span class="sr-only">Next</span>
               </button>
        
            </div>
          </div>
         
        </div>    
          )
}