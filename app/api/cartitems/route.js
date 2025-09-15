import clientPromise from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromToken } from "@/actions/submitLogin";

export async function GET() {
  try {
    const cookieStore = await cookies();
    console.log("All cookies:", cookieStore.getAll());

    const token = cookieStore.get("token")?.value;
    console.log("Token from cookie:", token);
    // if (!token) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), {
    //     status: 401,
    //   });
    // }

    // const usersss = await getUserFromToken(token);
    // if (!usersss) {
    //   return new Response(JSON.stringify({ error: "Invalid Token" }), {
    //     status: 401,
    //   });
    // }

    const client = await clientPromise;
    const db = client.db("ecommercedbb");

    // 1️⃣ Get user's cart
    const user = await db
      .collection("users")
      .findOne(
        { email: "www.himanshu123kashyap@gmail.com" },
        { projection: { cart: 1, _id: 0 } }
      );

    const cart = user?.cart || [];
    if (cart.length === 0) {
      return Response.json([], { status: 200 });
    }

    // 2️⃣ Take only first occurrence of each product
    const seen = new Set();
    const uniqueCart = [];
    for (const item of cart) {
      if (!seen.has(item.productId)) {
        seen.add(item.productId);
        uniqueCart.push(item);
      }
    }

    const productIds = uniqueCart.map((item) => item.productId);

    // 3️⃣ Fetch products from store using 'total' field
    const products = await db
      .collection("store")
      .find({ total: { $in: productIds } })
      .toArray();

    // 4️⃣ Merge quantities from cart
    const productsWithQuantity = products.map((prod) => {
      const cartItem = uniqueCart.find((item) => item.productId === prod.total);
      return { ...prod, quantity: cartItem.quantity };
    });

    return Response.json(productsWithQuantity, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
