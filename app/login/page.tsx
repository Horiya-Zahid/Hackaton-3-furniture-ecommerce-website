import React from 'react';
import Image from "next/image";
import Header from "../Components/Header";

const page = () => {
  return (
    <><div>
      <Header />

<div
  className="w-full h-[316px] bg-cover bg-center"
  style={{ backgroundImage: "url('/bg-shop.png')" }}>
  {/* Content above pic */}
  <div className="relative h-full flex items-center justify-center">
    {/* Blur Layer */}
    <div className="absolute inset-0 bg-gray-100 opacity-10 blur-[0.5px]"></div>


    <div className="relative text-center p-6 blur-[0.3px]">
      <Image
        src="/logo.png"
        alt="Image"
        width={77}
        height={77}
        className="ml-10" />
      <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
        My Account
      </h1>
      <div className="flex justify-center items-center">
        <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
          Home &gt;{" "}
        </p>
        <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
          My Account
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default page