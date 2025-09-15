import React from "react";
import Image from "next/image";
import { submitcontact } from "@/actions/submitcontact";

const contact = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%]">
        <div className="relative w-full h-[50vh]">
          <Image
            src={
              "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244185/contact1_ssko8f.webp"
            }
            alt={`nvjd`}
            fill={true}
            className="object-cover"
          />
          <div className="text-center absolute z-10 md:w-200 top-25  md:top-30 md:left-80">
            <h2 className="md:text-5xl text-3xl my-5 font-semibold md:font-bold">Wear like a pro</h2>
            <p className="md:text-lg font-semibold">
              You have about our products or our shop, or even just a message to
              say hi!
            </p>
          </div>
        </div>
      </div>
      <div className="h-20" />
      <p className="text-center text-3xl font-semibold m-1">Contact Us</p>
      <p className="text-center text-lg">
        We love to hear from our customers, so please feel free to contact us
        with any feedback or questions
      </p>
      <div className="grid md:grid-cols-2 gap-8 p-10">
        <div className="md:order-1 order-2">
          <form
            action={submitcontact}
            className="flex flex-col md:w-full  md:items-end"
          >
            <div className="flex md:w-[65%] flex-col gap-3">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                type="text"
                placeholder="Name..."
                name="name"
                className="w-full border border-grey-50 p-2 rounded-xl"
              />
              <label htmlFor="name" className="">
                Email
              </label>
              <input
                type="text"
                placeholder="Email..."
                name="email"
                className="w-full border border-grey-50 p-2 rounded-xl"
              />
              <label htmlFor="name" className="">
                Message
              </label>
              <input
                type="text"
                placeholder="Message..."
                name="message"
                className="w-full border border-grey-50 p-2 rounded-xl h-auto"
              />
              <button className="bg-[#b3a088] h-10 rounded-xl my-5 cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:order-2 order-1">
          <div className="relative md:w-[30vw] h-[45vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244215/contact2_cxcgpa.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
