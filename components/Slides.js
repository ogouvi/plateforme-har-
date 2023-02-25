
 import React from 'react';
 import Image from 'next/image';
 import {hero2} from '../lib/data.js';
 import Slider from 'react-animated-slider';
 import 'react-animated-slider/build/horizontal.css';

const Slides = () => {

  return (
    
    <div>
        <div className="relative md:pt-24 ">
        <Slider autoplay={2000}>
  {hero2.map((item, index) => 
  (
    <div key={index} className="relative" >
    {/*<!-- Item -->*/}
                     <div priority="true" class="center" data-carousel-item>
                        <Image alt="Mountains" src={item.bgHero}  quality={100} fill sizes="100vw" style={{objectFit: 'cover' }} priority="true" className="w-screen overflow-hidden z-[-1]"/>
                     </div>
                     <div className="container bg-gray-800 bg-opacity-30 mx-auto py-2 text-center my-[10rem] ">
                  <span className="text-white  text-sm md:text-3xl font-bold ">{item.title1}</span>
                  </div> 
                   
                    
       </div>
  )
  )}
</Slider>

        </div>
    </div>
  )
}

export default Slides