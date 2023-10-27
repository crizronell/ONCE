"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { CarouselData } from "./CarouselData";

function Banner() {
  return (
    <>
      <div className="  pt-[75px] pb-[55px] px-0 bg-bg3">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            perPage: 2,
            autoplay: true,
            interval: 1000,
            padding: "1rem",
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label="Ready To Be">
          {CarouselData.map((item) => (
            <SplideSlide key={item.id} className="max-w-[650px] ">
              <div className="relative aspect-video  ">
                <Image
                  fill
                  priority
                  quality={100}
                  alt="Carousel"
                  src={item.img}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default Banner;
