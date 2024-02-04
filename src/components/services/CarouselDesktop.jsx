'use client'
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function CarouselDesktop() {
	const [activeIndex, setActiveIndex] = useState(0);

	const totalSlides = 10;

	const swiperRef = useRef(null);

	const handlePrev = () => {
		if (!swiperRef.current) return;
		// @ts-ignore
		swiperRef.current.slidePrev();
	};

	const handleNext = () => {
		if (!swiperRef.current) return;
		// @ts-ignore
		swiperRef.current.slideNext();
	};

	useEffect(() => {
		return () => {
			swiperRef.current = null;
		};
	}, []);
	useEffect(() => {
		return () => {
			swiperRef2.current = null;
		};
	}, []);

	const swiperRef2 = useRef(null);

	const [activeIndex2, setActiveIndex2] = useState(0);

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
		"/wf.jpg",
		"/mi.jpg",
		"/cons.jpg",
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
			id: 8,
			heading: "Privacy & Cyber Security",
			image: "/insight10.png",
			topic: "Business Use Cases",
			content:
				"Delve into the critical topics of privacy and digital infrastructure, understanding the challenges and opportunities presented by emerging technologies in a connected world.",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 9,
			heading: "Full Stack Development",
			image: "/insight10.png",
			topic: "Business Use Cases",
			content:
				"Delve into the critical topics of privacy and digital infrastructure, understanding the challenges and opportunities presented by emerging technologies in a connected world.",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		},
		{
			id: 10,
			heading: "Blockchain Development",
			image: "/insight10.png",
			topic: "Business Use Cases",
			content:
				"Delve into the critical topics of privacy and digital infrastructure, understanding the challenges and opportunities presented by emerging technologies in a connected world.",
			link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
		}
	];

	return (
		<div className="pt-12">
			

			<div className="hidden lg:flex h-[75vh] max-h-screen">
				<Swiper
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={5}
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
					loopedslides={2}
					loop={true}
					onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
					//   @ts-ignore
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
								index !== activeIndex2
									? ""
									: "rounded-[6px] border-[1px] border-blue-700 p-[14px] bg-gray-100 bg-[url('/carousalgradient.svg')] bg-right-bottom bg-fixed bg-no-repeat h-full"
							}`}
							style={{
								backgroundColor: `${index === activeIndex2 ? "#f4f4f4" : ""}`,
							}}
						>
							<img
								src={slide}
								className={` w-full h-auto ${
									index === activeIndex2 && "rounded-lg"
								}`}
							/>
							{index == activeIndex2 && data[activeIndex2] && (
    <div className="text-center mt-[2rem] flex flex-row justify-center  items-center">
        <div className="flex flex-col gap-[0.5rem]">
            <p className="text-blue-700 text-[24px] font-[700]">
                {data[activeIndex2].heading}
            </p>
            <p className="text-black text-[14px] font-[400]">
                {data[activeIndex2].content}
            </p>
            <div
                className="underline underline-offset-4 text-black pb-[12px]"
                onClick={() => window.open(data[activeIndex2].link, "_blank")}
            >
                Know More
            </div>
        </div>
    </div>
)}

						</SwiperSlide>
					))}

					{/*  */}
				</Swiper>
				<div className="relative right-[65%] top-[23rem]">
					<div className="absolute z-40 flex justify-between w-[30vw]">
						<div
							onClick={handlePrev2}
							className="justify-center flex flex-col border-[1px] rounded-full p-[0.4rem] cursor-pointer border-blue-700"
						>
							<IoIosArrowBack size={30} className="text-blue-700 " />
						</div>
						<div
							onClick={handleNext2}
							className="justify-center flex flex-col border-[1px] cursor-pointer rounded-full p-[0.4rem] border-blue-700"
						>
							<IoIosArrowForward size={30} className="text-blue-700 " />
						</div>
					</div>
				</div>
			</div>

			<div className="flex sm:hidden overflow-hidden h-[95vh]">
				<Swiper
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1}
					initialSlide={2}
					coverflowEffect={{
						slideShadows: false,
						rotate: 0,
						depth: 10,
						stretch: 0,
					}}
					modules={[EffectCoverflow]}
					className="w-[90%] h-fit p-0 mx-auto"
					roundLengths={true}
					spaceBetween={0}
					// @ts-ignore
					loopedslides={2}
					loop={true}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					//   @ts-ignore
					onSwiper={(swiper) => (swiperRef.current = swiper)}
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
									: "rounded-[6px] border-[1px] border-[#7F8B83] p-[14px] bg-gray-200 bg-[url('/carousalgradient.svg')] bg-right-bottom bg-fixed bg-no-repeat h-fit"
							}`}
							style={{
								backgroundColor: `${index === activeIndex ? "#f4f4f4" : ""}`,
								paddingBottom: "2rem",
							}}
						>
							<img
								src={slide}
								className={` w-full sm:h-auto h-[56%] ${
									index === activeIndex && "rounded-lg"
								}`}
							/>
							{index == activeIndex && (
								<div className="text-center mt-[2rem] flex flex-row justify-center  items-center">
									<div className="flex flex-col gap-[0.5rem]">
										<p className="text-blue-700 text-[24px] font-[700]">
											{data[activeIndex].heading}
										</p>
										<p className="text-blue-700 text-[14px] font-[400]">
											{data[activeIndex].content}
										</p>
										<div
											className="underline underline-offset-4 text-black"
											onClick={() =>
												window.open(data[activeIndex].link, "_blank")
											}
										>
											Read More
										</div>
									</div>
								</div>
							)}
						</SwiperSlide>
					))}

					{/*  */}
				</Swiper>
				<div className="relative right-[75%] top-[90vh]">
					<div className="absolute z-40 flex justify-between w-[50vw]">
						<div
							onClick={handlePrev}
							className="justify-center flex flex-col border-[1px] rounded-full p-[0.4rem] cursor-pointer border-[#46DE84]"
						>
							<IoIosArrowBack size={20} className="text-[#46DE84] " />
						</div>
						<div
							onClick={handleNext}
							className="justify-center flex flex-col border-[1px] cursor-pointer rounded-full p-[0.4rem] border-[#46DE84]"
						>
							<IoIosArrowForward size={20} className="text-[#46DE84] " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
