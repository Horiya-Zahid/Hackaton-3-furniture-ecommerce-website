import React from 'react';
import Image from 'next/image';
import Header from './Header'

const Hero = () => {
  return (
    <><div className='bg-[#FBEBB5]'>
      <Header />
    </div><div className='bg-[#FBEBB5] w-full h-[900px] flex items-center justify-between'>
        <div className='pl-[202px]'>
          <h1 className='font-medium text-[64px] whitespace-nowrap'>Rocket Single</h1>
          <h1 className='font-medium text-[64px]'>Seater</h1>
          <h2 className='text-3xl font-medium pt-5 underline text-[#000000] mt-1'>Shop Now</h2>
        </div>
        {/* Image */}
        <div className='w-[853px] h-[1000px]'>
          <Image
            src="/sofa.png"
            alt="Hero Image"
            width={853}
            height={1000}
            className="transform scale-x-[-1]" />
        </div>
      </div></>
  );
};

export default Hero;
