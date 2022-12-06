import Image from 'next/image';
import {service} from '../pages/data';
function Services() {
    const {title,image, image2} = service
  return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-primary_color text-2xl md:text-4xl font-bold 
        flex items-center justify-center  md:pt-10">{title}</h2>
        <Image width="" height="" alt="services" src={image} className="hidden md:flex  text-center justify-center" />
        <Image width="" height="" alt="services" src={image2} className="flex  text-center justify-center md:hidden" />
    </div>
  )
}

export default Services