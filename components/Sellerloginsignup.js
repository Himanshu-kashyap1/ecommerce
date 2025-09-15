"use client";
import React from "react";
import { submitSellerLogin, submitSellerSignup } from "@/actions/submitsellerlogin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Sellerloginsignup = () => {
  const [login, setlogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const res = await submitSellerLogin(formData);

    if (res.success) {
      alert("Login successful");
      router.push("/sell");
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  const handleSubmitSignup = async (formData) => {
    const res = await submitSellerSignup(formData);

    if (res.success) {
      alert("Signup successful");
      router.push("/sell");
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="border w-xl mx-auto rounded  my-20">
        {login ? (
          <>
            <div className="px-5 my-10">
              <h1 className="p-4 text-center text-2xl font-semibold underline my-5">
                Login Form
              </h1>
              <form action={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="text">Username</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" cursor-pointer w-full bg-blue-500 border text-white p-2 rounded"
                >
                  Login
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="px-5">
              <h1 className="p-4 text-center text-2xl font-semibold underline my-5">
                Signup
              </h1>
              <form action={handleSubmitSignup} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="text">Username</label>
                  <input
                    type="text"
                    name="uname"
                    id="uname"
                    placeholder="Username..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Shop Name</label>
                  <input
                    type="text"
                    name="shop"
                    id="shop"
                    placeholder="Shop Name..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">GST Number</label>
                  <input
                    type="text"
                    name="gst"
                    id="gst"
                    placeholder="GST Number..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">AdharCard Number</label>
                  <input
                    type="number"
                    name="adhar"
                    id="adhar"
                    placeholder="AdharCard Number..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="text">Confirm Password</label>
                  <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password..."
                    className="border p-2 rounded block w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" cursor-pointer w-full bg-blue-500 border text-white p-2 rounded"
                >
                  Signup
                </button>
              </form>
            </div>
          </>
        )}
        <div className="text-center my-5">
          {login ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setlogin(!login)}
            className="cursor-pointer text-blue-500 underline"
          >
            {login ? "Signup" : "Login"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Sellerloginsignup;
