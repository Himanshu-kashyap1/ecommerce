"use client";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch, CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff, toggle } from "@/store/toggleSlice";
import { useData } from "@/app/providers/DataProvider";
import Cartitems from "./Cartitems";

const Navbar = ({ item }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartRef = useRef(null);
  const isOn = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();
  const data = useData();
  useEffect(() => {
    function handleClickOutside(event) {
      // if click is outside cart
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch(turnOff());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (pageHeight > viewportHeight) {
        const scrollPercent = (scrollY / viewportHeight) * 100;
        setScrolled(scrollPercent >= 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`${
        scrolled && "bg-white"
      } transition-colors  duration-300 ease-in-out flex justify-between h-15 md:h-auto font-medium w-[370px] sm:w-[750px] items-center md:w-full backdrop-blur-xs md:p-6  fixed z-50 right-0 left-0`}
    >
      {/* Left: Hamburger on mobile */}
      <div className="flex items-center gap-4 pl-2 text-lg">
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <CiMenuBurger />
        </button>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center p-4 space-y-2">
              <li>
                <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Center: Logo */}
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">SABINA</h1>
        </Link>
      </div>

      {/* Right: Search, Cart, Profile */}
      <div className="flex items-center gap-4 px-5 relative">
        <CiSearch className="text-3xl cursor-pointer" />
        <div
          onClick={() => dispatch(turnOn())}
          className="relative cursor-pointer"
        >
          <CiShoppingCart className="text-3xl" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {data.length}
          </span>
        </div>
        <div>
          <Link href="/loginsignup">
            <div>Login</div>
          </Link>
        </div>
        {isOn && (
          <div
            ref={cartRef}
            className="absolute z-50 h-160 w-150 top-[30px] right-0 rounded-2xl p-5 bg-gray-200 overflow-y-scroll scroll-smooth scrollbar-hide"
          >
            <Cartitems />
            <Link href="/cartpage" onClick={() => dispatch(turnOff())}>
              <div className="text-center border rounded-xl p-2 font-semibold bg-blue-500 text-white">Go to Cart</div>
            </Link>
            <div className="fixed bg-gray-200 rounded-full top-15 right-8">
              <button onClick={() => dispatch(turnOff())} className="cursor-pointer">
                <IoIosClose size={40}/>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
