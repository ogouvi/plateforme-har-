
import React,{useRef, useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {acheteur} from '../lib/data';
import { fs } from '../lib/firebase';
import { setDoc,doc,addDoc, collection,Timestamp } from 'firebase/firestore';

function Acheteur() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();
  const [success, setSuccess] = useState();
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
   
    await addDoc(collection(fs,"InfosAcheteurs"),{
      Nom:nameRef.current.value,
      Email:emailRef.current.value,
      Numero:numberRef.current.value,
      Addresse:addressRef.current.value,
      Message:messageRef.current.value,
      Date: Timestamp.fromDate(new Date()),
    }).then(()=>{
        alert(' Vos informations sont bien enregistrées avec succes, merci!')
        router.push('/')
    })
    .catch(err=>{
        setError("enregistrement echoue");
        console.log(err.message);
    })
  }
  const {heroAchat, icon} = acheteur;
  return (
    <div>
         <div class=" relative overflow-hidden md:h-[38rem]">
      <div className=" relative ">
      <div class="relative overflow-hidden  w-full flex flex-row justify-center  mx-auto items-center ">
  {/*<!-- Item -->*/}
                   <div  className=" h-[30vh] md:h-[38rem] overflow-hidden z-[-1]" data-carousel-item>
                      <Image priority alt="Mountains" src="/assets/images/slider-02.webp"  quality={100} fill sizes="100vw" style={{objectFit: 'cover' }}/>
                   </div>
                      <div className=" bg-gray-800 bg-opacity-30 text-center py-2 items-center mx-auto justify-center">
                  <span className="container mx-auto text-white  text-lg md:text-4xl font-bold ">Je veux acheter des produits agricole </span>
                  </div>
                 
                  
     </div>
      </div>
      </div>

      <div className="bg-bg_client md:h-[35rem] flex items-center justify-center py-10">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white text-base md:text-xl font-semibold "> Haré.com est une plateforme de confiance qui vous offre des produits
            agricoles de qualité a un prix très transparent et vous fait livrer
            votre produit selon votre planning.
            <br /><br />
            Que vous soyez un revendeur, un hôtel, un restaurant,
            un transformateur, ou encore un exportateur accédez aux produits de qualité traçable et
            ayez un stock regulier. Pour tout achat de produits agricoles, Vous pouver compter sur Haré Agrisolutions pour
            un service de qualité, un approvisionnement garantis et plus d'économie par achat.
            <br /><br />
            Faites nous confiance pour tous vos besoin en produits agricoles 
          </span>
        </div>
      </div>
      <div className="container mx-auto py-5 ">

      <h2 className="text-primary_color  text-lg md:text-2xl font-bold flex  text-center justify-center pt-12">Visitez notre site ecommerce ou <br/> Téléchargez notre application <br/>pour éffectuer vos achats depuis votre téléphone </h2>
        <div className="bg-gray-100 max-w-[740px] mx-auto flex flex-col justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <Image width="200" height="100" src={icon} alt="laptop icon" className="py-5 mx-auto"/>

          <div class="w-full p-4 text-center bg-[#CEEFD9] border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white"> Déja Disponible</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Vous pouvez acheter tous produits agricoles partout oû vous êtes grâce à nos applications isponible sur android, iphone et le web.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
 
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" id="baseline-language-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_330" data-name="Path 330" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_331" data-name="Path 331" d="M11.99,2A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2Zm6.93,6H15.97a15.649,15.649,0,0,0-1.38-3.56A8.03,8.03,0,0,1,18.92,8ZM12,4.04A14.087,14.087,0,0,1,13.91,8H10.09A14.087,14.087,0,0,1,12,4.04ZM4.26,14a7.822,7.822,0,0,1,0-4H7.64a16.515,16.515,0,0,0-.14,2,16.515,16.515,0,0,0,.14,2Zm.82,2H8.03a15.649,15.649,0,0,0,1.38,3.56A7.987,7.987,0,0,1,5.08,16ZM8.03,8H5.08A7.987,7.987,0,0,1,9.41,4.44,15.649,15.649,0,0,0,8.03,8ZM12,19.96A14.087,14.087,0,0,1,10.09,16h3.82A14.087,14.087,0,0,1,12,19.96ZM14.34,14H9.66a14.713,14.713,0,0,1-.16-2,14.585,14.585,0,0,1,.16-2h4.68a14.585,14.585,0,0,1,.16,2A14.713,14.713,0,0,1,14.34,14Zm.25,5.56A15.649,15.649,0,0,0,15.97,16h2.95A8.03,8.03,0,0,1,14.59,19.56ZM16.36,14a16.515,16.515,0,0,0,.14-2,16.515,16.515,0,0,0-.14-2h3.38a7.822,7.822,0,0,1,0,4Z" fill="#fff"/>
</svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Visitez le site  </div>
                    <div class="-mt-1 font-sans text-sm font-semibold">www.marche-hare.com</div>
                </div>
            </a>
        </div>
    </div>
        </div>

        <h2 className="text-primary_color text-lg md:text-2xl font-bold flex items-center justify-center pt-16">Enregistrez vous pour beneficier de plus<br />de services persononalisés</h2>


        <div className="bg-gray-100 max-w-[740px] mx-auto flex justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <form className="w-[460px]" onSubmit={handleSubmit}>
          {error &&<div className="bg-red-500 block text-gray-50 w-full p-2.5 my-1 ">{error}</div>}
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nom et Prénoms</label>
              <input type="text" ref={nameRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mr/Mm.  Nom et Prenoms" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Mon Email</label>
              <input type="email" ref={emailRef}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email " required />
            </div>
            <div class="mb-6">
              <label for="phone" class="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Mon Numero de téléphone</label>
              <input type="number" ref={numberRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+228 xx xx xx xx" required />
            </div>
            <div class="mb-6">
              <label for="address" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Mon addresse</label>
              <input type="address" ref={addressRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quartier-Ville/village" required />
            </div>
            <div class="mb-6">
              <label for="textarea" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Quels produits achetez-vous?</label>
              <textarea type="text" ref={messageRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
           
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">J'accepte les <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">termes et les conditions</a></label>
            </div>
            <button type="submit" class="text-white bg-primary_color hover:bg-bg_butto focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregistrez-Vous</button>
          </form>

        </div>
  
      </div>

    </div>
  )
}

export default Acheteur