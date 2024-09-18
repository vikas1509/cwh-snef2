import React from 'react';
import { Button } from "@/components/ui/button";
import tady from "@/public/brand/tady2.png";
import Image from 'next/image';
import couple from "@/public/brand/couple.png"
import graph from "@/public/brand/Graph.png"
import insta from "@/public/brand/insta.png"
import tictoc from "@/public/brand/tic-toc.png"
import X from "@/public/brand/X.png"
import cap from "@/public/brand/cap.png"
import capgirl from "@/public/brand/capgirl.png"
import { FiChevronDown } from 'react-icons/fi';


//start
import Creater from "@/public/hero/Creater.png";
import Onboarding from "@/public/hero/Onboarding.png";
import Message from "@/public/logo/Message.png";
import Shop from "@/public/logo/Shop.png";




const FeatureCard = ({ title, description, buttonText, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-4">
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button  className="block mx-auto mt-4   text-secondary  bg-secondary-foreground">
        {buttonText}
      </Button>
    </div>
    <div className="w-full md:w-1/2">
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
    </div>
  </div>
);

const SnefBrandUI = () => {
  return (
    <div className=" w-full p-8  flex flex-col gap-24">
      <div className="w-10/12 mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">
            <span className="font-extrabold">snef</span> is not only for creators<br />but also for brands
          </h1>
          <Button  className="block mx-auto mt-4   text-secondary  bg-secondary-foreground">
            Contact us
          </Button>
        </div>

        {/* AI Feature */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-primary-foreground rounded-xl justify-between">
      <div className="flex flex-col gap-6 md:gap-12 w-full md:w-[523px]">
        <h2 className="text-2xl md:text-4xl font-medium text-primary text-center md:text-left">
        <span className="font-extrabold underline">partner with</span> us to connect with Snef's AI and boost your visibility and reach.
        </h2>
        <Button variant="default" className="w-full md:w-fit py-2 text-2xl  text-secondary  bg-secondary-foreground">
          Get started for free
        </Button>
      </div>
      <div className="flex items-center justify-center w-full md:w-[330px] mt-6 md:mt-0">
        <Image 
          src={tady} 
          alt="AI Partner" 
          width={250} 
          height={250}
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        />
      </div>
    </div>

        {/* Profitability Feature */}
        <div className="rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-start gap-4 bg-primary-foreground">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
        <div className="flex-grow mb-2 md:mb-0">
          <Image 
            src={couple} 
            alt="Happy couple using phones" 
            className="rounded-lg bg-secondary-foreground w-full h-auto"
            width={300}
            height={200}
          />
        </div>
        <div className="flex flex-row md:flex-col gap-4 bg-primary-foreground">
          <div className=" rounded-lg  bg-[#293119] p-2 flex-1 md:flex-none">
            <div className="flex flex-col  item-center justify-center h-full">
              <Image 
                src={graph} 
                alt="Growth graph" 
                className="w-full h-auto"
                width={150}
                height={200}
              />
              <Button className="w-[200] mt-2 ml-8 px-8 md:w-fit   text-secondary  bg-secondary-foreground">Report</Button>
            </div>
          </div>
          <div className="hidden md:block md:flex flex gap-2 bg-[#A6C466] p-4 rounded-md items-center justify-center md:justify-start">
            {[insta, tictoc, X].map((icon, index) => (
              <div key={index} className="w-10 h-10 rounded-full  bg-black flex items-center justify-center">
                <Image src={icon} alt={`Social icon ${index + 1}`} className="w-6 h-6" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[550px] md:h-[265px] bg-primary-foreground md:p-6 rounded-md">
        <h3 className="text-2xl  mb-2">
          We offer <span className=" font-bold underline">minimal admin fees</span> to maximize your profitability.
        </h3>
        <Button className="mt-4 w-full md:w-auto   text-secondary  bg-secondary-foreground">
          Contact us
        </Button>
      </div>
    </div>

        {/* Brand Story Feature */}
        <div className="flex flex-col md:flex-row mt-[100px] h-auto md:h-[700px] pt-4 md:pt-36 p-6">
      <div className="hidden md:block md:w-[350px] py-14 rounded-md">
        <h3 className="text-2xl font-bold mb-2">
          Let creators tell your brand story to build trust and credibility with their audience.
        </h3>
        <Button className="mt-4   text-secondary  bg-secondary-foreground hover:bg-lime-500">
          Contact us
        </Button>
      </div>
      <div className="bg-primary-foreground rounded-lg shadow-md p-6 w-full md:w-[394px] h-auto md:h-[394px] mx-auto">
        <div className="relative bg-[#7C934C] rounded-lg p-4 mb-4 w-full md:w-[214px] h-[204px] md:ml-14">
          <div className="absolute top-2 left-[-30px] bg-[#D4E9B6] rounded-full p-2">
            <Image src={cap} alt="Hat icon" width={45} height={45} className="w-16 h-10" />
          </div>
          <div className="absolute top-[-70px] right-[-60px] bg-[#293119] w-[100px] h-[110px] text-white rounded p-2 text-sm flex flex-col gap-2">
            <div className="px-2 rounded-full bg-[#393939]">Green</div>
            <div className="font-bold">$ 17.32</div>
            <div>Green hat</div>
            <div className="text-xs">Fashion</div>
          </div>
          <Image src={cap} alt="Green hat" width={150} height={180} className="mx-auto my-8" />
          <div className="absolute bottom-[30px] left-[-70px] text-[#3E4F2F]">
            <Button className="w-fit rounded-full py-1 px-3 text-sm font-bold   text-secondary  bg-secondary-foreground">Buy Now</Button>
          </div>
          <div className="absolute bottom-2 right-2 flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className={`w-5 h-5 ${star === 5 ? 'text-#A6C466' : 'text-#D9F799'} fill-current`} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">
  <div className="flex justify-between items-center mb-2">
    <span className="text-[#8DAD6F] font-semibold">Description</span>
    <FiChevronDown className="w-5 h-5 text-[#8DAD6F]" />
  </div>
  <p className="text-sm  dark:text-[#FFFFFF">
    This Hat is a versatile and comfortable choice. It pairs well with any outfit, fits perfectly with its adjustable closure, and stays breathable all day.
  </p>
</div>

      </div>
    </div>

        {/* Dynamic Platform Feature */}
        <div className="flex flex-col md:flex-row justify-between my-10 gap-6 mx-4 md:mx-12 mt-10 md:mt-28 w-full">
      <div className="order-2 md:order-1 w-full md:w-1/2 bg-gray-200 rounded-2xl p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold text-primary-green-10 mb-6 text-center">
          Accelerate your brand's impact online with our dynamic platform
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Input your email"
            className="w-full md:w-80 pl-4 pr-4 py-2 text-black bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <Button className="font-extrabold w-full   text-secondary  bg-secondary-foreground md:w-auto">Submit</Button>
        </div>
      </div>
      
      <div className="order-1 md:order-2 w-full md:w-1/2 h-[400px] bg-secondary-foreground rounded-2xl relative overflow-hidden">
        <Image
          src={Onboarding}
          alt="Onboarding"
          className="absolute left-0 top-0 bottom-0 w-[45%] md:w-[260px]"
        />
        <Image
          src={Creater}
          alt="Creator"
          className="absolute right-0 bottom-0 w-[45%] md:w-[259px]"
        />
        <div className="absolute top-4 right-4 md:top-[-25px] md:right-36 shadow-lg bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center">
          <Image src={Shop} alt="Shop" className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 left-4 md:bottom-[-28px] md:left-20 shadow-lg bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center">
          <Image src={Message} alt="Message" className="w-6 h-6" />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

const BrandPage = () => {
  return (
    <div className="brand-page ">
      <header className="bg-white shadow-sm">
        {/* Add your header content here */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Add navigation items */}
        </nav>
      </header>

      <main>
        <SnefBrandUI />
      </main>

      <footer className=" text-white">
        {/* Add your footer content here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Add footer items */}
        </div>
      </footer>
    </div>
  );
};

export default BrandPage;
