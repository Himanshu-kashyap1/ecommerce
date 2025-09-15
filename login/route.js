import clientPromise from "@/lib/db";
import { compare } from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  // if (!email || !password) {
  //   return new Response(JSON.stringify({ error: "All fields are required" }), {
  //     status: 400,
  //   });
  // }

  // const client = await clientPromise;
  // const db = client.db();

  // const user = await db.collection("users").findOne({ email });
  // if (!user)
  //   return new Response(JSON.stringify({ error: "Invalid credentials" }), {
  //     status: 401,
  //   });

  // const isValid = await compare(password, user.password);
  // if (!isValid)
  //   return new Response(JSON.stringify({ error: "Invalid credentials" }), {
  //     status: 401,
  //   });

  // Optionally, create a session via NextAuth credentials
  // Here we just return user data
  console.log(email, password);
  return new Response(
    JSON.stringify({
      success: true,
      user: { email: user.email, name: user.name },
    })
  );
}
