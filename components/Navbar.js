import React from 'react';
import Image from 'next/image';
import {header} from '../pages/data.js';
import {nav} from '../pages/data';
import {dropdown} from '../pages/data';

function Navbar() {
  const {logo} = header
  return (
    <div>

      
<nav class="px-2 py-2 bg-bg_nav">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <Image src={logo} width="150" height="10" class=" md:w-[200px] " alt="hare.com icon" />
    </a>

    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden
     hover:text-primary_color focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col p-4 mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-[18px] md:font-medium md:border-0">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-primary_color text-[16px] lg:text-[18px] md:p-0" aria-current="page">Accueil</a>
        </li>
         {nav.map((item, index) =>{
            const {name, href} = item
            return (<li key={index}>
                <a href={href} class="block py-2 pl-3 pr-2 text-white text-[16px] lg:text-[18px] md:hover:text-primary_color md:p-0 ">{name}</a>
              </li>)
         })}
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
