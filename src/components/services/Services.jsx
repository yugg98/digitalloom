"use client";
import CarouselDesktop from "./CarouselDesktop";
import CarouselTablet from "./CarouselTablet";

export default function Carousel() {
  const screenWidth = typeof window !== "undefined" && window?.innerWidth;

  if (screenWidth <= 640 || screenWidth >= 1024) {
    return (
      <div className="">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Our Competitive Edge
          </h1>
        </div>
        <CarouselDesktop />
      </div>
    );
  }
  if (screenWidth < 1024 || screenWidth > 640) {
    return (
      <div className="bg-black ">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Our Competitive Edge
          </h1>
        </div>
        <CarouselTablet />
      </div>
    );
  }
}
