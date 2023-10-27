"use client";
import React, { useState } from "react";
import { MembersData } from "./MembersData";
import Image from "next/image";

function Members() {
  const [bg, setBg] = useState(1);
  return (
    <div className=" bg-gradient-to-r from-bg1  to-bg2 min-h-screen grid p-4 font-serif  ">
      <div className=" mx-auto ">
        {MembersData.map((item) => (
          <div key={item.id}>
            {bg === item.id && (
              <div className="relative">
                <div className=" w-fit absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-white font-extrabold text-xl xl:text-2xl ">
                  <p>{item.name}</p>
                  <p>{item.birthday}</p>
                </div>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={1000}
                  quality={100}
                  priority
                  className="rounded-3xl mx-auto m-4   "
                  placeholder="blur"
                />
              </div>
            )}
          </div>
        ))}
        <div className="grid grid-cols-template  gap-4 ">
          {MembersData.map((item) => (
            <div key={item.id}>
              <Image
                onClick={() => setBg(item.id)}
                src={item.img}
                alt="twice"
                quality={100}
                width={250}
                className="  rounded-xl cursor-pointer hover:opacity-50 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
