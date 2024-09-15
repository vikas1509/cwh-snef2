import React from 'react';
import Image from 'next/image';
import logo from '../app/public/logo.png';
import insta from '../app/public/insta.png';
import tiktok from '../app/public/tiktok.png';
import mail from '../app/public/mail.png';
import x from "../app/public/x.png"
import play from '../app/public/GooglePlay.png';
import { AiFillApple, AiFillGoogleCircle, AiFillInstagram } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex  h-52  justify-between p-6 text-[#B6CE5A] w-full">
      <div className="flex flex-col justify-between w-full mb-4">
        <div className="flex items-center">
          <Image src={logo} alt="Snef Logo" className="w-12 h-auto" layout="intrinsic" />
        </div>
        <div className="mt-4">
          <p className="flex items-center text-base">
            <Image src={mail} alt="Email Icon" className="mr-2 w-5 h-5" width={20} height={20} />
            info@snef.co
          </p>
        </div>
        <div className="flex items-center text-sm text-[#666666] mt-4">
          <p>© 2024</p>
          <p className="ml-2 text-[#B6CE5A] cursor-pointer">Data Privacy</p>
        </div>
      </div>
      <div className="flex flex-col items-end w-full">
        <nav className="flex gap-6 text-base flex-wrap justify-center">
          <a href="#home" className=" text-foreground font-semibold">Home</a>
          <a href="#brand" className="text-foregroun font-semibold">Brand</a>
          <a href="#about" className="text-foreground font-semibold">About</a>
          <a href="#blog" className="text-foreground font-semibold">Blog</a>
        </nav>
        <div className="flex gap-4 mt-4 justify-center flex-wrap">
        
        <button className='px-2 bg=[hsla(0, 0%, 96%, 1);
]);
]'>
        <IoLogoGooglePlaystore className="text-[#252525]" />
    </button>
    {/* Apple Store Button */}
    <button className="px-2 bg-[hsla(0, 0%, 96%, 1)]">
        <AiFillApple className="text-[#252525] h-6 w-6" />
      </button>

      {/* Instagram Button */}
      <button className="px-2 bg-[hsla(0, 0%, 96%, 1)]">
        <AiFillInstagram className="text-[#252525] h-6 w-6" />
      </button>

      {/* X (Twitter) Button */}
      <button className="px-2 bg-[hsla(0, 0%, 96%, 1)]">
        <BsTwitter className="text-[#252525] h-6 w-6" />
      </button>

      {/* TikTok Button */}
      <button className="px-2 bg-[hsla(0, 0%, 96%, 1)]">
        <FaTiktok className="text-[#252525] h-6 w-6" />
      </button>

      {/* Google Play Store Button */}
      <button className="px-2 bg-[hsla(0, 0%, 96%, 1)]">
        <IoLogoGooglePlaystore className="text-[#252525] h-6 w-6" />
      </button>
          {/* <a href="social-instagram-link" className="inline-block">
            <Image src={insta} alt="Instagram" width={50} height={50} />
          </a>
          <a href="social-tiktok-link" className="inline-block">
            <Image src={tiktok} alt="TikTok" width={30} height={30} />
          </a>
          <a href="social-twitter-link" className="inline-block">
            <Image src={x} alt="Twitter" width={30} height={30} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
