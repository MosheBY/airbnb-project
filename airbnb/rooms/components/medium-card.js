import React from "react";
import Image from "next/legacy/image";

export function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
// className = "text-2xl mt-3";
