import Image from 'next/image';
import {service} from '../lib/data';
function Services() {
    const {title,image, image2} = service
  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
        <h2 className="text-primary_color text-2xl md:text-4xl font-bold 
        flex items-center justify-center  md:pt-10">{title}</h2>
        <Image width="auto" height="auto" alt="services" src={image} priority className="hidden md:flex  text-center justify-center my-10" />
        <Image width="auto" height="auto" alt="services" src={image2} priority className="flex  text-center justify-center md:hidden my-10" />
    </div>
  )
}

export default Services