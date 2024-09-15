import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link2 } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

// Define the props interface
interface StartCardProps {
  logo?: StaticImageData; // Correctly type the logo as StaticImageData
  text?: string;
}

const StartCard: React.FC<StartCardProps> = ({ logo, text }) => {
  return (
    <Card className="w-[600px] h-32 bg-gray-100 shadow-sm rounded-lg overflow-hidden">
      <CardContent className="flex items-center gap-4  p-6">
        {/* Logo section */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-lime-300">
          {logo ? (
            <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full p-2" />
          ) : (
            <Link2 className="w-6 h-6 text-gray-700" />
          )}  
        </div>

        {/* Text content */}
        <div className="flex-grow">
          <p className="text-gray-800 font-semibold text-lg text-foreground">
            {text || "Add your Snef to your social media bio once, no need to update it ever again"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartCard;
