import React from "react";
import Image from "next/image";
import HorizontalScrollabout from "@/components/Horizontalabout";

const about = () => {
  return (
    <div className="w-[100%]">
      <div className="relative w-full h-[50vh]">
        <Image
          src={
            "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244282/abotone_iwe3fd.webp"
          }
          alt={`nvjd`}
          fill={true}
          className="object-cover"
        />
        <div className="text-center absolute z-10 md:w-200 top-30  md:top-30 md:left-80">
          <h2 className="md:text-5xl text-3xl my-5 font-semibold md:font-bold">
            A story about two lovers
          </h2>
          <p className="md:text-lg md:font-semibold">
            Since 1963, we’ve pioneered the creation of beautiful clothing and
            footwear for all the family.
          </p>
        </div>
      </div>
      <div className="h-60 m-2 flex items-center flex-col justify-center gap-2">
        <h2 className="md:text-5xl text-3xl font-medium">SABINA</h2>
        <div className="flex flex-col items-center text-center font-medium md:text-2xl justify-center">
          <p>
            “Our prime aim: to conceive commodities that will delight you and
            <span className="md:hidden">
              &nbsp;accompany you for numerous years.”
            </span>
          </p>
          <p className="hidden md:block">accompany you for numerous years.”</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mx-8 gap-5">
        <div>
          <div className="relative w-full md:h-[80vh] h-70">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244318/abouttwo_qraakq.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div>
          <div className="md:h-[45vh] flex flex-col md:text-lg  md:gap-4 text-gray-600">
            <h2 className="md:text-4xl text-2xl text-black font-bold ">Who we are?</h2>
            <p>
              At Sabina, we believe that eCommerce should be simple, elegant,
              and effective. Our template is designed to empower businesses of
              all sizes, providing a seamless platform to showcase products,
              tell your story, and connect with your customers. With a blend of
              modern design and intuitive functionality, Sabina sets the stage
              for you to build a stunning online store that captures your
              brand&apos;s essence and drives sales effortlessly.
            </p>
            <p>
              Our mission is to help entrepreneurs and businesses thrive in the
              digital world. With customizable layouts, responsive design, and
              built-in tools for growth, Sabina makes it easier than ever to
              create a shopping experience that stands out.
            </p>
          </div>
          <div className="relative w-full my-5 md:my-0 h-[35vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244344/aboutthree_mqowrj.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="md:my-20 my-5">
        <HorizontalScrollabout />
      </div>
      <div className="text-center text-gray-600 text-lg">Join us</div>
      <div className="text-center text-2xl font-semibold m-2">@sabinaline</div>
      <div className="grid md:grid-cols-2 gap-4 m-8">
        <div className="grid grid-rows-2 gap-4">
          <div className="relative w-full h-[50vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244365/about4_xk6hed.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-[50vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244389/about6_lrvni1.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative w-full h-[50vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244408/about5_cmthae.jpg"
              }
              alt={`nvjd`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-[50vh]">
            <Image
              src={
                "https://res.cloudinary.com/dbycjhhke/image/upload/v1755244428/about7_l38ien.jpg"
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

export default about;
