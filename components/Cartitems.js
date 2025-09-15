"use client"
import React from "react";
import Imageee from "./Imageee";
import Link from "next/link";
import Checkoutbtn from "./Checkoutbtn";
import { useData } from "@/app/providers/DataProvider";

const Cartitems = () => {
  const  data  = useData();
  return (
    <div>
      <h2 className="text-2xl font-bold">Your Cart Items</h2>
      {data.map((cartItem) => (
        <div
          key={cartItem.total}
          className="border my-2 p-4 rounded-2xl h-60 justify-between items-center flex"
        >
          <Imageee imgg={cartItem.image} />
          <div className="mx-5">
            <h3 className="text-md">Name: {cartItem.name}</h3>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: {cartItem.price}</p>
            <p>Color: {cartItem.color}</p>
            <p>Category: {cartItem.category}</p>
          </div>
          <div className="flex flex-col gap-4 m-5">
            <button className="bg-blue-500 text-white rounded-md px-2 py-1">
              Update
            </button>
            <button className="bg-red-500 text-white rounded-md px-2 py-1">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="border-t mt-4 pt-4 flex items-center justify-between p-10">
        <Link href="/shop">
          <button className="bg-gray-500 text-white rounded-md px-4 py-2 cursor-pointer">
            Continue Shopping
          </button>
        </Link>
        <Checkoutbtn />
        <div className="flex items-center">
          <h3 className="text-lg font-bold">Total Price:</h3>
          <p className="text-md">
            {data.reduce(
              (total, cartItem) => total + cartItem.price * cartItem.quantity,
              0
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
