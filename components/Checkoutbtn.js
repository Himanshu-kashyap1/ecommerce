"use client"
import React from 'react'
import { useSelector} from 'react-redux';

const Checkoutbtn = () => {
  const isOn = useSelector((state) => state.toggle.value);

  return (
    <div>
      {!isOn && (
        <button className="bg-green-500 text-white rounded-md px-4 py-2 cursor-pointer">
          Checkout
        </button>
      )}
    </div>
  );
}

export default Checkoutbtn