"use client"
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AiOutlineMail } from "react-icons/ai";
import colorlogo from "@/public/logo/logo.png";
import logo from "@/public/logo/BlackLogo.png";
import apple from "@/public/logo/Applebox.png";
import playstore from "@/public/logo/playstoree.png";
import insta from "@/public/logo/insta.svg";
import tictoc from "@/public/logo/tictoc.svg";
import x from "@/public/logo/X.svg";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flex flex-col   h-[200] md:flex-row justify-between p-6 text-foreground w-full">
    <div className="flex flex-col  bg-red-500 items-center justify-between w-full md:w-auto mb-8 md:mb-0">
      <div className="flex flex-col items-center h-12 w-fit p-2">
        <Image
          src={theme === "dark" ? colorlogo : logo}
          alt="Snef Logo"
          className="object-fill text-black"
          width={100}
          height={40}
        />
        <div className="mt-4 p-2 ">
        <p className="flex items-center gap-2 text-[#536233] dark:text-[#ECFBCC]">
          <AiOutlineMail />
          info@snef.co
        </p>
      </div>
      </div>
      
      <div className="flex items-center text-sm p-2 text-[#536233] mt-6 justify-center md:justify-end w-full">
        <p>© 2024</p>
        <p className="ml-2 text-[#536233] cursor-pointer">Data Privacy</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-between md:items-end w-full md:w-auto">
      <nav className="flex gap-6 text-base flex-wrap justify-center mb-6 md:mb-0">
        <a href="#home" className="text-primary">Home</a>
        <a href="#brand" className="text-primary">Brand</a>
        <a href="#about" className="text-primary">About</a>
        <a href="#blog" className="text-primary">Blog</a>
      </nav>

      <div className="flex flex-wrap gap-4 mt-4 justify-center items-center">
        <Image src={apple} alt="App Store" width={135} height={40} />
        <Image src={playstore} alt="Google Play" width={135} height={40} />
        <button className="p-2 h-[45px] w-[45px] rounded-full bg-primary-foreground">
          <Image src={insta} alt="Instagram" width={25} height={25} />
        </button>
        <button className="p-2 h-[45px] w-[45px] rounded-full bg-primary-foreground">
          <Image src={tictoc} alt="TikTok" width={25} height={25} />
        </button>
        <button className="p-2 h-[45px] w-[45px] rounded-full bg-primary-foreground">
          <Image src={x} alt="X" width={25} height={25} />
        </button>
      </div>

    
    </div>
  </footer>
  );
};

export default Footer;