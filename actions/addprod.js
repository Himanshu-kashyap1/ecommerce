"use server";

import cloudinary from "@/lib/cloudinary";
import clientPromise from "@/lib/db";

export async function submitprod(formData) {
  const name = formData.get("product_name");
  const description = formData.get("description");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  const color = formData.get("color");
  const category = formData.get("category");
  const imageFile = formData.get("image");

  if (!name) return { success: false, message: "Name is required" };
  if (!description)
    return { success: false, message: "Description is required" };
  if (!price) return { success: false, message: "Price is required" };
  if (!quantity) return { success: false, message: "Quantity is required" };
  if (!color) return { success: false, message: "Color is required" };
  if (!category) return { success: false, message: "Category is required" };
  if (!imageFile) return { success: false, message: "Image is required" };

  try {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    const { secure_url } = uploadResult;

    const client = await clientPromise;
    const db = client.db("ecommercedbb");
    const collection = db.collection("store");
    const total = await collection.countDocuments();

    await collection.insertOne({
      name: name,
      total: total + 1,
      desc: description,
      price: price,
      quantity: quantity,
      color: color,
      category: category,
      alt: name,
      image: secure_url,
      createdAt: new Date(),
    });

    return { success: true, message: "Product submitted successfully" };
  } catch (error) {
    console.error("Submit Product Error:", error);
    return { success: false, message: "Database or upload error" };
  }
}
