"use client";

import React from "react";
import { submitprod } from "@/actions/addprod";
import { useRouter } from "next/navigation";

const Addproduct = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8 m-16">
        <h2 className="text-2xl font-bold text-center mb-6">Sell a Product</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const res = await submitprod(formData);
            if (res.success) {
              router.push("/sell");
            }
          }}
          encType="multipart/form-data"
          className="space-y-5"
        >
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="product_name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Price (₹)</label>
            <input
              type="number"
              name="price"
              step="0.01"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Color</label>
            <input
              type="text"
              name="color"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a category</option>
              <option>Women</option>
              <option>Men</option>
              <option>Bags</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Product Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
