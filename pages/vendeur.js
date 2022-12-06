import React from 'react'
import Image from 'next/image';
import {vendeur} from './data';

function Acheteur() {
  const {heroVente, icon} = vendeur;
  return (
    <div>
      <div class=" relative overflow-hidden md:h-[38rem]">
        {/*<!-- Item 5 -->*/}
        <div class="md:h-full bg-[url('../public/assets/images/agri-product-banner.jpg')] bg-cover duration-700 ease-in-out" data-carousel-item>
          {/**<img src="/platefore-hare.com/assets/images/agri-products-fresh-veg.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
          <span className=" text-white text-3xl md:text-5xl font-bold flex self-center text-center justify-center py-[12rem] ">Je suis Vendeur de produits <br /> Agricoles </span>
        </div>
      </div>

      <div className="bg-bg_client md:h-[35rem] flex items-center justify-center">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white text-xl md:text-4xl font-semibold "> Haré.com est une plateforme complete qui vous accompagne dans votre production agricole et vous permet de vendre vos
            produits recoltes a un prix tres juste et  transparant .<br /><br />Que vous soyez un petit producteur ou une cooperative,
            maximisez votre revenu en accedant un large marché. Vous pouver compter sur Haré.com pour un service de qualité.
          </span>
        </div>
      </div>
      <div className="container mx-auto py-5 ">

      <h2 className="text-primary_color  text-2xl md:text-4xl font-bold flex  text-center justify-center pt-12">Visitez notre site ecommerce ou <br/> Telechargez notre application <br/>pour effectuer vos achats </h2>
        <div className="bg-gray-100 max-w-[740px] mx-auto flex flex-col justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <Image width="200" height="100" src={icon} alt="laptop icon" className="py-5 mx-auto"/>

          <div class="w-full p-4 text-center bg-[#CEEFD9] border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Bientot Disponible</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Vous pouvez acheter tous produits agricoles partout ou vous etes grace a nos applications. 
        Enregistrez-vous pour etre notifier a la soties des applications.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Visitez le site</div>
                    <div class="-mt-1 font-sans text-sm font-semibold">www.marché-haré.com</div>
                </div>
            </a>
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-left">
                    <div class="mb-1 text-xs">Telecharger sur </div>
                    <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                </div>
            </a>
          
        </div>
    </div>
        </div>

        <h2 className="text-primary_color text-2xl md:text-4xl font-bold flex items-center justify-center pt-16">Enregistrez vous pour beneficier de plus<br />de services persononalisés</h2>


        <div className="bg-gray-100 max-w-[740px] mx-auto flex justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <form className="w-[460px]">
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Mon Nom et Prenoms</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mr. Nom et Prenoms" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Mon Addresse</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Addresse " required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Mon Numero de telephone</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+228 xx xx xx xx" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Mon addresse Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email@gmail.com" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Choisissez un mot de passe</label>
              <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-6">
              <label for="repeat-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Confirmer mot de passe</label>
              <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">J'accepte les <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">termes et les conditions</a></label>
            </div>
            <button type="submit" class="text-white bg-primary_color hover:bg-bg_butto focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Creer mon compte</button>
          </form>

        </div>
  
      </div>

    </div>
  )
}

export default Acheteur