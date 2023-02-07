
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
        {/*<!-- Item 5 -->*/}
        <div class="h-[60vw] flex items-center w-screen md:h-full bg-heroAchat bg-cover duration-700 ease-in-out" priority data-carousel-item>
          {/**<img src="/platefore-hare.com/assets/images/agri-products-fresh-veg.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
          <span className=" text-white bg-gray-800  p-3 bg-opacity-30 mx-auto rounded-md text-xl md:text-3xl font-bold flex self-center text-center justify-center  ">Je suis acheteur de produits <br /> Agricoles </span>
        </div>
      </div>

      <div className="bg-bg_client md:h-[35rem] flex items-center justify-center py-10">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white text-base md:text-xl font-semibold "> Haré.com est une plateforme de confiance qui vous offre des produits
            agricoles de qualité a un prix très transparent et vous fait livrer
            votre produit selon votre planning.
            <br /><br />
            Que vous soyez un revendeur, un hôtel, un restaurant,
            un transformateur, ou encore un exportateur accédez aux prdoduits de qualité traçable et
            ayez un stock regulier. Pour tout achat de produits agricoles, Vous pouver compter sur Haré.com pour
            un service de qualité, un approvisionnement garantis et plus d'économie par achat.
          </span>
        </div>
      </div>
      <div className="container mx-auto py-5 ">

      <h2 className="text-primary_color  text-2xl md:text-4xl font-bold flex  text-center justify-center pt-12">Visitez notre site ecommerce ou <br/> Téléchargez notre application <br/>pour éffectuer vos achats depuis votre téléphone </h2>
        <div className="bg-gray-100 max-w-[740px] mx-auto flex flex-col justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <Image width="200" height="100" src={icon} alt="laptop icon" className="py-5 mx-auto"/>

          <div class="w-full p-4 text-center bg-[#CEEFD9] border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Bientôt Disponible</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Vous pouvez acheter tous produits agricoles partout oû vous êtes grâce à nos applications. 
        Enregistrez-vous pour etre notifier à la soties de nos applications.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Disponible sur</div>
                    <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                </div>
            </a>
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Télécharger sur </div>
                    <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                </div>
            </a>
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Visitez le site  </div>
                    <div class="-mt-1 font-sans text-sm font-semibold">www.marché-haré.com</div>
                </div>
            </a>
        </div>
    </div>
        </div>

        <h2 className="text-primary_color text-2xl md:text-4xl font-bold flex items-center justify-center pt-16">Enregistrez vous pour beneficier de plus<br />de services persononalisés</h2>


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