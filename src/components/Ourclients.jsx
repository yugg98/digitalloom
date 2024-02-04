"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

 const Ourclients = () => {
  return (
    <div id="clients" className="grid md:grid-cols-2 py-20 max-w-6xl mx-auto justify-center items-center">
      <div className="mx-auto  mb-8 md:px-16 px-6 lg:px-8 max-w-3xl  ">
        <h2 className="mb-4 mt-6 text-3xl font-extrabold text-black md:text-4xl">
          Our Clients and Partners
        </h2>
        <p className="mx-auto mt-4 max-w-[528px] text-black">
          We’ve collaborated and helped many companies succeed in the
          <span className="text-blue-400 font-bold"> Web3.0 </span>space
        </p>
      </div>
      <div>
       <img className="w-full " src="/map.png" alt="" srcset="" />
      </div>
    </div>
  );
};
export default Ourclients