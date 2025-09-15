"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff, toggle } from "@/store/toggleSlice";

const Oneproduct = ({ res }) => {
  const [count, setcount] = useState(1);
  const isOn = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  var maxQuantity = res.quantity;

  const increment = () => {
    if (count < maxQuantity) {
      setcount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  const saveToDB = async () => {
    try {
      if (count > maxQuantity) {
        alert("Exceeds available stock");
      } else {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            productId: res._id, // if MongoDB uses _id
            name: res.name,
            price: res.price,
            color: res.color,
            idnum: res.total,
            quantity: count,
          }),
        });

        if (response.status === 401) {
          alert("Please login to add items to cart");
          return;
        }
        // ✅ only parse JSON if ok
        const data = await response.json();
        console.log("Saved:", data);
        dispatch(turnOn()); // you can open cart/sidebar here
      }
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
  };

  return (
    <div>
      <div className="flex gap-10 mx-8">
        <div className="">
          <div className="relative md:w-[45vw] h-[70vh]">
            <Image
              src={res.image}
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 my-3 items-start">
          {res.quantity < 1 && <p className="text-red-500">Out of Stock</p>}
          <h1 className="text-4xl font-bold">{res.name}</h1>
          <p className="text-xl font-semibold">${res.price}</p>
          <div className="h-[0.5px] bg-black w-full my-2" />
          <p>{res.desc}</p>
          <div className="h-[0.5px] bg-black w-full my-2" />

          <div className="flex items-center text-lg justify-center gap-4">
            {/* <p>size : </p> */}

            {/* <select className="border border-gray-300 rounded-md p-2 cursor-pointer">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select> */}
            {/* </div>
          <div className="flex items-center text-lg justify-center gap-4"> */}
            <p>color : </p>
            {res.color}
            {/* <select className="border border-gray-300 rounded-md p-2 cursor-pointer">
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select> */}
          </div>
          <div className="flex items-center w-full border border-gray-300 rounded-xl px-4 py-2 text-lg justify-between gap-4">
            <button onClick={decrement} className="cursor-pointer px-2">
              -
            </button>
            <p>{count}</p>
            <button onClick={increment} className="cursor-pointer px-2">
              +
            </button>
          </div>
          <button
            onClick={saveToDB}
            className="w-full text-center py-2 border border-gray-300 rounded-md cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oneproduct;
