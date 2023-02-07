import React from 'react';
import Image from 'next/image';
import {impacts} from '../lib/data';

const Impacts = () => {
  return (
    <div className="my-10">
        <div className="container mx-auto grid items-center justify-center grid-cols-2 md:flex md:flex-row  ">
           <div className="impact bg-[url('../public/assets/images/pexels-quang-nguyen-vinh-2135677.webp')] bg-cover h-52  flex items-center justify-center ">
            <h2 className="
            text-white  md:text-2xl font-bold bg-bg_footer bg-opacity-80 border-bg_footer  rounded-lg p-2 ">Notre Impact</h2>
           </div>
            {impacts.map((item, index) => 
              {
                const {title, image,bg,color} = item
                return ((
                <div key={index} className=" h-52  flex flex-col  items-center justify-center " style={{backgroundColor: bg, color:color} }>
                  <Image priority width="70" height="50" src={image} alt="Impact" className="pb-4 "/>
                   <span className="flex text-center justify-center px-2 ">{title}</span>
                </div>))
              }
            )}
        </div>
    </div>
  )
}

export default Impacts