"use client"
import Image from "next/image";

export default function HorizontalImageScroll() {
  const images = [
    "https://res.cloudinary.com/dbycjhhke/image/upload/v1755233425/l1_oa3sxr.svg",
    "https://res.cloudinary.com/dbycjhhke/image/upload/v1755233447/l2_ymrjdh.svg",
    "https://res.cloudinary.com/dbycjhhke/image/upload/v1755233458/l5_sgfnuj.svg",
    "https://res.cloudinary.com/dbycjhhke/image/upload/v1755233471/l3_zivpay.svg",
    "https://res.cloudinary.com/dbycjhhke/image/upload/v1755233478/l4_nr5fpy.svg",
  ];

  return (
    <div className="relative md:w-200 w-90 overflow-hidden py-6">
      {/* Left fade overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent z-10" />
      {/* Right fade overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent z-10" />

      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
