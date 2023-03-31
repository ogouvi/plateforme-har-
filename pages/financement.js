import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Harefin = () => {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex pt-16 md:pt-28 items-center justify-center flex-col">
    <div className="py-8 text-3xl md:text-5xl font-extrabold"><span>Haré</span><span className="text-orange-400">Finance</span></div>
    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/assets/images/fintech.jpg" width="300" height="300"/>
    <div className="text-center">
      <h1 className="title-font py-2 sm:text-3xl text-xl mb-2 font-bold text-blue-600">Rendre les services financiers abordables et accessibles aux ménages ruraux </h1>
      <p className="mb-2 leading-relaxed">HaréFinance est un service qui propose des micro financement aux petits et moyens producteurs agricoles et aussi aux commerçants. Ce service va impacter la population nécessiteuse grace aux crédit aux niveaux individuel et communautaire afin de 
      créer une amélioration durable de leur moyen de subsistance et de leur niveau de vie engendrand la prospérité</p>
      
    </div>

    <div className="text-center">
      <h1 className="title-font py-2 sm:text-3xl text-xl mb-2 font-bold text-blue-600">Notre avantage</h1>
      <p className="mb-2 leading-relaxed">La stratégie de HaréFinance est centrée sur sa solution digital qui est hyperlocale et hyperflexible adapté
      pour les besoin de la population rurale. La technologie, fondamental à chaque étape des opérations permet une approche sans papier, sans présence et sans espèces
      </p>
      
    </div>
    
    <div className="text-start">
      <h1 className="title-font py-2 sm:text-3xl text-xl mb-5 font-bold text-blue-600">Ayez accès aux capitaux facilement en <b>5 étapes</b></h1>
      <div className="my-2 leading-relaxed">
        <p className="mb-3"><span className="bg-gray-700 text-white py-1 px-3 rounded-full mr-2">1</span> Faites une demande en ligne ou dans notre bureau<br/></p>        
       <p className="mb-3"> <span className="bg-gray-700 text-white py-1 px-3 rounded-full mr-2 ">2</span> Evaluation de votre profil<br/></p> 
       <p className="mb-3"> <span className="bg-gray-700 text-white py-1 px-3 rounded-full mr-2 ">3</span> Prévisions et etude de vos états financiers<br/></p> 
       <p className="mb-3"> <span className="bg-gray-700 text-white py-1 px-3 rounded-full mr-2 ">4</span> Visite du site ou de terrain<br/></p> 
       <p className="mb-3"> <span className="bg-gray-700 text-white py-1 px-3 rounded-full mr-2 ">5</span> Etablissement du contrat et financement<br/></p> 

      </div>
      
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
                <p class="text-lg font-semibold leading-relaxed text-gray-800 dark:text-gray-400">
                  Avez-vous besoin de capitaux pour créer ou dévéloper votre projet agricole
                </p>
                <p class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  HaréFinance vous offre des financements pour votre projet agricole, sans garantie foncière et pas besoin dossiers complexes.
                  Vous pouvez reçevoir une reponse en moins de <b>48h</b> après votre demande. La durée du remboursement étant flexible, vous pouvez payer
                  après les récoltes.
                </p>
            </div>
           
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
<button data-modal-hide="ModalOne" type="button" onClick={() => setShowModalOne(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<Link href="http://forms.gle/x1uYf2pJVaRtoMSP9"  >
  Faire une demande
  </Link>
  </button>
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
                <p class="text-lg font-semibold leading-relaxed text-gray-800 dark:text-gray-400">
                  Avez-vous besoin de produits agro-alimentaires à crédit
                </p>
                <p class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  HaréFinance vous offre du stock de produits agro-alimentaires a crédits pour couvrir vos besoin et générer du reveneue
                  Vous pouvez reçevoir une reponse en moins de <b>48h</b> après votre demande. Vous pouvez rembourser le crédit par echolon
                  selon le montant du crédit.
                </p>
            </div>
            
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" onClick={() => setShowModalTwo(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Link href="http://forms.gle/hmSUxfPSVphntKCj9/">
                    Faire une demande
                   </Link>
                    </button>
                
                <button data-modal-hide="defaultModal" type="button" onClick={() => setShowModalTwo(false)} class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decliner</button>
            </div>
        </div>
    </div>
</div>):null}
  </div>
</div>
</div>

</section>
<section>
  
</section>
    </div>
  )
}

export default Harefin