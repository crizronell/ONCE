import React from "react";
import Image from "next/image";
import { CarouselData } from "./CarouselData";

function BannerDetails() {
  return (
    <section className=" grid gap-4 p-4 sm:grid-cols-2  w-fit mx-auto ">
      {CarouselData.map((item) => (
        <div className="  h-full " key={item.id}>
          <div className="relative w-full  max-w-[768px] aspect-video  ">
            <Image
              className="rounded-xl  "
              src={item.img}
              fill
              quality={100}
              priority
              alt=""
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="text-justify mt-4 max-w-prose ">
            <h1 className="font-mono">{item.descr}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BannerDetails;
