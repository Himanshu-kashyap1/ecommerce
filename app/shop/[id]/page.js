"use server"

import Oneproduct from "@/components/Oneproduct";
import React from "react";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  const product = await res.json();
  const { id } = params;
  let result = product.find((obj) => obj._id === id);

  // const { id } = await params;

  // const res = await fetch(`http://localhost:3000/api/products/${id}`, {
  //   cache: "no-store",
  // });

  // if (!res.ok) {
  //   return <h1 className="text-center mt-10">Product not found</h1>;
  // }

  // const product = await res.json();

  return (
    <div className="p-6">
      <div className="h-20" />
      <Oneproduct res={result} />
    </div>
  );
}
