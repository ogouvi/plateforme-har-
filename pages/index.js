import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from '../components/welcome';
import Navbar from '../components/Navbar';
import {Hero, Hero2} from '../components/Hero';
import Clients from '../components/Clients';
import Offre from '../components/Offre';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Impacts from '../components/Impacts';
import Partenaires from '../components/Partenaires';

export default function Home() {
  return (
   <>
   
   <Hero/>
   <Services />
   <Offre/>
   <Clients />
   <Impacts />
   <Partenaires />
   
   </>
  )
  AOS.init();
}
