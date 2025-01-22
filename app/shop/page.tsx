// import { client } from '@/sanity/lib/client';

import Productlisting from '../Components/Productlisting';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../Components/Header';
import ShopLine from '../Components/shop-header';
import client from '@/sanity/lib/client';


// Fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image":image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const Shop = async () => {
  const products = await fetchProducts();

  return (
   <div>
    <Header />
    <div className="relative text-black">
          <Image
            src="/bg-shop.png" // Replace with the correct image file path
            alt="Shop Banner"
            height={400}
            width={1600}
            className="w-full h-40 md:h-auto object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
            Shop
          </h1>
          {/* Breadcrumb Section */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
            <p className="text-gray-700 text-xs md:text-xl flex items-center">
              <Link href="/" className="font-bold hover:underline">
                Home
              </Link>
              <span className="font-bold mx-2">{'>'}</span>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </p>
          </div>
        </div>
        {/* Shop Line Section */}
        <div className="my-6">
          <ShopLine />
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      
    {products.map((product:Product) =>(
    <Productlisting product={product} key={product.id} />
   ))}
   
   </div>
     {/* Next Page Button Section */}
     <div className='hidden md:flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-6'>
        <button className='bg-[#fbebb5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>1</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>2</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>3</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>Next</button>
      </div>
    
     {/* delivery section */}
     <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">Free Delivery</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">90 Days Return</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">If goods have problems, consectetur adipim scing elit.</p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">Secure Payment</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>

   </div>
  );
};

export default Shop;