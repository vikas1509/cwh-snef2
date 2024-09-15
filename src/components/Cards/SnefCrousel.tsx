// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// import { ChevronRight } from 'lucide-react';
// import { Card, CardContent } from '../ui/card';
// import { Button } from '../ui/button';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

// interface SnefCarouselProps {
//   items: Array<{
//     image?: StaticImageData; // Ensure this is a type for imported images
//     username?: string;
//     content?: string;
//     cta?: string;
//   }>;
// }

// const SnefCarousel: React.FC<SnefCarouselProps> = ({ items }) => {
//   return (
//     <Carousel className="w-full max-w-xs mx-auto">
//       <CarouselContent>
//         {items.map((item, index) => (
//           <CarouselItem key={index}>
//             <Card className="border-0 shadow-none">
//               <CardContent className="flex aspect-square items-center justify-center p-0">
//                 {item.image ? (
//                   <div className="relative w-full h-full rounded-xl overflow-hidden">
//                     <Image 
//                       src={item.image} 
//                       alt={item.username || 'Image'}
//                       layout="fill" 
//                       objectFit="cover" 
//                       className="object-cover"
//                     />
//                     {item.username && (
//                       <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full flex items-center space-x-1">
//                         <span className="text-xl font-bold">$</span>
//                         <span className="text-sm font-medium">{item.username}</span>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="bg-lime-100 w-full h-full rounded-xl flex flex-col items-center justify-center p-6 text-center">
//                     <div className="text-2xl font-bold mb-2">$</div>
//                     <p className="text-sm mb-4">{item.content}</p>
//                     <Button variant="outline" className="rounded-full">
//                       {item.cta} <ChevronRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };

// export default SnefCarousel;
