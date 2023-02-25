import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from '../components/welcome';
import Navbar from '../components/Navbar';
 import {Hero} from '../components/Hero';
import {Herow} from '../components/Hero2';
import Clients from '../components/Clients';
import Offre from '../components/Offre';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Impacts from '../components/Impacts';
import Partenaires from '../components/Partenaires';
import Slides from '../components/Slides';


export default function Home() {
  return (
   <>
   
    {/* <Hero/>
    <Herow/>
    <SlideHero/> */}
    <Slides/>
   <Services />
   <Offre/>
   <Clients />
   <Impacts />
   <Partenaires />
   </>
  )
  AOS.init();
}
