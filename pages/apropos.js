
import React from 'react';
import {useState} from 'react'
import Image from 'next/image';
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
<div class=" relative overflow-hidden md:h-[38rem]">
      <div className=" relative ">
      <div class="relative overflow-hidden  w-full flex flex-row justify-center  mx-auto items-center ">
  {/*<!-- Item -->*/}
                   <div  className=" h-[30vh] md:h-[38rem] overflow-hidden z-[-1]" data-carousel-item>
                      <Image priority alt="Mountains" src="/assets/images/pexels-airin-party-767240.webp"  quality={100} fill sizes="100vw" style={{objectFit: 'cover' }}/>
                   </div>
                      <div className=" bg-gray-800 bg-opacity-30 text-center py-2 items-center mx-auto justify-center">
                  <span className="container mx-auto text-white  text-lg md:text-4xl font-bold ">A propos de nous </span>
                  </div>
                 
                  
     </div>
      </div>
      </div>
    <div className="bg-bg_client md:h-[35rem] flex items-center justify-center">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white  md:text-xl font-semibold "> Haré.com est une start-up qui resout les grands problemes que fait face le secteur agricoles: <br/>L'education et l'accès à l'information des agriculteurs d'une part  et l'inefficacité de la chaîne de valeur d'une autre part.  Nous resolvons
          ces problemes grace aux nouvelles  technologies et nos applications .<br /><br /> Nous formons les producteurs(petits et moyens agriculteurs) sur plusieurs varietés de cultures, sur l'utilisation des fertilisants, des herbicidess pesticides et differentes pratiques pour une agriculture 
          durable et agroecologique.<br /><br /> Après les récoltes, nous connectons les producteurs agricoles directement aux revendeurs, aux restaurants , aux hotêls et aux transformateurs pour pouvoir écouler leurs produits récoltés à travers plusieurs partenariats. 
          </span>
        </div>
      </div>
    
      <div className=" hidden flex-col items-center mt-10">
        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Foire aux questions</p>
      </div>
     
    <div className="container mx-auto h-[20rem]  hidden   border rounded-lg shadow-md my-10 ">
       
        <ul className="hidden w-ful text-md font-medium indicator text-center text-white divide-x divide-green-800  rounded-lg sm:flex" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li className="w-full">
                <button onClick={() =>toggleTab(1)} id="stats-tab" data-tabs-target="#equipe" type="button" role="tab" aria-controls="equipe" aria-selected={toggleState===1 ? "true":"false"} className={toggleState===1? "inline-block w-full p-4 rounded-tl-lg bg-green-800 hover:bg-green-800":"inline-block w-full p-4 rounded-tl-lg bg-bg_button hover:bg-green-800 "}>Notre Equipe</button>
            </li>
            <li className="w-full">
                <button onClick={() =>toggleTab(2)} id="about-tab" data-tabs-target="#mission" type="button" role="tab" aria-controls="mission" aria-selected={toggleState===2 ? "true":"false"} className={toggleState===2? "inline-block w-full p-4  bg-green-800 hover:bg-green-800":"inline-block w-full p-4  bg-bg_button hover:bg-green-800 "}>Notre Mission</button>
            </li>
            <li className="w-full">
                <button onClick={() =>toggleTab(3)} id="faq-tab" data-tabs-target="#vision" type="button" role="tab" aria-controls="vision" aria-selected={toggleState===3 ? "true":"false"} className={toggleState===3? "inline-block w-full p-4  bg-green-800 hover:bg-green-800":"inline-block w-full p-4  bg-bg_button hover:bg-green-800 "}>Notre Vision</button>
            </li>
            <li className="w-full">
                <button onClick={() =>toggleTab(4)}id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected={toggleState===4 ? "true":"false"} className={toggleState===4? "inline-block w-full p-4 rounded-tr-lg bg-green-800 hover:bg-green-800":"inline-block w-full p-4 rounded-tr-lg bg-bg_button hover:bg-green-800 "}>Nos valeurs</button>
            </li>
            
        </ul>
        <div id="fullWidthTabContent" className="border-t border-gray-200 ">
            <div className={toggleState ===1 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "}  id="equipe" role="tabpanel" aria-labelledby="equipe-tab">
               <h2 className="text-xl font-semibold text-green-800">Jeune et dynamique</h2>
               <p className="text-sm italic text-green-700">"Nous sommes plus fort ensemble"</p>
               <p className="text-medium">Notre équipe est très dynamique et experimentée. Nous travaillons avec  professionalisme
                pour offrir le meilleur des services à nos clients. Nous évoluons dans un environnement d'apprentissage continu, d'ouverture d'esprit, 
                de tolérance et de partage. Nos victoires sont célebrées ensemble et nous encourageons tout un chacun de nous d'agir d'une 
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
            <div className={toggleState ===2 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="mission" role="tabpanel" aria-labelledby="mission-tab">
                <h2 className="text-xl font-semibold text-green-800">Notre Mission</h2>
                <p className="text-sm italic text-green-700">"L'agriculteur est notre première préoccupation"</p>
                <p className="text-medium">Notre mission  est de simplifier le procecessus agricole pour les petits et moyens producteurs de la sémis jusqu'a la vente des produits recoltés. </p>
            </div>
            <div className={toggleState ===3 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="vision" role="tabpanel" aria-labelledby="vision-tab">
                <h2 className="text-xl font-semibold text-green-800">Notre Vision</h2>
                <p className="text-sm italic text-green-700">"Impacter la vie  de millions d'agriculteurs"</p>
                <p className="text-medium">Notre vision est de se positionner comme entreprise de référence, fiable pour les agriculteurs, qui promouvois la transition à une agriculture
                 agroecologique et durable, et qui remedie a l'insecurité alimentaire grace a une chaine de valeur éffeciente</p>
            </div>
            <div className={toggleState ===4 ?" p-4 bg-white rounded-sm md:p-8 ":" hidden p-4 bg-white rounded-sm md:p-8 "} id="faq" role="tabpanel" aria-labelledby="faq-tab">
                 <h2 className="text-xl font-semibold text-green-800"> Nos valeurs</h2>
                <p className="text-sm italic text-green-700">"Nos valeurs nous definissent"</p>
                <p className="text-medium"> Nous cultivons une relation basée sur la confiance et le respect mutuel avec les agriculteurs, les clients et nos partenaires. Nous croyons à l'égalité de chance et d'opportunité pour tous que vous soyez homme, femme ou enfants.
                 Nous encourageons la revolution verte et la pratique d'une agriculture durable et ecologique.  Nous poursuivons l'excellence dans notre domaine et enfin d'offrir une experience fantastique à nos clients . </p>
            </div>
        </div>
    </div>

    <div className="relative flex  flex-col justify-start overflow-hidden bg-gray-50 py-10">
  <div className="relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Foire aux questions</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer bg-bg_button p-3 rounded-sm list-none  items-center justify-between font-medium">
              <span className="text-white"> Notre Equipe</span>
              <span className="text-white transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
               <p className="text-sm italic text-green-700">"Nous sommes plus fort ensemble"</p>
               <p className="text-medium">Notre équipe est très dynamique et experimentée. Nous travaillons avec  professionalisme
                pour offrir le meilleur des services à nos clients. Nous évoluons dans un environnement d'apprentissage continu, d'ouverture d'esprit, 
                de tolérance et de partage. Nos victoires sont célebrées ensemble et nous encourageons tout un chacun de nous d'agir d'une 
                manière responsable  </p>
            </div>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer bg-bg_button p-3 rounded-sm list-none items-center justify-between font-medium">
              <span className="text-white">Notre Mission</span>
              <span className="text-white transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
                <p className="text-sm italic text-green-700">"L'agriculteur est notre première préoccupation"</p>
                <p className="text-medium">Notre mission  est de simplifier le procecessus agricole pour les petits et moyens producteurs de la sémis jusqu'a la vente des produits recoltés. </p>
            </div>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer bg-bg_button p-3 rounded-sm list-none items-center justify-between font-medium">
              <span className="text-white">Notre Vision</span>
              <span className="text-white transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
                <p className="text-sm italic text-green-700">"Impacter la vie  de millions d'agriculteurs"</p>
                <p className="text-medium">Notre vision est de se positionner comme entreprise de référence, fiable pour les agriculteurs, qui promouvois la transition à une agriculture
                 agroecologique et durable, et qui remedie a l'insecurité alimentaire grace a une chaine de valeur éffeciente</p>
            </div>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer bg-bg_button p-3 rounded-sm list-none items-center justify-between font-medium">
              <span className="text-white">Nos valeurs</span>
              <span className="text-white transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
               <p className="text-sm italic text-green-700">"Nos valeurs nous definissent"</p>
                <p className="text-medium"> Nous cultivons une relation basée sur la confiance et le respect mutuel avec les agriculteurs, les clients et nos partenaires. Nous croyons à l'égalité de chance et d'opportunité pour tous que vous soyez homme, femme ou enfants.
                 Nous encourageons la revolution verte et la pratique d'une agriculture durable et ecologique.  Nous poursuivons l'excellence dans notre domaine et enfin d'offrir une experience fantastique à nos clients . </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="w-full bg-green-100 flex items-center justify-center py-5">

       <div className="container mx-auto py-5 flex flex-col md:flex-row justify-center">
          <Image className="flex justify-center md:hidden " src={imgPart} alt=" agriculteur"/>
          <div className="bg-[#ffdb0f] shadow-md rounded-b-lg flex flex-col p-5 leading-normal md:w-auto ">
            <h5 className="text-xl font-bold tracking-tight py-2  text-gray-900 ">{title}</h5>
            <p className=" text-gray-700 leading-normal py-2">{msg}<br/></p>
            <p className=" text-gray-800 font-semibold leading-normal py-2">{imp}<br/>{imp1}<br/>{imp2}<br/>{imp3}<br/>{imp4}<br/>{imp5}</p>
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