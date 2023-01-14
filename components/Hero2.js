import React from 'react';
import Image from 'next/image';
import {hero} from '../pages/data';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export function Hero2() {

    return (

        <>
          <Slider autoplay={3000}>
              {hero.map((item, index) =>(
                <div key={index}
                     style={{background:`url('${item.bgHero}') no-repeat center center`} }>
                        <div className="center">
                            <h1>{item.title1}<br/>{item.title2} <br/>{item.title3}</h1>
                            
                        </div>
                     </div>           
              ))}
          </Slider>
        </>    
          )
}