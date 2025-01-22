import Header from '@/app/Components/Header'
import  client  from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
import product from '@/sanity/schemaTypes/product';
// import Image from 'next/image';
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'




const page = async ({params:{id}}:{params:{id:string}}) => {
const query = `*[_type == "product" && _id == $id]{
name,
price,
description,
category,
"image":image.asset._ref,
"id":_id
}[0]`
    const products:Product | null = await client.fetch(query, {id})

    if(!products){
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }

  return (
    <div key={products.id}>
        <div className="overflow-x-hidden">
      {/* Updated Header with better responsiveness */}
      <Header />
     
      {/* <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px] md:w-[200px]">
           
              <Image
                key={product.id}
                src={urlFor(product.image).url()}
                alt={product.name}
                height={120}
                width={120}
                className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-yellow-100 lg:w-[200px] lg:h-[180px]"
              />
         
          </div> */}
         

          {/* Right Side: Product Details */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-medium">{product.name}</h3>
            {/* <p className="text-lg sm:text-xl text-gray-500">{product.price}</p> */}
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base">(5 Customer Reviews)</span>
            </div>
            {/* <p className="mt-4 text-gray-700 text-sm sm:text-base">{product.description}</p> */}

            {/* Size Options */}
            {/* <div className="mt-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex gap-4 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Color Options */}
            {/* <div className="mt-4">
              <h4 className="font-semibold">Color</h4>
              <div className="flex gap-2 mt-2">
                {colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full h-5 w-5 ${color}`}
                  ></div>
                ))}
              </div>
            </div> */}

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center border p-2 gap-4">
                <button aria-label="Decrease quantity">-</button>
                <span>1</span>
                <button aria-label="Increase quantity">+</button>
              </div>
              {/* <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                Add To Cart
              </button> */}
            </div>

            <hr className="my-6" />

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>SS001</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Category:</span>
                <span>{product.category}</span>
              </div> */}
              <div className="flex justify-between">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Share:</span>
                <div className="flex space-x-2">
                  <BsFacebook className="cursor-pointer" size={25} />
                  <FaLinkedin className="cursor-pointer" size={25} />
                  <FaTwitter className="cursor-pointer" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8" />

        </div>
   
    
  )
}

export default page