"use client";
import React from "react";
import Image from "next/image";
const Yourprod = ({ products }) => {
  return (
    <>
      <div>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product._id}>
              <div className="flex w-full justify-start border gap-10 relative p-5">
                <div className="md:h-50 h-50 w-50 rounded-xl relative  overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="w-100">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, tenetur odit. Magnam cumque similique dolorem non,
                    id quasi explicabo at? Optio nesciunt incidunt, et
                    consectetur quaerat dolorum at tempore magnam.
                  </p>
                </div>
                <div className="w-50">
                  <h2 className="text-lg font-semibold">Price</h2>
                  <p className="text-gray-500">{product.price}</p>
                </div>
                <div className="w-50">
                  <h2 className="text-lg font-semibold">Color</h2>
                  <p className="text-gray-500">Red</p>
                </div>
                <div className="w-50">
                  <h2 className="text-lg font-semibold">Quantity</h2>
                  <p className="text-gray-500">1</p>
                </div>
                <div className="absolute right-5 top-5 text-rose-700">edit</div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Yourprod;
