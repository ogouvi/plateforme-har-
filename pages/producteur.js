
import React,{useRef, useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {vendeur} from '../lib/data';
import { Timestamp ,addDoc, collection } from 'firebase/firestore';
import { fs } from '../lib/firebase';

function Acheteur() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')

  const router =useRouter();

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    await addDoc(collection(fs,"InfosProducteurs"),{
      Nom:nameRef.current.value,
      Email:emailRef.current.value,
      Numero:numberRef.current.value,
      Addresse:addressRef.current.value,
      Message:messageRef.current.value,
     // Date: Timestamp.fromDate(new Date(getDate())),
    }).then(()=>{
        alert(' Vos informations sont bien enregistrées avec succes, merci!')
        router.push('/')
    })
    .catch(err=>{
        setError(err.message);
    })
  }

  const {heroVente, icon} = vendeur;
  return (
    <div>
      <div class=" relative overflow-hidden md:h-[38rem]">
      <div className=" relative ">
      <div class="relative overflow-hidden  w-full flex flex-row justify-center  mx-auto items-center ">
  {/*<!-- Item -->*/}
                   <div  className=" h-[30vh] md:h-[38rem] overflow-hidden z-[-1]" data-carousel-item>
                      <Image priority alt="Mountains" src="/assets/images/pexels-maarten-van-den-heuvel-2284170.webp"  quality={100} fill sizes="100vw" style={{objectFit: 'cover' }}/>
                   </div>
                      <div className=" bg-gray-800 bg-opacity-30 text-center py-2 items-center mx-auto justify-center">
                  <span className="container mx-auto text-white  text-lg md:text-4xl font-bold ">Je suis producteur et vendeur de produits agricole </span>
                  </div>
                 
                  
     </div>
      </div>
      </div>

      <div className="bg-bg_client md:h-[35rem] flex items-center justify-center">
        <div className=" container flex bg-green-500 bg-opacity-10 md:w-[960px] py-5 ">
          <span className=" text-white  md:text-xl font-semibold "> Haré.com est une plateforme complete qui vous accompagne dans votre production agricole et vous permet de vendre vos
            produits recoltes à un prix tres juste et  transparant .<br /><br />Que vous soyez un petit producteur ou une cooperative,
            maximisez votre revenu en accedant à un large marché. Pour une meilleure réalisation nous vous assistons dans vos décisions en vous informant sur les prix du marché, les standards des produits demandés sur le marché
            et des paiements garantis sur achat.
          </span>
        </div>
      </div>
      <div className="container mx-auto py-5 ">

      <h2 className="text-primary_color  text-xl md:text-2xl font-bold flex  text-center justify-center mt-12">Visitez notre plateforme ou <br/> Téléchargez notre application pour recevoir des formations et information sur votre téléphone</h2>
        <div className="bg-gray-100 max-w-[740px] mx-auto flex flex-col justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <Image priority width="200" height="100" src={icon} alt="laptop icon" className="py-5 mx-auto"/>

          <div class="w-full p-4 text-center bg-[#CEEFD9] border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Bientôt Disponible</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Vous pouvez recevoir des formations, des informations et appuis techniques partout oû vous êtes grâce à nos applications. 
        Enregistrez-vous pour être notifier dès la sorties de nos applications.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" class="w-full sm:w-auto bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <div class="text-left">
                    <div class="mb-1 text-xs">Visitez le site</div>
                    <div class="-mt-1 font-sans text-sm font-semibold">plateforme.hare.com</div>
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

        <h2 className="text-primary_color text-xl md:text-2xl font-bold flex text-center justify-center mx-5 ">Enregistrez vous pour beneficier de plus de services persononalisés</h2>


        <div className="bg-gray-100 max-w-[740px] mx-auto flex justify-center self-center px-5 py-10 my-10 border rounded-xl shadow-md shadow-gray-300   ">
          <form className="w-[460px]" onSubmit={handleSubmit}>
          {error &&<div className="bg-red-400 block text-gray-50 w-full p-2.5 my-1 ">{error}</div>}
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nom et Prénoms</label>
              <input type="text" ref={nameRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mr/Mm.  Nom et Prenoms" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Email</label>
              <input type="email" ref={emailRef}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email "  />
            </div>
            <div class="mb-6">
              <label for="phone" class="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Numero de téléphone(Whatsapp)</label>
              <input type="number" ref={numberRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+228 " required />
            </div>
            <div class="mb-6">
              <label for="address" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Addresse</label>
              <input type="address" ref={addressRef} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quartier-Ville/village" required />
            </div>
            <div class="mb-6">
              <label for="textarea" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Quels produits cultivez-vous?</label>
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