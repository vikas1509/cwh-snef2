"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HowToStartSection from "@/components/hero/how-to-start";
import StartCorner from "@/components/hero/start-section";
import BagOne from "@/public/hero/bagOne.png";
import BagTwo from "@/public/hero/bagTwo.png";
import Creator from "@/public/hero/Creater.png";
import LightCreator from "@/public/logo/lightcreator.png";
import Frame from "@/public/hero/Frame.png";
import lightframe from "@/public/logo/lightframe.png";
import inclind from "@/public/logo/inclind-tady.png";
import CreatorCarousel from "@/components/others/carousel";
import tady from "@/public/logo/tady2.png";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Head>
        <title>Your AI - Powered Creator Commerce Autopilot</title>
        <meta
          name="description"
          content="Automate your storefront, enhance customer experience, and boost sales effortlessly with Snef's AI-powered platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center gap-16 w-screen mb-4 ">
        {/* Section one */} 
        <div className="flex flex-col items-center w-full sm:w-[850px] mt-28">
          <p className="text-4xl sm:text-6xl font-bold text-center text-primary">
            Your AI - Powered Creator Commerce Autopilot
          </p>
          <p className="text-lg sm:text-2xl text-center mt-4 text-primary font-dm-sans sm:text-[40px] font-medium leading-6 sm:leading-[54px]">
            Sign up today to automate your storefront, enhance customer
            experience, and boost sales effortlessly.
          </p>
          <div className="flex flex-col   sm:flex-row justify-center items-center gap-4 mt-6">
            <div className="flex  sm:flex-row items-center gap-4 relative">
              <div className="relative w-[100] flex justify-center items-center bg-red-600 ">
                <Image
                  src={inclind}
                  alt="Inclind"
                  className="h-16  left-[40] absolute  sm:h-20 w-16 sm:w-20"
                />
              </div>
              <div className="flex items-center">
  {/* Non-editable part */}
  <input
    className="h-10 w-[73] sm:h-12 p-2 rounded-l-3xl text-secondary font-bold bg-[#F4F4F4] border-none "
    value="snef.co/"
    disabled
  />
  
  {/* Editable input */}
  <input
    className="h-10 sm:h-12 p-2 pl-2 rounded-r-3xl text-secondary  bg-[#F4F4F4] border-none   outline-none flex-grow"
    placeholder="yourname"
  />
</div>

            </div>
            <Button variant="default" className="relative z-10">
              Claim Your Snef
            </Button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col flex-col-reverse pl-4 pt-4 pr-4 lg:h-[400] lg:flex-row w-full max-w-screen-xl mx-auto h-[700px] bg-foreground rounded-lg gap-4 sm:gap-40 relative overflow-hidden">
        <div className="relative w-full h-[300] sm:w-1/2 mb-4 sm:mb-0 sm:top-12">
          {/* Conditionally render Creator and Frame images based on the theme */}
          {theme === "dark" ? (
            <>
              <Image
                src={LightCreator}
                alt="Light Creator"
                width={255}
                height={712}
                className="object-cover absolute bottom-0"
              />
              <Image
                src={lightframe}
                alt="Light Frame"
                width={302}
                height={371}
                className="absolute bottom-0 left-40 object-cover"
              />
            </>
          ) : (
            <>
              <Image
                src={Creator}
                alt="Creator"
                width={255}
                height={712}
                className="object-cover absolute bottom-0"
              />
              <Image
                src={Frame}
                alt="Frame"
                width={302}
                height={371}
                className="absolute bottom-0 left-40 object-cover"
              />
            </>
          )}
        </div>

        <div className="flex flex-col h-[300] justify-center sm:w-full px-4 sm:px-24">
          <div className="text-2xl sm:text-3xl font-medium text-primary">
            Effortlessly manage store front with
            <span className="border-b-2 border-black font-bold text-primary">
              autopilot
            </span>
            .
          </div>
          <Button variant="default" className="mt-4 max-w-fit">
            Get started for free
          </Button>
        </div>
      </div>

        {/* Section 3 */}
        <div className="  lg:flex lg:flex-row lg:px-32  lg:h-[400] sm:flex-col sm:h-[680px] items-start gap-6 w-full max-w-screen-xl   justify-between ">
          <div className="flex flex-col lg:pt-12 gap-6 sm:gap-12 w-full max-w-[523px] h-auto sm:h-[201px]">
            <div className="text-2xl  sm:text-4xl font-medium text-primary">
              Take control of your digital presence by{" "}
              <span className="border-b-2 border-black font-bold text-primary">
                training AI.
              </span>
            </div>
            <Button variant="default" className="w-fit py-2">
              Get started for free
            </Button>
          </div>
          <div className="flex  lg:pb-20 items-center   w-full sm:w-1/2">
            <Image src={tady} alt="Group" width={450} height={500} />
          </div>
        </div>

        {/* Section 4 */}
        <div className="h-[750] flex flex-col mb-14 flex-col-reverse justify-start  lg:flex  lg:flex-row lg:w-full lg:max-w-screen-xl lg:h-[600]rounded-lg  relative">
          <div className="relative lg:w-full h-[300] p-4 top-12">
            <Image
              src={BagOne}
              alt="Bag One"
              width={200}
              height={200}
              className="object-cover absolute "
            />
            <Image
              src={BagTwo}
              alt="Bag Two"
              width={200}
              height={200}
              className="absolute top-40 left-40 object-cover"
            />
          </div>
          <div className="flex flex-col gap- justify-center w-full max-w-[500px] py-24">
            <div className="text-3xl font-medium text-center sm:text-left text-primary">
              <span className="border-b-2 border-black font-bold text-primary">
                Boost your sales
              </span>{" "}
              by making ordering as easy as a few clicks
            </div>
            <Button
              variant="default"
              className="mt-4 text-foreground w-fit mx-auto sm:mx-0"
            >
              Get started for free
            </Button>
          </div>
        </div>

        <CreatorCarousel />

        <HowToStartSection />
        <StartCorner />
      </div>
    </>
  );
}
