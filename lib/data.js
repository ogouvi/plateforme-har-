import LogoImg from '../public/assets/icons/hare-web-icon.png';
import Hero2 from "../public/assets/images/banner.jpg";
import Hero3 from "../public/assets/images/pexels-flambo-1112080.jpg";
import Hero1 from "../public/assets/images/tractor-june252020.jpg";
import iconFoot from '../public/assets/icons/logo-custom3-round-wbg.png';
import ImageClient2 from '../public/assets/images/EIT-image-696x392.jpg';
import ImageClient from '../public/assets/images/agri-products-fresh-veg.jpg';
import ImageOffre from'../public/assets/images/banner.jpg';
import ImgServices from '../public/assets/images/nos-services.png';
import ImgServices2 from '../public/assets/images/nos-services2.png';
import vendImg from '../public/assets/images/agri-product-banner.jpg';
import achatImg from '../public/assets/images/pexels-pixabay-221369.jpg';
import iconLapTop from '../public/assets/images/laptop-vector-icon-24.png';
import imgDiff from '../public/assets/images/apropos.png';
import impInc from '../public/assets/icons/4412949.png';
import impLosss from '../public/assets/icons/5931583.png';
import impJobs from '../public/assets/icons/png-clipart-computer-icons-technician-laborer-others-miscellaneous-hat.png';
import impSec from '../public/assets/icons/pngwing.com.png';
import impEco from '../public/assets/icons/png-clipart-sustainability-computer-icons-environmentally-friendly-sustainable-agriculture-symbol-aluminum-miscellaneous-text.png';

import probImage1 from '../public/assets/icons/low revenu.png';
import probImage2 from '../public/assets/icons/avoid-direct-contact-2235177-1860616.png';
import probImage3 from '../public/assets/icons/icons8-windows-defragmenter-50.png';
import probImage4 from '../public/assets/icons/5874360.png';
import probImage5 from '../public/assets/icons/harvest.png';

import servImage1 from '../public/assets/icons/PngItem_5965836.png';
import servImage2 from '../public/assets/icons/icône-transparente-de-récolte-conception-symbole-d-agriculture-130317870.jpg';
import servImage3 from '../public/assets/icons/4412949.png';
import servImage4 from '../public/assets/icons/truck-2007.png';
import servImage5 from '../public/assets/icons/3852646-200.png';
import servImage6 from '../public/assets/icons/4187236.png';
import Ul from '../public/assets/icons/LOGO COULEUR TRANSP_0.png';
import Mifa from '../public/assets/icons/index.png';
import Pia from '../public/assets/icons/Logo-PIA_Logo-RS.png';
import Togocom from '../public/assets/icons/togoocom-protected@2x.png';
import Bad from '../public/assets/icons/1200px-Logo_Afrikanische_Entwicklungsbank.svg.png';
import partImage from '../public/assets/images/108105522-mascot-illustration-of-a-black-african-american-green-grocer-or-greengrocer-holding-fruit-and-vegeta.jpg';

export const header = {
    logo:LogoImg,
  };

export const nav = [
    { name: 'A propos', href: '/apropos' },
    { name: 'Services', href: '/services' },
    { name: 'Acheteur', href: '/acheteur' },
    { name: 'Producteurs', href: '/producteur' },
  ];

export const dropdown = [
    { name: 'Notre Histoire', href: '#'},
    { name: 'Notre Equipe', href: '#'},
    { name: 'Nos Partenaires', href: '#'},
    { name: 'Notre Mission', href: '#'}
];

export const hero =
   
  {title1:"Plateforme Complète pour accompagner",
   title2:"les agriculteurs et",
   title3:"les acteurs du domaine agricole",
   color:"#63A04E",
   bgHero: Hero1,
   

   title4:"Integration des nouvelles ",
   title5:" des technologies",
   title6:" aux pratiques traditionelles",
   color:"#432A16",
   bgHero: Hero2,
  

   title7:"Logistique fiable et",
   title8:"un vaste marché pour ",
   title9:"écouler les recoltes",
   color:"#1AB24B",
   bgHero: Hero3
   };
   export const hero2 =
   
  [{title1:"Plateforme Complète pour accompagner",
   title2:"les agriculteurs et",
   title3:"les acteurs du domaine agricole",
   color:"#63A04E",
   bgHero: Hero1},
   

   {title1:"Ayez access aux intrants, equipements ",
   title2:" et aux mains d'oeuvre",
   title3:" le plus rapidement possible",
   color:"#432A16",
   bgHero: Hero2},
  

   {title1:"Votre processus agricole rendu plus facile pour vous",
   title2:"grace au financement et",
   title3:"aux appius techniques",
   color:"#1AB24B",
   bgHero: Hero3
   }];


export const footer = {
  footerIcon: iconFoot,
}

export const clients = {
  client1:ImageClient,
  title1: 'Je veux acheter des produits agricoles',
  client2:ImageClient2,
  title2: 'Je veux vendre des produits agricoles',

};

export const offre =
  {text: 'Haré.com offfre des denrés fraichement recoltés aux restaurants, hotels, revendeurs et aux transformateurs selon leurs besoins en qualité et en quantite avec',
   text2:'des tarifs transparants', 
  image:ImageOffre};

export const service ={
    title: 'Services',
    image: ImgServices,
    image2: ImgServices2,

  };

export const vendeur = {
  heroVente: vendImg,
  icon : iconLapTop,
};

export const acheteur = {
  heroAchat: achatImg,
  icon : iconLapTop,
};


export const impacts = [
{title: 'Augmentation du revenu des agriculteurs de 15-30% ', image:impInc , bg:'#FFC509',color:'#000000'},
{title: 'Agriculture durable et impact  ecologique  ', image:impEco , bg:'#3DC962', color:'#ffffff'},
{title: 'Reduction des pertes post-récoltes', image:impLosss, bg:'#44546A', color:'#ffffff'},
{title: "Creation d'emploi et croissance  economique", image:impJobs, bg:'#4952D2', color:'#ffffff'},
{title: "Rémedier a l'insecurité alimentaire", image:impSec, bg:'#B7B7B7', color:'#ffffff'},

];

export const partenaires= [
  {name: Ul},
  {name: Pia},
  {name: Mifa},
  {name: Bad},
  {name: Togocom},
];

export const futurPart ={
  imgPart: partImage,
  title:'À vous, notre futur Partenaire/Investisseur',
  msg: `"L'agriculture emploi plus de 65% de la population et occupe 40% du PIB de la CEDEAO.Le marché 
  agro-alimentaire ne cesse de croitre. Le secteur agricole est un secteur porteur économique, qui connait 
  des difficultés malgré les efforts des gouvernements. Nous apportons notre part de solution
  en accompagnants les agriculteurs (surtout coté education et information) dans leurs projets agricoles et en optimisant la chaine de valeur du secteur agricole (accès direct aux marchés).
  Par example, nous échangons sur les types de culture demandées sur le marché, la planification de la saison agricoles, quels intrants adaptés à quelles cultures, les differentes  programmes mis en place par le gouvernement,etc. Nous vendons les produits sur nos plateforme de commerce en ligne pour atteindre 
  un large marché. Nous voulons atteindre plus d'agriculteurs mais cela nécéssite du capital, le but n'est pas seulement de faire plus d'argent mais aussi de permettre aux agriculteurs de realiser plus de bénéfice via un model viable.
  Nous travaillons chaque pour comprendre les différents defis auxquels sont confrontés les agriculteurs, et nous pensons que travailler en cooperative serait la meilleure solution."`,
  imp:`D'après nos etudes:`,
  imp1:`1. Avoir la bonne information est la clé du succès et la technologies peut faciliter le flux de l'information.`,
  imp2: `2. Les jeunes et les nouvaux agriculteurs sont prets à adopter les nouvelles technologies
  `,imp3: `3. Gagner la confiance des agriculteurs est primordiale pour un bon partenariat 
  `,imp4: `4. Le partage de l'information et des donnés entre les institutions publique et privés est très fondamentale pour le succès global du secteur agricole.
  `,imp5: `5. Evoluer dans le secteur agricole n'est pas facile mais nous somme prêt pour tous les défis`
};


export const presentation = {
  titlePres: " Ce qui fait notre force",
  imgPres:imgDiff,
};

export const serviceProb =[
  {imgProb:probImage1,
      msg: "Revenu faible des producteurs et pas d'accès aux financements"},
  {imgProb:probImage2,
      msg: "Le Coût du transport élevé rend difficile l'accès direct aux marchés"},
  {imgProb:probImage3,
      msg: "La chaine d'approvisionnement Fragmentée avec plusieurs intermédiares"},
  {imgProb:probImage4,
      msg: "L'offre des produits ne repond pas a la demande du marché en terme de quantité et de qualité"},
 {imgProb:probImage5,
      msg: "Des Pertes post-recoltes dues aux mauvaises pratiques de stockage "},
]

export const serviceDetails = [

  {
    imgService: servImage1,
    title:'Appuis Technique et Conseils',
    msg: " Nous travaillons de près avec les producteurs et nous donnons des formations et des conseils non"
  
  },

  {
    imgService: servImage3,
    title:'Credis agricoles et financement',
    msg: " Grace a nos partenariat avec les banques, nous facilitons le processus d'acces aux credits et aux financements des petits producteurs " },
  {
    imgService: servImage2,
    title:'Vente et Location des intrants et equipements agricoles',
    msg: " Nous collaborons avec les entreprises fabricateures d'intrants certifiés par l'Ettat et equipements agricoles, ce qui nous permet de vendre"+
    "a un prix abordable aux producteurs"
  },

  {
    imgService: servImage5,
    title:' Services de Stockage',
    msg: " Notre expertise dans le domaine de stockage nous permet d'offrir les services de stockage aux petit producteurs. Ce qui reduit massivent les pertes post-recoltes"
    + "du aux mauvaise techniques de stockage."
  
  },

  {
    imgService: servImage6,
    title:'Achat et vente de produits agricoles',
    msg: " Nous avons des contrats avec les revendeurs, les restaurants, les hotèl et les entreprises de transformation  a qui nous offrons des produits agricoles fraichement recoltés ."
  
  },

  {
    imgService: servImage4,
    title:'Teste de qualité et Livraison',
    msg: " Tout d'abord nous collectons des produits agricoles chez les producteurs qui travaillent avec nous. Ces produits sont envoyés dans nos entrepots ou ils sont triés. "
   +"Nous avons la technologies qui nous permet de tester la qualité des produits et et un systeme logistique que nous perment de livrer ces prdui en un temps record. "
  },

]; 