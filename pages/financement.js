import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Harefin = () => {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-28 items-center justify-center flex-col">
    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/assets/images/fintech.jpg" width="300" height="300"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font py-2 sm:text-3xl text-xl mb-4 font-bold text-blue-600">Bienvenue dans le monde des possibilités</h1>
      <p className="mb-8 leading-relaxed">HareFinance est un programmme qui vous facilite le pro</p>
    </div>
  </div>
</section>
<section>
<div className="flex flex-col md:flex-row container mx-auto justify-center my-20 gap-5">
<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-blue-300 max-w-sm">
    <h5 className="text-gray-900 text-lg leading-tight font-semibold mb-2">Credit CashPresaison</h5>
    <p className="text-gray-700 text-base mb-4">
      Faites une demande et obtenez du credit pour le financement de votre projet Agricole ou d'achat d'equipements
    </p>
    <button type="button" onClick={() => setShowModalOne(true)} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
    
    {showModalOne ? (  <div id="ModalOne" tabindex="-1" aria-hidden="true" class="container mx-auto flex justify-center fixed top-16 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
       
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Haré CashPrésaison
                </h3>
                <button type="button" onClick={() => setShowModalOne(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
           
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="ModalOne" type="button" onClick={() => setShowModalOne(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Faire une demande</button>
                <button data-modal-hide="ModalOne" type="button" onClick={() => setShowModalOne(false)} class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decliner</button>
            </div>
        </div>
    </div>
</div>): null}
  </div>
</div>



<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-orange-300 max-w-sm">
    <h5 className="text-gray-900 text-lg leading-tight font-semibold mb-2">Credit CashExpress</h5>
    <p className="text-gray-700 text-base mb-4">
     Faites une demande et obtenez du credit pour developper votre buisiness de commercialisation de produit agro-alimentaire
    </p>
    <button type="button" onClick={() => setShowModalTwo(true)} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
    
    {showModalTwo ? (<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-24 left-0 right-0 z-50 container mx-auto flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
    
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                   Haré CashExpress
                </h3>
                <button type="button" onClick={() => setShowModalTwo(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
           
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" onClick={() => setShowModalTwo(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Faire une demande</button>
                <button data-modal-hide="defaultModal" type="button" onClick={() => setShowModalTwo(false)} class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decliner</button>
            </div>
        </div>
    </div>
</div>):null}
  </div>
</div>
</div>

</section>
    </div>
  )
}

export default Harefin