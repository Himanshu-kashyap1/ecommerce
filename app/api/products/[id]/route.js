// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/db";
// import { ObjectId } from "mongodb";

// export async function GET(request, { params }) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("ecommeredbb");
//     const collections = await db.collection("store");
//     const { id } = await params;

//     console.log("Incoming id:", id);

//     if (!ObjectId.isValid(id)) {
//       return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
//     }
//     const product = await collections.findOne({ _id: new ObjectId(id) });

//     console.log("Found product:", result);

//     // if (!product) {
//     //   return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     // }

//     return NextResponse.json(product);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Error fetching product" },
//       { status: 500 }
//     );
//   }
// }
