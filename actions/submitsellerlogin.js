"use server";
import clientPromise from "@/lib/db";

export async function submitSellerLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  return { success: true };
}
export async function submitSellerSignup(formData) {
  const user = formData.get("uname");
  const shop = formData.get("shop");
  const gst = formData.get("gst");
  const adhar = formData.get("adhar");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const password = formData.get("password");
  const cpassword = formData.get("confirmPassword");
  console.log(user, shop, gst, adhar, address, phone, password);
  return { success: true };
}
