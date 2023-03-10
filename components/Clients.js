
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clients } from '../lib/data';

export default function Clients() {
  const {client1,client2, title1, title2 } = clients
  return (
    <div className="mt-10 mb-14">
       <div>
         <h1 className="text-primary_color text-2xl md:text-4xl font-bold flex items-center justify-center pt-5 ">Potentiel Clients</h1>
       </div>

     <div className="flex flex-col md:flex-row items-center justify-center py-10 ">
     <div class=" md:w-80 h-[500px] bg-[rgb(223,214,21)] border border-gray-200 rounded-lg shadow-md mt-12 mx-12">
            <Image width="auto" height="auto" class=" rounded-t-lg" src={client1} alt="client1 Image" />
        <div class="p-5">
                <h5 class="mb-2  text-lg md:text-2xl font-bold tracking-tight text-gray-900">{title1}</h5>
            <p class="mb-3 font-normal text-gray-700 ">Commandez et recevez votre produit recolté tracable en un seul Click.</p>
            <p class="mb-3 font-semibold text-gray-700 ">Payez en ligne en toute securité</p>
            <div className="flex justify-between mt-10 ">
            <Link href="/acheteur" class="inline-flex items-center  text-sm font-medium text-center text-black underline hover:text-white">
                En savoir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="/acheteur" class="inline-flex items-center p-1 ml-1 md:px-3 py-2 text-sm font-medium text-center text-white bg-primary_color rounded-lg hover:bg-bg_button focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                S'Enregistrer
                 </Link>
            </div>
        </div>
     </div>

     <div class="md:w-80 h-[500px] bg-[#3CB65D] border border-gray-200 rounded-lg shadow-md mt-12 mx-12 ">
     <Image width="auto" height="300" class=" rounded-t-lg" src={client2} alt="Client2 Image" />
        <div class="p-5">
                <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-white">{title2}</h5>
            <p class="mb-3 font-normal text-white">Faites nous confiance avec vos récoltes et vendez en un seul click.</p>
            <p class="mb-3 font-semibold text-white ">Recevez votre payement en moins de 48h!</p>
            <div className="flex justify-between mt-12">
            <Link href="/producteur" class="inline-flex items-center  text-sm font-medium text-center text-gray-100 underline hover:text-black">
                En savoir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="/producteur" class="inline-flex items-center p-1 ml-1 md:px-3 py-2 text-sm font-medium text-center text-white bg-bg_button rounded-lg hover:bg-[#c0bd1c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                S'Enregistrer
                 </Link>
            </div>
        </div>
     </div>

     </div>

    </div>
  )
}


{/**



*/}



