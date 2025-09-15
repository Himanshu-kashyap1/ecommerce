"use server";
import clientPromise from "@/lib/db";

export async function submitEmail(formData) {
  const email = formData.get("email");
  if (!email) return { success: false, message: "Email is required" };

  try {
    const client = await clientPromise;
    const db = client.db("ecommercedbb");
    const collection = db.collection("email");

    const existing = await collection.findOne({ email });
    if (existing) {
      return { success: false, message: "Already submitted" };
    }

    await collection.insertOne({ email, createdAt: new Date() });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Database error" };
  }
}
