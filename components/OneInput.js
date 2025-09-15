"use client";
import React, { useState,useMemo } from "react";
import { submitEmail } from "@/actions/submitEmail";
import { useSession, signIn } from "next-auth/react";

const OneInput = () => {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    if (!session) {
      signIn(); // redirect to sign in if not logged in
      return;
    }

    if (submitted) return; // prevent multiple submissions

    const res = await submitEmail(formData);

    if (res.success) {
      setSubmitted(true);
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  return (
    <form action={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        id="email"
        className="bg-gray-400 rounded-lg md:w-[50%] h-10 p-2 mr-5 mb-2"
        required
      />
      <button
        type="submit"
        disabled={!session || submitted}
        className={`p-2 rounded-xl px-4 cursor-pointer ${
          submitted ? "bg-green-500" : "bg-black text-white"
        }`}
      >
        {submitted ? "Thank You" : "Sign In"}
      </button>
    </form>
  );
};

export default OneInput;
