import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserFromToken } from "@/actions/submitLogin";
import clientPromise from "@/lib/db";

export async function POST(req) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  // ✅ decode token to get actual user
  const user = await getUserFromToken(token);
  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid Token" }), {
      status: 401,
    });
  }

  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("ecommercedbb");

  // Find if product already exists in user's cart
  const existingUser = await db
    .collection("users")
    .findOne({ email: user.email });

  if (!existingUser) {
    // User not found, create new with cart
    await db.collection("users").updateOne(
      { email: user.email },
      {
        $set: { updatedAt: new Date() },
        $setOnInsert: { cart: [] },
        $push: {
          cart: {
            productId: body.idnum,
            quantity: body.quantity,
            addedAt: new Date(),
          },
        },
      },
      { upsert: true }
    );
  } else {
    const existingItemIndex = existingUser.cart.findIndex(
      (item) => item.productId === body.idnum
    );

    if (existingItemIndex > -1) {
      // Item exists, update quantity
      existingUser.cart[existingItemIndex].quantity += body.quantity;
      await db
        .collection("users")
        .updateOne(
          { email: user.email, "cart.productId": body.idnum },
          {
            $set: {
              "cart.$.quantity": existingUser.cart[existingItemIndex].quantity,
              updatedAt: new Date(),
            },
          }
        );
    } else {
      // Item does not exist, push new
      await db
        .collection("users")
        .updateOne(
          { email: user.email },
          {
            $push: {
              cart: {
                productId: body.idnum,
                quantity: body.quantity,
                addedAt: new Date(),
              },
            },
            $set: { updatedAt: new Date() },
          }
        );
    }
  }

  return NextResponse.json({
    success: true,
    message: "Cart updated",
    data: body,
  });
}
