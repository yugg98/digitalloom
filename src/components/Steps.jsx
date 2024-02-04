import React from "react";

const Steps = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <div className=" my-20 max-w-full overflow-hidden">
        <div className="grid my-8 md:grid-cols-2 mx-8  md:gap-x-10 justify-center items-center">
          <div className="md:order-2 mx-auto">
            <img
              src="/vision.jpg"
              className="rounded-lg max-w-sm"
              alt=""
              srcset=""
            />
          </div>
          <div className="md:order-1">
            <p className="md:text-4xl text-3xl mt-6 font-semibold">Vision</p>
            <p className="text-gray-500 md:text-md text-base mt-2">
              The Digital Loom Inc. is to be the unrivaled enabler of growth for
              organizations, regardless of size, by offering top-tier IT
              staffing and comprehensive IT-enabled services. We aim to be the
              preferred partner in digital transformation, technology
              integration, software development, and the creation of
              cutting-edge technology processes. Through our expertise in AI and
              ML, we envision creating an ecosystem where innovation thrives,
              empowering companies to achieve unparalleled success through
              optimized talent and transformative solutions.
            </p>
          </div>
        </div>
        <div className="grid my-8 md:grid-cols-2 mx-8  md:gap-x-10 justify-center items-center">
          <div className="mx-auto">
            <img
              src="/mission.jpg"
              className="rounded-lg max-w-sm"
              alt=""
              srcset=""
            />
          </div>
          <div className="">
            <p className="md:text-4xl text-3xl font-semibold mt-6"> Mission</p>
            <p className="text-gray-500 md:text-md text-base mt-2">
              We aim to provide meticulously curated IT staffing solutions,
              delivering ready and developed talent perfectly suited for diverse
              roles. We catalyze growth by empowering companies with the right
              people and technology, driving exceptional productivity and
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
