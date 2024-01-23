"use client";
import React from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Button from "./Button";
const Industries = () => {
  return (
    <div id="industries">
      <div className="border-0 mx-auto max-w-7xl px-4 sm:px-6 my-10 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-row-reverse">
          <div>
            <div className="grid grid-cols-3 overflow-hidden">
              <div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Education.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Education</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Finance.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Finance</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Healthcare.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Healthcare</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/HiTech.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">HiTech</p>
                </div>
              </div>
              <div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Logistics.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Logistics</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Manufacturing.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Manufacturing</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Media.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Media</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Oil.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Oil</p>
                </div>
              </div>
              <div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/RealEstate.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">RealEstate</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Retail.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Retail</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Travel.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear" alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Travel</p>
                </div>
                <div className=" flex hover:bg-white group transition-all duration-150 ease-linear cursor-pointer justify-center items-center flex-col p-8">
                  <img src="/logo/Utilities.svg" className="group-hover:scale-125 w-8 transition-all duration-150 ease-linear"  alt="icon1" />
                  <p className="my-4 text-gray-600 font-medium group-hover:scale-110 transition-all duration-150 ease-in-out">Utilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-10 my-12">
            <div>
              <h2 className="text-4xl font-lg font-semibold tracking-tight text-black sm:text-5xl">
                Delivering industry-focused legal solutions
              </h2>

              <p className="md:text-md mt-4 text-gray-600">
                Our team of legal experts collaborates with clients to
                understand their roadblocks and objectives, enabling us to
                develop legal solutions that are efficient and scalable for
                diverse industries.
              </p>
            </div>
            <div>
             <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
