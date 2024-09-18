import { Button } from "@/components/ui/button";
import Creater from "@/public/hero/Creater.png";
import Onboarding from "@/public/hero/Onboarding.png";
import Message from "@/public/logo/Message.png";
import Shop from "@/public/logo/Shop.png";
import Image from "next/image";
import React from "react";



const StartCorner: React.FC<any> = () => {
  return (
    <div className="w-full p-4 flex flex-col lg:flex-row justify-between my-10 mx-auto max-w-[1300px] gap-8">
    <div className="p-4 flex flex-col justify-center w-full lg:w-[536px] bg-gray-200 rounded-2xl">
      <h2 className="text-2xl font-bold text-primary-green-10 mb-6 text-center">
        Jump start your corner of the internet today
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="text"
          defaultValue="snef.co/"
          placeholder="yourname"
          className="w-full sm:w-80 pl-4 pr-4 py-2 text-black bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
        <Button className="w-full sm:w-auto">Claim your Snef</Button>
      </div>
    </div>
    <div className="h-[300px] lg:h-[400px] w-full lg:w-[520px] bg-[#A6C466] rounded-2xl relative overflow-hidden">
      <Image
        src={Onboarding}
        alt="Onboarding"
        className="w-[150px] lg:w-[230px] absolute left-4 top-0"
      />
      <Image
        src={Creater}
        alt="Creator"
        className="w-[150px] lg:w-[230px] absolute right-4 bottom-0"
      />
      <div className="absolute top-[-18] right-4 shadow-lg bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center">
        <Image src={Shop} alt="Shop" className="w-6 h-6" />
      </div>
      <div className="absolute bottom-[-18] left-4 shadow-lg bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center">
        <Image src={Message} alt="Message" className="absolute w-6 h-6" />
      </div>
    </div>
  </div>
  );
};

export default StartCorner;