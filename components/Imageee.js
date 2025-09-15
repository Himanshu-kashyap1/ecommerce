import React from "react";
import Image from "next/image";

const Imageee = ({ imgg }) => {
  return (
    <div className="md:h-50 h-30 w-50 rounded-xl relative  overflow-hidden">
      <Image
        src={imgg}
        alt="jfe"
        fill={true}
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};

export default Imageee;
