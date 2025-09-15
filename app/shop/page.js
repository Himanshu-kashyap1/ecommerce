import Card from "@/components/Card";
import React from "react";

const shop = async () => {


  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div>
      <div className="h-17 relative" />
      <div className="text-lg bg-gray-200 flex flex-col items-center justify-center my-3 h-60">
        <h2 className="text-5xl font-bold m-2">Made for you</h2>
        <p className="text-center">
          Since 1963, we’ve pioneered the creation of beautiful clothing and
          footwear for all the family.
        </p>
      </div>
      <div className="grid m-2 md:grid-cols-[25%_75%] h-auto">
        <div className="m-4">
          <h3 className="text-2xl font-semibold">All Products</h3>
          <p>
            Shop now, not later. Browse the best of our favorite sale styles and
            brands.
          </p>
          
        </div>
        <div className="mr-5">
          <Card detail={products} hClass="h-100" innerHClass="h-90" wid="w-85" />
          <div className="text-lg text-center flex items-center justify-center"> 
            <p className="w-40 px-5 py-2 text-white bg-black rounded-xl">Load More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
