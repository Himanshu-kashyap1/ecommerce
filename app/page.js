import Image from "next/image";
import Card from "@/components/Card";
import HorizontalScrollBlur from "@/components/Horizontal";
import OneInput from "@/components/OneInput";
import Link from "next/link";
import CloudinaryImage from "@/components/CloudinaryImage";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });


  async function getCartItems() {
    const res = await fetch("http://localhost:3000/api/cartitems", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  }

  const products = await res.json();
  const cartItems = await getCartItems();

  return (
    <>
      
      {/* <Navbar item={cartItems}/> */}
      <div className="md:h-20 relative" />
      <div className="z-50 h-10 fixed w-30 bottom-5 right-10">
        sell products?
        <Link href={"/sell"} className="text-blue-7000">
          click here
        </Link>
      </div>
      {/* <CloudinaryImage src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755196744/about4_urszuv.jpg" /> */}
      {/* <Image src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755196744/about4_urszuv.jpg" alt="hjuf" height={100} width={100}/> */}
      <div
        className={`md:min-h-[97vh] min-h-150 contain-strict flex items-center rounded-lg relative md:mb-20`}
      >
        <Image
          src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755232451/BG1_nj28yk.avif"
          alt="bg1"
          width={1430}
          height={700}
          className="absolute"
        />
        <h1 className="z-10 absolute md:top-10 md:text-6xl text-4xl top-30 left-5 text-white font-bold md:left-10">
          STYLE REDEFINED, EFFORTLESSLY YOURS
        </h1>
        <div className="z-10 absolute md:bottom-10 bottom-10 flex md:gap-4 gap-1 flex-col md:flex-row items-center text-white left-5 md:left-10">
          <Link href={"shop"}>
            <button className="md:px-10 py-2 px-5 rounded-4xl font-medium md:text-lg text-black bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              Shop collection
            </button>
          </Link>
          <h2 className="font-medium md:text-lg">Wear like a Pro</h2>
        </div>
      </div>
      <section className="min-h-screen md:m-5 m-4">
        <div>
          <h2 className="md:text-3xl text-2xl  font-medium">New Arrivals</h2>
          <div className="md:flex justify-between">
            <p className="md:my-2 my-1">
              Shop the Latest Styles: Stay ahead of the curve with our newest
              arrivals
            </p>
            <Link href={"shop"}>
              <div className="block mx-30 group cursor-pointer my-4 md:m-0">
                <span className="md:text-lg text-center font-semibold">
                  All Products
                </span>
                <div className="h-[1.5px] bg-black transition-transform duration-500 ease-in-out origin-right scale-x-100 md:scale-x-40 md:group-hover:scale-x-100"></div>
              </div>
            </Link>
          </div>
          <Card
            detail={products}
            hClass="md:h-155 h-100"
            innerHClass="md:h-145 h-90"
            wid="md:w-172 w-100"
          />
        </div>
      </section>
      <section className="my-10 flex flex-col items-center justify-center py-10 bg-gray-100">
        <p className="text-xl p-5 mix-blend-darken">⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </p>
        <p className="md:text-2xl text-xl text-center px-3 font-semibold">
          &quot;I love the variety of styles and the high-quality clothing on
          this web fashion site.&quot;
        </p>
        <p className="text-lg md:p-5">- Some & Co</p>
        <HorizontalScrollBlur />
      </section>
      <section className="m-8">
        <h2 className="text-center text-2xl font-semibold m-1 mt-20">
          Our collections
        </h2>
        <p className="text-center">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>
        <div className="grid md:grid-cols-2 grid-rows-2 md:h-screen h-auto md:gap-4 my-8 ">
          <div className="group rounded-xl mb-5 bg-[#f5f5f5] cursor-pointer">
            <div className="md:h-55 p-10 text-2xl">Women collection</div>
            <div className="md:h-150 h-90 w-full rounded-xl relative  overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755233603/women_jvyboq.avif"
                alt="jfe"
                fill={true}
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 md:h-screen md:gap-4 m-0">
            <div className="group rounded-xl bg-[#f5f5f5] cursor-pointer">
              <div className="md:h-20 md:p-10 p-5 text-xl md:text-2xl">
                Man collection
              </div>
              <div className="md:h-80 h-50 w-full relative rounded-b-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755244008/man_dlzwja.avif"
                  alt="jfe"
                  fill={true}
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
            <div className="group rounded-xl bg-[#f5f5f5] mt-5 cursor-pointer">
              <div className="h-20 p-10 text-2xl">Bags</div>
              <div className="md:h-80 h-40 w-full relative rounded-b-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755244076/bag_btsy75.avif"
                  alt="jfe"
                  fill={true}
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-10 rounded-lg">
        <div className="m-8 grid md:grid-cols-2  rounded-lg bg-[#f5f5f5]">
          <div className="px-10 py-20">
            <p className="md:text-3xl text-2xl">
              Join our newsletter. Enjoy big
            </p>
            <p className="md:text-3xl text-2xl">discounts.</p>
            <p className="my-3">Hear what they say about us</p>
            <OneInput />
          </div>
          <div className="h-80 md:w-full w-74 relative rounded-b-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dbycjhhke/image/upload/v1755244114/inputside_tdkvu7.avif"
              alt="jfe"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
