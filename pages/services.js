import React from 'react';
import { serviceDetails, serviceProb } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';

const services = () => {
  return (
    <div>
      <div className=" relative md:h-[38rem]">
        <div priority className="h-[60vw] flex items-center   md:h-full bg-heroServ priority bg-cover duration-700 ease-in-out" >
          <span className=" text-white bg-gray-800  p-3 bg-opacity-30 mx-auto rounded-md text-3xl md:text-5xl font-bold flex self-center text-center justify-center ">Nos Services</span>
        </div>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight container mx-auto  mt-10">Le Problème</h5>
      <div className="flex flex-col md:flex-row items-center justify-center  ">

        <div className=" max-h-[40rem] overflow-scroll scrollbar-hide bg-[rgb(0,0,0)] border border-gray-200 rounded-lg shadow-md my-5 mx-12">

          <div className="p-5">

            <div className="flex flex-col lg:flex-row md:gap-5">
              {serviceProb.map((item, index) => {
                const { imgProb, msg } = item
                return (
                  <div key={index} className="flex flex-col justify-content  bg-white m-2 p-4 w-[210px]">
                    <div className="flex items-center justify-center">
                      <Image className="w-20 h-20" width="" height="" alt="" src={imgProb} />
                    </div>
                    <p className="mb-3 font-bold text-gray-800 py-2">{msg}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

      </div>

      <div className="w-full  bg-green-100 my-12">
        <h5 className="my-2 py-5 text-2xl   container mx-auto font-bold tracking-tight text-green-400">Notre Solution</h5>
        {serviceDetails.map((item, index) => {
          const { imgService, title, msg,lien } = item
          return (
            <div key={index} className="container mx-auto py-5 flex flex-col  md:flex-row justify-center">

              <div className="md:w-full p-6 bg-[#23ac16db] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div clasName="flex justify-between">
                  < Image className="hidden md:flex px-5 " width="100" height="100" src={imgService} alt=" agriculteur" />
                  <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</div>
                </div>

                <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">{msg}</p>
                <Link href={lien} className="inline-flex items-center text-slate-300 hover:underline">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </Link>
              </div>

            </div>
          )

        })}

      </div>

    </div>
  )
}

export default services