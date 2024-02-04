'use client'
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-coverflow";

const CarouselTablet = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const swiperRef = useRef(null);

	useEffect(() => {
		return () => {
			swiperRef.current = null;
		};
	}, []);
	useEffect(() => {
		if (swiperRef2.current) {
			const swiperInstance = swiperRef2.current ;
			swiperInstance.slideTo(262, 0); // Initialize slide position to 262px
		}
	}, []);

	const swiperRef2 = useRef(null);

	const handlePrev2 = () => {
		if (swiperRef2.current !== null) {
			// @ts-ignore
			swiperRef2.current.slidePrev();
		}
	};

	const handleNext2 = () => {
		if (swiperRef2.current !== null) {
			// @ts-ignore
			swiperRef2.current.slideNext();
		}
	};
	const slides = [
		"/insight1.png",
		"/insight2.png",
		"/insight3.png",
		"/insight4.png",
		"/insight5.png",
		"/insight6.png",
		"/insight7.png",
		"/insight8.png",
		"/insight9.png",
		"/insight10.png",
	];
	const data = [
		{
			id: 1,
			heading: "Workforce Solutions",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"Contingent Staffing | Direct Hire | RPO | Statement of Work 				",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 2,
			heading: "Managed IT Services",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"AI Chatbots | Blockchain | Business Analytics | Digital Transformation | Enterprise App Development | Enterprise Business Solutions				",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 3,
			heading: "Consulting and Strategy",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"Digital strategy development | Needs assessment and gap analysis | Roadmap for digital transformation",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 4,
			heading: "Technology Infrastructure",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"Cloud computing services | Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) | Modernizing legacy systems",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		
		{
			id: 5,
			heading: "E-commerce Solutions",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"Online storefront development | Payment gateway integration | Digital marketing strategies for e-commerce",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 6,
			heading: "Customer Experience (CX) Enhancement",
			image: "/wf.jpg",
			topic: "Business Use Cases",
			content:
				"ser experience (UI/UX) design | Customer journey mapping | Personalization and customer segmentation",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 7,
			heading: "Tokens & Coins",
			image: "/insight2.png",
			topic: "Business Use Cases",
			content:
				"Dive into the world of digital currencies, explore the potential for financial innovation, and embrace the future of money.",
			link: "https://youtube.com/watch?v=KCbTOxC7iLo",
		},
		{
			id: 10,
			heading: "Privacy & Cyber Security",
			image: "/insight10.png",
			topic: "Business Use Cases",
			content:
				"Delve into the critical topics of privacy and digital infrastructure, understanding the challenges and opportunities presented by emerging technologies in a connected world.",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		}
	];
	return (
		<div className="py-12">
			
			<div className="hidden sm:flex lg:hidden overflow-hidden h-[90vh] pt-4">
				<Swiper
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					initialSlide={2}
					coverflowEffect={{
						slideShadows: false,
						rotate: 10,
						depth: -20,
						modifier: 1,
						stretch: 1,
					}}
					modules={[EffectCoverflow]}
					className="w-full p-0 h-fit overflow-hidden"
					roundLengths={true}
					spaceBetween={20}
					// @ts-ignore
					loopedslides={3}
					loop={true}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					onSwiper={(swiper) => (swiperRef2.current = swiper)}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					pagination={{
						el: ".swiper-pagination",
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide
							key={slide}
							className={` ${
								index !== activeIndex
									? ""
									: "rounded-[6px] border-[1px] border-blue-200 p-[14px] bg-[#f4f4f4]  bg-right-bottom bg-fixed bg-no-repeat h-[50vh]"
							}`}
							style={{
								backgroundColor: `${index === activeIndex ? "#f4f4f4" : ""}`,
							}}
						>
							<img
								src={slide}
								className={` w-full h-auto ${
									index === activeIndex && "rounded-lg"
								}`}
							/>
							{index == activeIndex && (
								<div className="text-center mt-[2rem] flex flex-row justify-center  items-center">
									<div className="flex flex-col gap-[0.5rem]">
										<p className="text-[#81EBAA] text-[24px] font-[700]">
											{data[activeIndex].heading}
										</p>
										<p className="text-[#C3C5C4] text-[14px] font-[400]">
											{data[activeIndex].content}
										</p>
										{/* <div
											className="underline underline-offset-4 text-white pb-[12px]"
											onClick={() =>
												window.open(data[activeIndex].link, "_blank")
											}
										>
											Read More
										</div> */}
									</div>
								</div>
							)}
						</SwiperSlide>
					))}

					{/*  */}
				</Swiper>
				<div className="relative right-[75%] top-[23rem]">
					<div className="absolute z-40 flex justify-between w-[50vw]">
						<div
							onClick={handlePrev2}
							className="justify-center flex flex-col border-[1px] rounded-full p-[0.4rem] cursor-pointer border-[#46DE84]"
						>
							<IoIosArrowBack size={20} className="text-blue-700 " />
						</div>
						<div
							onClick={handleNext2}
							className="justify-center flex flex-col border-[1px] cursor-pointer rounded-full p-[0.4rem] border-[#46DE84]"
						>
							<IoIosArrowForward size={20} className="text-blue-700 " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselTablet;
