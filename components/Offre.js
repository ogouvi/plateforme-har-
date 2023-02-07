import React from 'react';
import { offre } from '../lib/data';

function Offre() {
    const {text, text2} = offre
  return (
    <div priority className="flex h-[280px] items-center my-10 bg-[url('../public/assets/images/banner.webp')] bg-cover">
        <div className="container bg-gray-600 bg-opacity-30 px-5 mx-auto flex flex-wrap text-white
         text-xl font-bold md:text-2xl  ">{text} {text2}</div>
        
    </div>
  )
}

export default Offre