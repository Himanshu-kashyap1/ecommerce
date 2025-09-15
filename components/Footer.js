import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPhone } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" min-h-screen gap-5">
      <div className="mx-8 mt-10 grid md:grid-cols-2">
        <div className="w-77 md:w-full">
          <div className="flex flex-col items-center gap-2 p-5">
            <LiaShippingFastSolid className="text-5xl" />
            <p className="text-xl font-semibold">Free Shipping</p>
            <p className="text-lg">Orders above $200</p>
          </div>
          <div className="h-[0.2px] md:w-165 w-77 bg-black" />
          <div className="flex flex-col items-center gap-2 p-5">
            <MdPhone className="text-5xl" />
            <p className="text-xl font-semibold">Premium Support</p>
            <p className="text-lg">Phone and email support</p>
          </div>
          <div className="h-[0.2px] md:w-165 w-77 bg-black" />
        </div>
        <div className="w-77 md:w-full">
          <div className="flex flex-col items-center gap-2 p-5">
            <FaRegMoneyBillAlt className="text-5xl" />
            <p className="text-xl font-semibold">Money-back</p>
            <p className="text-lg">30 day Guarantee</p>
          </div>
          <div className="h-[0.2px] md:w-165 w-77 bg-black" />
          <div className="flex flex-col items-center gap-2 p-5">
            <GrSecure className="text-5xl" />
            <p className="text-xl font-semibold">Secure Payments</p>
            <p className="text-lg">Secured by Stripe</p>
          </div>
          <div className="h-[0.2px] md:w-165 w-77 bg-black" />
        </div>
      </div>
      <div className="bg-black py-15  text-gray-200 mt-10">
        <div className="mx-8">
          <h2 className="text-2xl my-5 font-bold">SABINA</h2>
          <p>Discover timeless pieces for effortless style.</p>
          <div className="flex my-5 gap-5">
            <Link href={"https://www.facebook.com"}>
              <div className="bg-white rounded-full p-1">
                <CiFacebook className="text-black text-2xl" />
              </div>
            </Link>
            <Link href={"https://www.instagram.com"}>
              <div className="bg-white rounded-full p-1">
                <CiInstagram className="text-black text-2xl" />
              </div>
            </Link>
            <Link href={"https://x.com/?logout=1755252155712"}>
              <div className="bg-white rounded-full p-1">
                <CiTwitter className="text-black text-2xl" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mx-8 my-10">
          <div className="flex flex-col gap-3">
            <p className="font-semibold ">Information</p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              Shipping Policy
            </p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              Returns & Refunds
            </p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold ">Company</p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              About us
            </p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              Contact
            </p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              Blogs
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold ">Contact</p>
            <div>
              <p>2810 N Church St PMB 48572,</p>
              <p>Wilmington, Delaware</p>
            </div>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              +1 123 456-7890
            </p>
            <p className="cursor-pointer hover:text-yellow-100 transition-colors duration-200">
              info@example.com
            </p>
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-500 mx-8 w-340" />
        <h3 className="mx-8 mt-8">Copyright &copy; 2025, Sabina</h3>
      </div>
    </footer>
  );
}

export default Footer