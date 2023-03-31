import React from 'react';
import Image from 'next/image';
import {header} from '../lib/data';
import {nav} from '../lib/data';
import Link from 'next/link';
import {useState} from 'react'


function Navbar() {
  const {logo} = header;
  const [showNav, setShowNav] = useState(true);

  return (
    <div>

      
<nav className=" px-2 py-2 fixed md:mt-10 w-full z-50 top-0 bg-gray-700 shadow  shadow-gray-600 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link href="/" className="flex items-center origin-bottom animate-open-menu">
        <Image priority="true" src={logo} width="150" height="10" className=" md:w-[200px] " alt="hare.com icon" />
    </Link>

    {showNav? (<button onClick={() =>setShowNav(!showNav)} data-collapse-toggle="navbar-dropdown" type="button" 
        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:text-primary_color focus:outline-none focus:ring-2 focus:ring-gray-200" 
        aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    
  ):(<button onClick={() =>setShowNav(!showNav)} data-collapse-toggle="navbar-dropdown" type="button" 
        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:text-primary_color focus:outline-none focus:ring-2 focus:ring-gray-200" 
        aria-controls="navbar-dropdown" aria-expanded="false">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>)}

    <div className={(showNav ? "hidden" : "") + " w-full lg:block md:w-auto origin-top animate-open-menu " } id="navbar-dropdown">
      <ul className="flex flex-col items-center p-4 mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-[18px] md:font-medium md:border-0">
        <li onClick={() =>setShowNav(!showNav)}>
          <Link href="/" className="block py-2 pl-3 pr-4 text-white hover:text-primary_color rounded md:bg-transparent text-[16px] lg:text-[18px] md:p-0">Accueil</Link>
        </li>
        <li>
        <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="block py-2 pl-3 pr-4 text-white hover:text-primary_color rounded md:bg-transparent text-[16px] lg:text-[18px] md:p-0">
    <Link href="/services">Services</Link>
  </label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link href="/" >Blog</Link></li>
    <li><Link href="/catalogues" >Intrants et Équipements</Link></li>
    <li><a href="https://www.marche-hare.com" target="_blank" rel="noreferrer" >Marché Agricole</a></li>
    <li><Link href="/financement" >HareFinance</Link></li>
  </ul>
</div>
        </li>
         {nav.map((item, index) =>{
            const {name, href} = item
            return (<li onClick={() =>setShowNav(!showNav)} key={index}>
                <Link href={href} className="block py-2 pl-3 pr-2 text-white hover:text-primary_color text-[16px] lg:text-[18px] md:hover:text-primary_color md:p-0 ">{name}</Link>
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
