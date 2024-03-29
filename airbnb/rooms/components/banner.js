import React from "react";
import Image from "next/legacy/image";

export function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600] 2xl:h-[700px]">
      <Image alt="mi" src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" loading="eager" priority={true} />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not Sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shdow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I`m flexible
        </button>
      </div>
    </div>
  );
}
