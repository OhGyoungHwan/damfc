"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { ReactNode } from "react";

export default function Carousel({
  elements,
  spaceBetween = 8,
}: {
  elements?: ReactNode[];
  spaceBetween?: number;
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={"auto"}
      className="w-full"
    >
      {elements?.map((el, idx) => (
        <SwiperSlide
          key={`SwiperSlide${idx}`}
          className="z-0 py-3 first:pl-3 last:pr-3"
        >
          {el}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
