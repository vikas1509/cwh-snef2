import React from 'react';
import Image from 'next/image';
import Creater from '../app/public/Creater.png';
import Onboarding from '../app/public/Onboarding.png';
import Shop from "../app/public/Shop.png"
import Message from "../app/public/Message.png";

import { Button } from './ui/button';

const StartCorner = () => {
  return (
    <div className="flex justify-between my-10 h-62 w-[1318px] gap-0 mx-12 mt-28 flex-wrap  ">
      <div className="flex flex-col justify-center w-[536px]  bg-gray-200 rounded-2xl lg:flex-1">
        <h2 className="text-2xl font-bold text-primary-green-10 mb-6 text-center">
          Jump start your corner of the internet today
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <input
            type="text"
            defaultValue="snef.co/"
          placeholder="yourname"
            className="w-80 pl-4 pr-4 py-2 text-black bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <Button >
            Claim your Snef
          </Button>
        </div>
      </div>
      <div className="flex gap-8 W-[620px] justify-center h-[500px] bg-primary rounded-2xl relative flex-wrap lg:flex-1">
        <Image src={Onboarding} alt="Onboarding" className=" mx-4 w-[260px] left-0 absolute" />
        <Image
          src={Creater}
          alt="Creator"
          className="w-[259px] absolute right-4 bottom-4 "
        />
       <div className="absolute top-[-25px] right-36 shadow-lg bg-gray-50 h-[52px] w-[52px] rounded-full flex justify-center items-center bg-white bottom-4">
  <Image
    src={Shop}
    alt="Creator"
    className=""
  />
</div>
<div className="absolute bottom-[-28px] left-20 shadow-lg bg-gray-50 h-[52px] w-[52px] rounded-full flex justify-center items-center bg-white  ">
  <Image
    src={Message}
    alt="Creator"
    className=""
  />
</div>
       
      </div>
    </div>
  );
};

export default StartCorner;
