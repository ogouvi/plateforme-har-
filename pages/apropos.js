import React from 'react';
import Image from 'next/image';
import tabs from '../components/tabs';
import {futurPart,presentation} from '../pages/data';

const apropos = () => {
  const {imgPart, title, msg} = futurPart;
  const {titlePres, imgPres} = presentation;

  return (
<div>
    <div class=" relative md:h-[38rem]">
        <div class="md:h-full bg-[url('../public/assets/images/pexels-pixabay-221369.jpg')] bg-cover duration-700 ease-in-out" >
          <span className=" text-white text-3xl md:text-5xl font-bold flex self-center text-center justify-center py-[12rem]">A propos de nous</span>
            </div>
    </div>

    <div class="container mx-auto w-full h-[450px] border rounded-lg shadow-md my-12 ">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select tab</label>
            <select id="tabs" class="bg-bg_button hover:bg-green-800 border-0 border-b border-gray-200 text-white text-xl rounded-t-lg block w-full p-2.5">
                <option>Notre Equipe</option>
                <option>Notre Mission</option>
                <option>Notre Vision</option>
                <option>FAQ</option>
            </select>
        </div>
        <ul class="hidden w-ful text-md font-medium indicator text-center text-white divide-x divide-green-800  rounded-lg sm:flex" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li class="w-full">
                <button id="stats-tab" data-tabs-target="#equipe" type="button" role="tab" aria-controls="equipe" aria-selected="true" class="inline-block w-full p-4 rounded-tl-lg bg-bg_button hover:bg-green-800 ">Notre Equipe</button>
            </li>
            <li class="w-full">
                <button id="about-tab" data-tabs-target="#mission" type="button" role="tab" aria-controls="mission" aria-selected="false" class="inline-block w-full p-4 bg-bg_button hover:bg-green-800">Notre Mission</button>
            </li>
            <li class="w-full">
                <button id="faq-tab" data-tabs-target="#vision" type="button" role="tab" aria-controls="vision" aria-selected="false" class="inline-block w-full p-4  bg-bg_button hover:bg-green-800">Notre Vision</button>
            </li>
            <li class="w-full">
                <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-tr-lg bg-bg_button hover:bg-green-800 ">FAQ</button>
            </li>
            
        </ul>
        <div id="fullWidthTabContent" class="border-t border-gray-200 ">
            <div class=" p-4 bg-white rounded-sm md:p-8 " id="equipe" role="tabpanel" aria-labelledby="equipe-tab">
               <h2>Notre Equipe</h2>
               <p>Nous cultivons l'equité genre, l'egalité de chance pour tous, la transparance
                   et un environnement dynamique</p>
            </div>
            <div class="hidden p-4 bg-white rounded-lg md:p-8 " id="mission" role="tabpanel" aria-labelledby="mission-tab">
                <h2>Notre Mission</h2>
                <p>Notre mission est de valoriser nos produits agricoles enfin de tirer
                    le meilleurs de leurs utilisations et de rémédier a l'insecurité alimentaire</p>
            </div>
            <div class="hidden p-4 bg-white rounded-lg md:p-8 " id="vision" role="tabpanel" aria-labelledby="vision-tab">
                <h2>Notre Vision</h2>
            </div>
            <div class="hidden p-4 bg-white rounded-lg md:p-8 " id="faq" role="tabpanel" aria-labelledby="faq-tab">
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <h2 id="accordion-flush-heading-1">
                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <span>Cest quoi Haré.com?</span>
                        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Nos valorisons le travail des producteurs, leurs epanouissement et une vie
                           financièrement stable</p>
                       </div>
                    </div>
                  
                    </div>
            </div>
        </div>
    </div>
<div className="w-full md:h-[560px] bg-green-100 flex items-center justify-center">

       <div class="container mx-auto py-5 flex flex-col md:flex-row justify-center">
          <Image class="flex justify-center  " src={imgPart} alt=" agriculteur"/>
          <div class="bg-[#B7B74C]  flex flex-col p-5 leading-normal md:w-auto ">
            <h5 class=" w-auto font-bold tracking-tightv py-2  text-gray-900 ">{title}</h5>
            <p class=" text-white leading-normal py-2">{msg}</p>
          </div>
       </div>
    
    </div>
    

    <div className="flex flex-col items-center justify-center my-8">
        <h2 className="text-primary_color text-2xl md:text-4xl font-bold 
        flex items-center justify-center  md:pt-10">{titlePres}</h2>
        <Image width="" height="" alt="services" src={imgPres} className="flex text-center justify-center" />
    </div>

</div>
  )
}

export default apropos