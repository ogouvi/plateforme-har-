
import React from 'react';
import {useState} from 'react'
import Image from 'next/image';
import tabs from '../components/tabs';
import {futurPart,presentation} from '../lib/data';

const Apropos = () => {
  const {imgPart, title, msg,imp,imp1,imp2,imp3,imp4,imp5} = futurPart;
  const {titlePres, imgPres} = presentation;


  const [toggleState,setToggleState] = useState(1);
  const toggleTab =(index) => {
    setToggleState(index);
  }

  return (
<div>
    <div class=" relative md:h-[38rem]">
        <div class="h-[60vw] md:h-full flex items-center   bg-heroApropos bg-cover duration-700 ease-in-out" >
          <span className=" text-white bg-gray-800  p-3 bg-opacity-30 mx-auto rounded-md text-3xl md:text-5xl font-bold flex self-center text-center justify-center ">A propos de nous
          </span>
            </div>
    </div>
    <div className="bg-bg_client md:h-[35rem] flex items-center justify-center">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white  md:text-xl font-semibold "> Haré.com est une start-up qui resout les grands problemes que fait face le secteur agricoles: <br/>L'education et l'accès à l'information des agriculteurs d'une part  et l'inefficacité de la chaîne de valeur d'une autre part.  Nous resolvons
          ces problemes grace aux nouvelles  technologies et nos applications .<br /><br /> Nous formons les producteurs(petits et moyens agriculteurs) sur plusieurs varietés de cultures, sur l'utilisation des fertilisants, des herbicidess pesticides et differentes pratiques pour une agriculture 
          durable et agroecologique.<br /><br /> Après les recoltes, nous connectons les producteurs agricoles directement aux revendeurs, aux restaurants , aux hotêls et aux transformateurs pour pouvoir écouler leurs produits récoltés à travers plusieurs partenariats. 
          </span>
        </div>
      </div>
    <div class="container mx-auto   border rounded-lg shadow-md my-20 ">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select tab</label>
            <select id="tabs" class="bg-bg_button hover:bg-green-800 border-0 border-b border-gray-200 text-white text-base rounded-t-lg block w-full p-2.5">
                <option onClick={() =>toggleTab(1)}>Notre Equipe</option>
                <option onClick={() =>toggleTab(2)}>Notre Mission</option>
                <option onClick={() =>toggleTab(3)}>Notre Vision</option>
                <option onClick={() =>toggleTab(4)}>Nos valeurs</option>
            </select>
        </div>
        <ul class="hidden w-ful text-md font-medium indicator text-center text-white divide-x divide-green-800  rounded-lg sm:flex" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li class="w-full">
                <button onClick={() =>toggleTab(1)} id="stats-tab" data-tabs-target="#equipe" type="button" role="tab" aria-controls="equipe" aria-selected={toggleState===1 ? "true":"false"} class={toggleState===1? "inline-block w-full p-4 rounded-tl-lg bg-green-800 hover:bg-green-800":"inline-block w-full p-4 rounded-tl-lg bg-bg_button hover:bg-green-800 "}>Notre Equipe</button>
            </li>
            <li class="w-full">
                <button onClick={() =>toggleTab(2)} id="about-tab" data-tabs-target="#mission" type="button" role="tab" aria-controls="mission" aria-selected={toggleState===2 ? "true":"false"} class={toggleState===2? "inline-block w-full p-4  bg-green-800 hover:bg-green-800":"inline-block w-full p-4  bg-bg_button hover:bg-green-800 "}>Notre Mission</button>
            </li>
            <li class="w-full">
                <button onClick={() =>toggleTab(3)} id="faq-tab" data-tabs-target="#vision" type="button" role="tab" aria-controls="vision" aria-selected={toggleState===3 ? "true":"false"} class={toggleState===3? "inline-block w-full p-4  bg-green-800 hover:bg-green-800":"inline-block w-full p-4  bg-bg_button hover:bg-green-800 "}>Notre Vision</button>
            </li>
            <li class="w-full">
                <button onClick={() =>toggleTab(4)}id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected={toggleState===4 ? "true":"false"} class={toggleState===4? "inline-block w-full p-4 rounded-tr-lg bg-green-800 hover:bg-green-800":"inline-block w-full p-4 rounded-tr-lg bg-bg_button hover:bg-green-800 "}>Nos valeurs</button>
            </li>
            
        </ul>
        <div id="fullWidthTabContent" class="border-t border-gray-200 ">
            <div class={toggleState ===1 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "}  id="equipe" role="tabpanel" aria-labelledby="equipe-tab">
               <h2 className="text-xl font-semibold text-green-800">Jeune et dynamique</h2>
               <p className="text-sm italic text-green-700">"Nous sommes plus puissants ensemble"</p>
               <p className="text-medium">Notre équipe est très dynamique et experimentée. Nous travaillons avec  professionalisme pour offrir le meilleur des services à nos clients. Nous evoluons dans un environnement d'apprentissage continu, d'ouverture d'esprit, de tolérance et de partage. Nos victoires sont célebrées ensemble et nous encourageons tout un chacun de nous d'agir d'une 
               manière responsable  </p>
           
            {/* <div className=" grid grid-cols-2 gap-2 md:flex md:space-x-3 md:flex-row  my-3">
                <div className=" flex flex-col justify-center items-center border-2 border-black p-2">
                    <Image src={imgPart} className="hidden lg:flex" alt="founder" width="150" height="150"/>
                    <h2 className="font-semibold ">OGOUVI Yaovi Ephraem</h2>
                    <span className="text-green-700 text-xs italic"> CEO et Co-fondateur</span>
                    <p className="text-sm">Ingenieur en Informatique<br/> 3 ans d'experience .</p>
                </div>
                <div className=" flex flex-col justify-center items-center border-2 border-black p-2">
                    <Image src={imgPart} className="hidden lg:flex" alt="founder" width="150" height="150"/>
                    <h2 className="font-semibold ">TCHALLA Komlan Sylvain</h2>
                    <span className="text-green-700 text-xs italic">Co-fondateur</span>
                    <p className="text-sm">Ingenieur en Biotechnologies<br/> 5 ans d'experience .</p>
                </div>
                <div className=" flex flex-col justify-center items-center border-2 border-black p-2">
                    <Image src={imgPart} className="hidden lg:flex" alt="founder" width="150" height="150"/>
                    <h2 className="font-semibold ">KOURA Komi</h2>
                    <span className="text-green-700 text-xs italic">Co-fondateur</span>
                    <p className="text-sm">Ingenieur des Travaux agricoles<br/> 2 ans d'experience chez NSCPA</p>
                </div>
                <div className="hidden  flex-col justify-center items-center border-2 border-black p-2">
                    <Image src={imgPart} alt="founder" className="hidden lg:flex" width="150" height="150"/>
                    <h2 className="font-semibold ">Ogouvi Yaovi Ephraem</h2>
                    <span className="text-green-700 text-xs italic"> CEO et Co-fondateur</span>
                    <p className="text-sm">Ingenieur en Informatique<br/> 5 ans d'experience .</p>
                </div>
            </div> */}
            </div>
            <div class={toggleState ===2 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="mission" role="tabpanel" aria-labelledby="mission-tab">
                <h2 className="text-xl font-semibold text-green-800">Notre Mission</h2>
                <p className="text-sm italic text-green-700">"L'agriculteur est notre première préoccupation"</p>
                <p className="text-medium">Notre mission  est de simplifier le procecessus agricole pour les petits et moyens producteurs de la sémis jusqu'a la vente des produits recoltés. </p>
            </div>
            <div class={toggleState ===3 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="vision" role="tabpanel" aria-labelledby="vision-tab">
                <h2 className="text-xl font-semibold text-green-800">Notre Vision</h2>
                <p className="text-sm italic text-green-700">"Impacter la vie  de millions d'agriculteurs"</p>
                <p className="text-medium">Notre vision est de se positionner comme entreprise de référence, fiable pour les agriculteurs, qui promouvois la transition à une agriculture
                 agroecologique et durable, et qui remedie a l'insecurité alimentaire grace a une chaine de valeur éffeciente</p>
            </div>
            <div class={toggleState ===4 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="faq" role="tabpanel" aria-labelledby="faq-tab">
                 <h2 className="text-xl font-semibold text-green-800"> Nos valeurs</h2>
                <p className="text-sm italic text-green-700">"Nos valeurs nous definissent"</p>
                <p className="text-medium"> Nous cultivons une relation basée sur la confiance et le respect mutuel avec les agriculteurs, les clients et nos partenaires. Nous croyons à une chance egale pour tous que vous soyez femme ,homme ou enfants.
                 Nous encourageons la revolution verte et la pratique d'une agriculture durable et ecologique.  Nous poursuivons l'excellence dans notre domaine et d'offrir une experience fantastique à nos clients . </p>
            </div>
        </div>
    </div>
<div className="w-full p-8  bg-green-100 flex items-center justify-center">

       <div class="container mx-auto py-5 flex flex-col md:flex-row justify-center">
          <Image class="flex justify-center md:hidden " src={imgPart} alt=" agriculteur"/>
          <div class="bg-[#ffdb0f] shadow-md rounded-b-lg flex flex-col p-5 leading-normal md:w-auto ">
            <h5 class=" w-auto text-xl font-bold tracking-tight py-2  text-gray-900 ">{title}</h5>
            <p class=" text-gray-700 leading-normal py-2">{msg}<br/></p>
            <p class=" text-gray-800 font-semibold leading-normal py-2">{imp}<br/>{imp1}<br/>{imp2}<br/>{imp3}<br/>{imp4}<br/>{imp5}</p>
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

export default Apropos