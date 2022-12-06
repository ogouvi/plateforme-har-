import React from 'react';
import {partenaires} from '../pages/data';
import Image from 'next/image';

const Partenaires = () => {
  return (
    <div>
        <div className="bg-bg_parts md:h-[356px] py-5">
            <h2 className="text-primary_color text-2xl md:text-4xl font-bold 
        flex items-center justify-center  md:py-10">Nos Partenaires</h2>
          
          <div className="container mx-auto grid items-center justify-center grid-cols-2 md:flex  my-5">
          {partenaires.map((item, index) => {
            const {name} = item
            return((
                <div key={index} className="px-8 my-4">
                    <Image width="200" height="100" src={name} alt="logos" />
                </div>
             ))
           })}
          </div>
        </div>
    </div>
  )
}

export default Partenaires