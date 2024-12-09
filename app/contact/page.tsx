import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import Header from "../Components/Header";


function page() {
  return (
    <><Header /><section className="flex flex-col min-h-screen justify-between items-center w-full">

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
              Contact
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home &gt;{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="min-h-screen flex justify-center items-center md:mt-20 px-20">
        <div className="w-full max-w-[1440px]">
          <h1 className="text-center font-poppins font-bold text-[36px] leading-[54px] text-[#000000]">
            Get In Touch With Us
          </h1>
          <p className="text-center font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] mt-4 mb-8">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
          <br /><br />

          <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
            {/* Contact Details */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center space-x-4 my-6">
                <div>
                  <span className='flex'>
                    <IoLocationSharp size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold text-xl ml-4">Address</h3>
                  </span>
                  <p className='ml-10'>
                    238 5<sup>th</sup> SE Avenue,
                    <br /> New York NY10000,
                    <br /> United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 my-6">
                <div>
                  <span className='flex'>
                    <FaPhoneAlt size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold ml-4 text-lg">Phone</h3>
                  </span>
                  <p className='ml-10'>Mobile : +(84)546-6789</p>
                  <p className='ml-10'>Hotline : +(84)546-6789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 my-6">
                <div>
                  <span className='flex'>
                    <BsFillClockFill size={25} className="text-4xl text-primary" />
                    <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
                  </span>
                  <p className='ml-10'>Monday-Friday: 9:00 -
                    <br />22:00</p>
                  <p className='ml-10'>Saturday-Sunday: 9:00 -
                    <br />21:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-[435px] mt-8 order-2">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="ABC"
                    className="w-full p-3 border-[1px] bg-[#FFFFFF] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Abc@def.com"
                    className="w-full p-3 border-[1px] bg-[#FFFFFF] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="This is an optional"
                    className="w-full p-3 border-[1px] bg-[#FFFFFF] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hey! I would like to ask about"
                    rows={3}
                    className="w-full p-3 border-[1px] bg-[#FFFFFF] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-[237px] py-2 h-[48px] px-2 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] leading-[24px]"
                >
                  Submit
                </button>
              </form>
              <br />
              <br />

            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="flex flex-col md:flex-row justify-around items-center mt- pt-12 mb-6 w-full px-48 pl-44 bg-[#faf4f4] h-[300px] md:h-[300px]">
          <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
              Free Delivery
            </h1>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
              For all oders over $50, consectetur <br /> adipim scing elit.
            </p>
          </div>

          <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
              90 Days Return
            </h1>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
              If goods have problems, consectetur <br /> scing elit.
            </p>
          </div>

          <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
              Secure Payment
            </h1>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
              100% secure payment, consectetur <br /> adipim scing elit.
            </p>
          </div>
        </div>

      </div>
    </section></>
  );
};

export default page;