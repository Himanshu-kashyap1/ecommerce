"use server";
import clientPromise from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET;

// ✅ Generate JWT
function generateToken(user) {
  return jwt.sign(
    { id: user._id?.toString(), email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

// ✅ Set cookie
function setAuthCookie(token) {
  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600, // 1h
    path: "/",
  });
}

export async function submitLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email) return { success: false, message: "Email is required" };
  if (!password) return { success: false, message: "Password is required" };
  try {
    const client = await clientPromise;
    const db = client.db("ecommercedbb");
    const collection = db.collection("users");
    const existing = await collection.findOne({ email });
    if (!existing) {
      return { success: false, message: "User not found" };
    }
    if (existing.password !== password) {
      return { success: false, message: "Invalid credentials" };
    }

    const token = generateToken(existing);
    setAuthCookie(token);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Database error" };
  }
}
export async function submitSignup(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const cpassword = formData.get("cpassword");
  if (!email) return { success: false, message: "Email is required" };
  if (!password) return { success: false, message: "Password is required" };
  if (password !== cpassword) {
    return { success: false, message: "Passwords do not match" };
  }

  try {
    const client = await clientPromise;
    const db = client.db("ecommercedbb");
    const collection = db.collection("users");

    const existing = await collection.findOne({ email });
    if (existing) {
      return { success: false, message: "Already exists" };
    }

    await collection.insertOne({
      email,
      password,
      createdAt: new Date(),
      cart: [],
    });

    const token = generateToken({ ...newUser, _id: result.insertedId });
    setAuthCookie(token);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Database error" };
  }
}


// 🔹 Verify user from JWT cookie
export async function getUserFromToken() {
  const token = cookies().get("token")?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, SECRET_KEY);
  } catch {
    return null;
  }
}

// 🔹 Logout
export async function logoutAction() {
  cookies().delete("token");
}