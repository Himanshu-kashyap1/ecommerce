import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ detail, hClass, innerHClass, wid}) => {
  return (
    <div className=" h-auto my-3 justify-between flex-wrap flex">
      {detail.map((det) => {
        return (
          <div
            key={det._id}
            className={`group ${wid} ${hClass} mb-10 cursor-pointer`}
          >
            <Link href={`/shop/${det._id}`}>
              <div
                className={`peer ${innerHClass} w-full relative rounded-xl overflow-hidden `}
              >
                <Image
                  src={det.image}
                  alt={det.alt}
                  fill={true}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute contain-content bottom-0 w-full text-xl h-0 group-hover:h-10 text-white flex items-center justify-around bg-black hover:text-black hover:bg-transparent transition-all duration-300">
                  VIEW PRODUCT
                </div>
              </div>
              <h2 className="mx-1 text-lg">{det.name}</h2>
              <p className="mx-1">${det.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
