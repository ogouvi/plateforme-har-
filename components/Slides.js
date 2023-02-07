
 import React from 'react';
 import Image from 'next/image';
 import hero2 from "../public/assets/images/banner.webp";
 import hero3 from "../public/assets/images/pexels-flambo-1112080.webp";
 import hero1 from "../public/assets/images/june.webp";

 import Slider from 'react-animated-slider';
 import 'react-animated-slider/build/horizontal.css';

const Slides = () => {
    const slides = [
        
 {title1:"Plateforme Complète pour accompagner",
  title2:"les agriculteurs et",
  title3:"les acteurs du domaine agricole",
  color:"#63A04E",
  bgHero: hero1},
   

  {title1:"Ayez access aux intrants, equipements ",
  title2:" et aux mains d'oeuvre",
  title3:" le plus rapidement possible",
  color:"#432A16",
  bgHero: hero2},
  

  {title1:"Votre processus agricole rendu plus facile pour vous",
  title2:"grace au financement et",
  title3:"aux appius techniques",
  color:"#1AB24B",
  bgHero: hero3
  }
      ]
  return (
    <div>Slides
        <Slider autoplay={2000}>
  {slides.map((item, index) => 
  (
    <div
			key={index}
    
			// style={{ background: item.color}}
            style={{ backgroundImage: `url(${item.bgHero})`}} 
		>
			<div className=" container mx-auto my-auto items-center justify-center">
				<div className=" text-white bg-gray-800  p-3 bg-opacity-30  rounded-md md:text-4xl font-bold flex self-center text-center justify-center mx-auto ">
                <h1>{item.title1}
				<br/>{item.title2}<br/>{item.title3}</h1>
				<button>{item.button}</button></div>
			</div>
		</div>
  )
  )}
</Slider>
    </div>
  )
}

export default Slides