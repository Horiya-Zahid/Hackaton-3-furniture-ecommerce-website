import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[100px]">
      <nav className="flex justify-between items-center ">
        {/* Navigation Links */}
        <ul className="flex justify-between items-center space-x-10 text-lg font-medium pt-[36px] pl-[505px]">
          <li className="cursor-pointer hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex justify-between space-x-6 text-2xl w-[247px] h-[28px] pt-[36px] pr-8">
          <Link href="/login">
            <TbUserExclamation className="cursor-pointer hover:text-gray-700" />
          </Link>
          <Link href="/search">
            <FiSearch className="cursor-pointer hover:text-gray-700" />
          </Link>
          <Link href="/favorites">
            <FiHeart className="cursor-pointer hover:text-gray-700" />
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="cursor-pointer hover:text-gray-700" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
