import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Harefin = () => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-28 items-center justify-center flex-col">
    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/../public/assets/images/fintech.jpg" width="300" height="300"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font py-2 sm:text-4xl text-3xl mb-4 font-bold text-blue-600">Bienvenue dans le monde des possibilités</h1>
      <p className="mb-8 leading-relaxed">HareFinance est un programmme qui vous facilite le pro</p>
    </div>
  </div>
</section>
<section>
<div className="flex flex-col md:flex-row container mx-auto justify-center my-20 gap-5">
<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-blue-300 max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-semibold mb-2">Credit CashPresaison</h5>
    <p className="text-gray-700 text-base mb-4">
      Faites une demande et obtenez du credit pour le financement de votre projet Agricole ou d'achat d'equipements
    </p>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
</div>
<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-orange-300 max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-semibold mb-2">Credit CashExpress</h5>
    <p className="text-gray-700 text-base mb-4">
     Faites une demande et obtenez du credit pour developper votre buisiness de commercialisation de produit agro-alimentaire
    </p>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
</div>
</div>

</section>
    </div>
  )
}

export default Harefin