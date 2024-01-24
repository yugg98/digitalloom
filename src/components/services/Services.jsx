'use client'
import CarouselDesktop from "./CarouselDesktop";
import CarouselTablet from "./CarouselTablet";

export default function Carousel() {
	const screenWidth = typeof window !== "undefined" && window?.innerWidth;

	if (screenWidth <= 640 || screenWidth >= 1024) {
		return (
			<div className=" mb-4">
				<CarouselDesktop />
			</div>
		);
	}
	if (screenWidth < 1024 || screenWidth > 640) {
		return (
			<div className="bg-black mb-4">
				<CarouselTablet />
			</div>
		);
	}
}
