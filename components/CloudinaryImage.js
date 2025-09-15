"use client";
import { CldImage } from "next-cloudinary";

export default function CloudinaryImage({ src }) {
  return (
    <CldImage
      src={src}
      width="500"
      height="500"
      crop={{ type: "auto", source: true }}
      alt="Cloudinary image"
    />
  );
}
