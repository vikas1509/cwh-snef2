"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import images from "@/public/hero/CardImageTwo.png";
import S from "@/public/logo/S.svg";
import Image from 'next/image';

const creators = [
  { name: "tasyafarasya1", image: images },
  { name: "tasyafarasya2", image: images },
  { name: "tasyafarasya3", image: images },
  { name: "tasyafarasya4", image: images },
  { name: "tasyafarasya5", image: images },
  { name: "tasyafarasya6", image: images },
  { name: "tasyafarasya7", image: images },
  { name: "tasyafarasya8", image: images },
  { name: "tasyafarasya9", image: images },
  { name: "tasyafarasya10", image: images },
];

const CreatorCard: React.FC<any> = ({ name, image }) => (
  <Card className="w-44 h-52 flex-shrink-0 flex flex-col items-center justify-center relative overflow-hidden bg-transparent border-none">
    <Image
      src={image}
      alt={name}
      className="absolute top-0 left-0 w-full h-full object-cover"
      width={240}
      height={10}
    />
<button className="absolute bottom-4 gap-1 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-gray-100 transition-all duration-300 z-10">
  <span className="text-2xl mr-1 h-4 w-4">
    <Image
      src={S}
      alt={name}
      className="w-5 h-5 object-cover "  // Tailwind classes for width and height
      width={16}   // Set width to 16px
      height={16}  // Set height to 16px
    />
  </span>
  <span className="text-sm mt-1">{`/${name}`}</span>
</button>

  </Card>
);

const SpecialCard: React.FC = () => (
  <Card className="w-40 h-52 flex-shrink-0 flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md">
    <CardContent className="p-4 flex flex-col items-center text-center">
      <span className="text-3xl font-bold text-green-500 mb-2">S</span>
      <p className="text-sm mb-4 ">Become a part of the creator and enjoy the same experience.</p>
      <Button variant="outline" className="mt-2 text-xs px-3 py-1 rounded-full">
        Get started for free
        <ChevronRight className="ml-1 h-3 w-3" />
      </Button>
    </CardContent>
  </Card>
);

const CreatorCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, creators.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="w-11/12 bg-gray-100 bg-primary-foreground rounded-lg lg:p-20">
      <h2 className="lg:text-3xl lg:font-bold lg:mb-6  text-primary  w-[400] text-3xl font-bold ">The creators tried <span className="text-secondary-foreground">Snef</span></h2>
      <div className="relative">
        <div className="flex space-x-4 items-center overflow-hidden">
          <div className="flex space-x-4 transition-transform duration-300 ease-in-out"
               style={{ transform: `translateX(-${startIndex * (160 + 16)}px)` }}>
            {creators.map((creator, index) => (
              <CreatorCard key={index} {...creator} />
            ))}
            <SpecialCard />
          </div>
          <div className="absolute right-0 bottom-[-60]">
            <Button variant="ghost" className="p-2 z-10" onClick={prevSlide} disabled={startIndex === 0}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="p-2 z-10" onClick={nextSlide} disabled={startIndex >= creators.length - itemsToShow + 1}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCarousel;