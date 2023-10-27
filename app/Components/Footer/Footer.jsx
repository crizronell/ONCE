import React from "react";
import { FooterDetails } from "./FooterDetails";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className=" text-black bottom-10 md:left-14 fixed   z-[9999999]">
        <div className="flex md:flex-col  ">
          {FooterDetails.map((item) => (
            <div
              key={item.id}
              className="m-[1rem]  hover:translate-x-4 ease-in duration-500  ">
              <Link target="_blank" href={item.link}>
                {item.icons}
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
