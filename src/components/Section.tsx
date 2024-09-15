import Image from 'next/image';
import inclind from '../app/public/inclind-tady.png';
import Creator from '../app/public/CreatorPage.png';
import Frame from '../app/public/Frame.png';
import Group from '../app/public/Group.png';
import bagOne from '../app/public/bagOne.png';
import bagTwo from '../app/public/bagTwo.png';
import cardImageOne from '../app/public/cardImageOne.png';
import cardImageTwo from '../app/public/cardImageTwo.png';
import cardImageThree from '../app/public/cardImageThree.png';

import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Carousel, CarouselItem } from './ui/carousel';
import SnefCarousel from './Cards/SnefCrousel';
import Footer from './Footer';
import HowToStartSection from './HowToStartCard';
import StartCorner from './StartCorner';



const carouselItems = [
    { image:cardImageOne, username: "tasyafarasya" },
    { image: cardImageOne, username: "tasyafarasya" },
    { content: cardImageOne, cta: "Get started for free" },
    { image: cardImageOne, username: "tasyafarasya" },
  ];


const MainSection = () => {
  return (
    <div className="flex flex-col  min-h-fit items-center gap-16 w-full mx-12 mb-4 ">
      {/* Section One */}
      <div className="flex flex-col items-center w-[850px] mt-28">
        <p className="text-6xl font-bold text-center text-foreground">
          Your AI - Powered Creator Commerce Autopilot
        </p>
        <p className="text-2xl text-center mt-4 text-foreground">
          Sign up today to automate your storefront, enhance customer experience, and boost sales effortlessly.
        </p>
        <div className="flex items-center gap-4 mt-6 relative">
          <div className="relative">
            <Image 
              src={inclind} 
              alt="Inclind" 
              className="relative -right-8 -bottom-0 z-10 h-28 w-28"
            />
          </div>

          <input 
            className="h-12 p-2 pl-10 rounded-3xl text-foreground bg-[#F4F4F4] rounded relative z-0"
            placeholder="snef.co/yourname"
          />

          <Button variant="default" className="relative z-10">
            Claim Your Snef
          </Button>
        </div>
      </div>

      {/* Section Two */}
      <div className="flex w-[1318px] mx-44 p-9 h-[470px] bg-gray-100 rounded-lg gap-40 relative overflow-hidden">
        <div className="relative w-1/2 top-12">
          <Image
            src={Creator}
            alt="Creator"
            width={355}
            height={812}
            className="object-cover"
          />
          <Image
            src={Frame}
            alt="Frame"
            width={302}
            height={371}
            className="absolute top-44 left-64 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <div className="text-3xl font-medium text-foreground">
            Effortlessly manage store front with <span className="border-b-2 border-black font-bold text-foreground">autopilot</span>.
          </div>
          <Button variant="default" className="mt-4">
            Get started for free
          </Button>
        </div>
      </div>

      {/* Section Three */}
      <div className="flex items-center w-[1318px] h-68 justify-between">
        <div className="flex flex-col gap-12 w-1/2">
          <div className="text-4xl font-medium text-foreground">
            Take control of your digital presence by <span className="border-b-2 border-black font-bold text-foreground">training AI.</span>
          </div>
          <Button variant="default">Get started for free</Button>
        </div>
        <div className="flex items-center w-1/2">
          <Image src={Group} alt="Group" width={400} height={400} />
        </div>
      </div>

      {/* Section Four */}
      <div className="flex w-[1318px] h-[481px] bg-gray-100 rounded-lg gap-16 relative">
        <div className="relative w-1/2 top-12">
          <Image
            src={bagTwo}
            alt="Bag Two"
            width={355}
            height={812}
            className="object-cover"
          />
          <Image
            src={bagOne}
            alt="Bag One"
            width={302}
            height={371}
            className="absolute top-44 left-64 object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center w-1/2">
          <div className="text-3xl font-medium">
            <span className="border-b-2 border-black font-bold text-foreground">Boost your sales</span> by making ordering as easy as a few clicks
          </div>
          <Button variant="default" className="mt-4 text-foreground">
            Get started for free
          </Button>
        </div>
      </div> 

      {/* Section Five */}
      {/* <div className="w-[1318px] flex flex-col items-start mt-8 bg-gray-100 rounded-lg p-16">
        <div className="text-2xl font-bold mb-4">The creators tried Snef</div>
       {
         <SnefCarousel items={carouselItems} />
    
       }
      </div> */}
       <HowToStartSection/>
       <StartCorner/>
      
    </div>
  );
};

export default MainSection;
