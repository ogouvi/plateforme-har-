
import Image from 'next/image';
import {footer} from '../lib/data';
import React from 'react';
import Link from 'next/link';

function Footer() {

const {footerIcon} = footer;

  return (
    <div>
    
      <footer className="bg-[#0e8013] text-white ">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link href="/" className="flex flex-col title-font font-medium items-center md:justify-start justify-center text-gray-900">
         <Image width= "150" height="50" className="" src={footerIcon} alt="icon-haré" />
        <span className="ml-3 text-2xl font-bold text-white">Plateforme <br/>Haré.com</span>
        <p className="mt-2 text-md text-white text-center font-extrabold">" Promouvoir une agriculture de valeur "</p>
      </Link>
     
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold  text-white tracking-widest text-2xl mb-3">Liens <br/> Utiles</h2>
        <nav className="list-none mb-10">
          <li className="pb-1 cursor-pointer">
            <Link href="/" className=" text-white hover:text-gray-800">Accueil</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/services" className="text-white hover:text-gray-800">Services</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/acheteur" className="text-white hover:text-gray-800">Acheteur</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/producteur" className="text-white hover:text-gray-800">Vendeur</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold  text-white tracking-widest text-2xl mb-3">A propos de nous</h2>
        <nav className="list-none mb-10">
          <li className="pb-1 cursor-pointer">
            <Link href="/apropos" className=" text-white hover:text-gray-800">Notre Equipe</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/apropos" className="text-white hover:text-gray-800">Notre Mission</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/apropos" className="text-white hover:text-gray-800">Notre Vision</Link>
          </li>
          <li className="pb-1 cursor-pointer">
            <Link href="/apropos" className="text-white hover:text-gray-800">Nos Partenaires</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold  text-white tracking-widest text-2xl mb-3">Nos Services</h2>
        <nav className="list-none mb-10">
          <li className="pb-1 ">
            <Link href="/" className=" text-white hover:text-gray-800">Plateforme Haré</Link>
          </li>
          <li className="pb-1">
          <a href="https://www.marche-hare.com" target="_blank" rel="noreferrer" className=" text-white hover:text-gray-800" >Marché Haré </a>
          </li>
          <li className="pb-1 ">
            <Link href="/" className="text-white hover:text-gray-800">Blogs</Link>
          </li>
          <li className="pb-1 ">
            <Link href="/" className="text-white hover:text-gray-800">Hare-finance</Link>
          </li>
          
       
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold  text-white tracking-widest text-2xl mb-3">Nos Contacts</h2>
        <nav className="list-none mb-10">
          <li className="pb-1 cursor-pointer">
          <h2 className="flex text-lg justify-center md:justify-start"> <svg id="baseline-phone-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_867" data-name="Path 867" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_868" data-name="Path 868" d="M6.62,10.79a15.149,15.149,0,0,0,6.59,6.59l2.2-2.2a.994.994,0,0,1,1.02-.24,11.407,11.407,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.25,1.02Z" fill="#fff"/>
</svg>
 Telephone:</h2>
            <a className=" text-white hover:text-gray-800">+228 90 68 68 45</a>
          </li>
          <li className="pb-1 cursor-pointer">
            <a className="text-white hover:text-gray-800">+228 91 64 64 41<br/></a>
          </li>
          <li className="pb-1 cursor-pointer">
          <h2 className='flex text-lg justify-center md:justify-start'><svg id="baseline-location_on-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_849" data-name="Path 849" d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z" fill="#fff"/>
  <path id="Path_850" data-name="Path 850" d="M0,0H24V24H0Z" fill="none"/>
</svg>
 Addresse:</h2>
            <a className="text-white hover:text-gray-800"> Sur la RN1,<br/> 300m après le fleuve  Anié,<br/>Jean-Copé Anié, Region des Plateaux<br/></a>
          </li>
          <li className="pb-1 cursor-pointer">
            <h2 className="flex text-lg justify-center md:justify-start"><svg id="baseline-email-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_831" data-name="Path 831" d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z" fill="#fff"/>
  <path id="Path_832" data-name="Path 832" d="M0,0H24V24H0Z" fill="none"/>
</svg>
 Email:</h2>
            <a className="text-white hover:text-gray-800">contact.hare@yahoo.com</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-bg_button">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2023 Haré-Agrisolutions —
        <Link href="https://twitter.com/ephraemogouvi" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Crée et maintenu par TheHarmonycs</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="https://www.facebook.com/profile.php?id=100090696663502" className="text-white cursor-pointer">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="https://twitter.com/haresolutions" className="ml-3 text-white cursor-pointer">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href="https://www.instagram.com/haresolutions/" className="ml-3 text-white cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link  className="ml-3 text-white cursor-pointer" href="www.linkedin.com">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer