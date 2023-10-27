"use client";
import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div
        className="fixed top-10 right-20  cursor-pointer z-[9999999999]"
        onClick={toggle}>
        {!open ? (
          <AiOutlineMenu size={30} className="text-white" />
        ) : (
          <AiOutlineClose size={30} />
        )}
      </div>
      <div
        className={`bg-white fixed w-full  text-xl z-50
     ${
       open
         ? "translate-y-100 ease-in duration-300"
         : "-translate-y-full ease-in-out duration-300"
     }`}>
        <ul className="flex items-center justify-center flex-col h-screen  ">
          {NavbarLinks.map((item) => (
            <li
              className="m-[30px] leading-3 text-[31px]  tracking-wider hover:translate-x-6 hover:text-rose-600 ease-in duration-300 "
              key={item.id}
              onClick={toggle}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
