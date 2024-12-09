import Image from "next/image";
import React from "react";

const AsguardSofa = () => {
  return (
    <div className="bg-[#fff9e5] min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] items-center w-full max-w-6xl mx-auto">
        

        {/* Image */}
        <div className="flex justify-end items-center">
          <div className="rounded-lg  w-full max-w-[500px] md:max-w-[863px] sm:mx-auto">
            <Image
              src="/sofa_4.png"
              alt="Rocket Single Seater"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        <div className="text-center font-poppins font-medium text-[24px] text-[#000000] md:text-left flex justify-center items-center flex-col  gap-4">
            <h3>New Arrivals</h3>
          <h1 className="text-4xl font-poppins text-[48px] md:text-[64px] font-bold text-[#000000] leading-tight">
           Asguard sofa
          </h1>
          <button className="border border-black py-4 px-12 ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default AsguardSofa;