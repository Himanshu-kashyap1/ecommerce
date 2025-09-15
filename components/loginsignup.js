"use client";
import React from "react";
import { submitLogin, submitSignup } from "@/actions/submitLogin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Loginsignup() {
  const [login, setlogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const res = await submitLogin(formData);

    if (res.success) {
      alert("Login successful");
      // Redirect to homepage or dashboard
      router.push("/");
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  const handleSubmitSignup = async (formData) => {
    const res = await submitSignup(formData);

    if (res.success) {
      alert("Signup successful");
      // Redirect to homepage or dashboard
      router.push("/");
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="border max-w-lg mx-auto rounded  my-20">
        {login ? (
          <>
            <div className="px-5">
              <h1 className="p-4 text-center text-2xl font-semibold underline my-5">
                Login Form
              </h1>
              <form action={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border p-2 rounded"
                  required
                />
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
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  className="border p-2 rounded"
                  required
                />
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
        <div className="text-center m-5">
          <p className="inline">
            {login ? "Don't have an account ? " : "Already have an account ? "}
          </p>
          <button
            onClick={() => setlogin(!login)}
            className="text-blue-600 cursor-pointer"
          >
            {login ? " signup" : " login"}
          </button>
        </div>
        <div className="text-center m-5">
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gray-800 p-2 text-white rounded cursor-pointer"
          >
            Continue with GitHub
          </button>
        </div>
      </div>
    </>
  );
}
