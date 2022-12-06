import React from 'react';
import {serviceDetails, serviceProb} from './data';
import Image from 'next/image';

const services = () => {
  return (
    <div>
         <div class=" relative md:h-[38rem]">
            <div class="md:h-full bg-[url('../public/assets/images/pexels-mark-stebnicki-2749165.jpg')] bg-cover duration-700 ease-in-out" >
              <span className=" text-white text-3xl md:text-5xl font-bold flex self-center text-center justify-center py-[12rem]">Nos Services</span>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center justify-center py-10 ">
            <div class=" max-h-[40rem] overflow-scroll bg-[rgb(0,0,0)] border border-gray-200 rounded-lg shadow-md mt-12 mx-12">
    
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Le Problème</h5>
              <div class="flex flex-col md:flex-row">
              {serviceProb.map((item, index) => {
                    const {imgProb,msg} = item
                    return (
                        <div key={index} class="flex flex-col justify-content flex-wrap bg-white m-2 p-4 w-[210px]">
                    <div class="flex items-center justify-center">
                       <Image class="w-20 h-20" width="" height="" alt="" src={imgProb} />
                    </div> 
                   <p class="mb-3 font-bold text-gray-800 py-2">{msg}</p>
                </div>
                    )
                })}
              </div>
                
            
          
            </div>
     </div>

     {/*div class="max-w-sm max-h-[40rem] bg-[#3CB65D] border border-gray-200 rounded-lg shadow-md mt-12 mx-12 ">
     
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Notre Solution</h5>
              <div>
                <p class="mb-3 font-semibold text-white"> 1*) Listez facilement votre produit et vendez en un seul click.</p>
             </div>
          
        </div>
            </div>*/}

     </div>


      <div className="w-full  bg-green-100 my-12">
      <h5 class="my-2 py-5 text-2xl   container mx-auto font-bold tracking-tight text-green-400">Notre Solution</h5>
        {serviceDetails.map((item, index)=>{
            const {imgService, title, msg} = item
            return (
                <div key={index} class="container mx-auto py-5 flex flex-col md:flex-row justify-center">
                      
                  <Image class="hidden md:flex px-5 "width="200" height="100" src={imgService} alt=" agriculteur"/>
                  <div class="bg-[#618d0a]  flex flex-col p-5 leading-normal md:w-[550px]">
                  <div class="md:hidden flex items-center justify-center pb-6">
                  <Image width="150" height="100" src={imgService} className="w-20 h-20" alt=" agriculteur"/>
                  </div>
                    <h5 class=" w-auto font-bold tracking-tightv py-2  text-gray-900 ">{title}</h5>
                    <p class=" text-white leading-normal py-2">{msg}</p>
                </div>
                </div>
            )
                
            })}
          
       
    
    </div>

    </div>
  )
}

export default services