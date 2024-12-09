
import Image from "next/image";

const InstagramBanner = () => {
  return (
    <div className="relative bg-[#FAF4F480] w-full h-[450px] py-20 px-6 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/insta.png" 
          alt="Background"
          className="w-full h-full object-cover "
          width={1000}
          height={1000}
        />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-[60px] font-bold text-black mb-2">Our Instagram</h1>
        <p className="text-black font-poppins font-normal text-[20px] text-lg mb-6">
          Follow our store on Instagram
        </p>
        <button className="px-6 py-3 w-[225px] h-[40px] bg-white text-black font-semibold rounded-[50px] shadow-md hover:bg-gray-100">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default InstagramBanner;
