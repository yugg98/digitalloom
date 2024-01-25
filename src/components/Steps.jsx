import React from "react";

const Steps = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 ">
      <div className=" my-20">
        <div className="grid my-8 md:grid-cols-2  md:gap-x-10 justify-center items-center">
          <div className="md:order-2 mx-auto">
            <img src="/img.svg" alt="" srcset="" />
          </div>
          <div className="md:order-1">
            <p className="md:text-4xl text-3xl font-semibold">Our Vision</p>
            <img src="/line.svg" className="my-4" alt="" srcset="" />
            <p className="text-gray-500 md:text-md text-base mt-2">
              From Conception to Realization: Forging the Route to Triumph
              <br />
              <br />
              Embark on your transformative "Conception to Realization"
              odyssey with The Digital Loom. Immerse yourself in our
              unparalleled suite of integrated business, data, and technology
              services, where each step is meticulously curated to propel you
              toward unparalleled success.
              <br />
              <br />
              From Current TDL Brochure: Support our clients on the "Ideas to
              Execution" journey by providing best-in-class Integrated Business,
              Data, and Technology Services. Merge together for a seamless path
              to triumph.
            </p>
          </div>
        </div>
        <div className="grid my-8 md:grid-cols-2 gap-8 md:gap-x-4 justify-center items-center">
          <div className="mx-auto">
            <img src="/img.svg" alt="" srcset="" />
          </div>
          <div className="">
            <p className="md:text-4xl text-3xl font-semibold">Our Mission</p>
            <img src="/line.svg" className="my-4" alt="" srcset="" />
            <p className="text-gray-500 md:text-md text-base mt-2">
            Solving Intricate Challenges, Cultivating Serenity and Affection
            <br />
              <br />
Envision a future where individuals and organizations alike, irrespective of their domains, can not only identify but also revel in the art of solving intricate challenges through the use of our platform, The Digital Loom. We dream of a world where complex problems become opportunities for innovation, where every challenge is met with enthusiasm, creativity and strategic thinking.
<br />
              <br />
This vision of ours goes beyond the conventional problem-solving measures. It transcends the traditional boundaries, as we do not aim to merely resolve the issues at hand. Our ambition is to cultivate a realm of ease, tranquillity, and love. We strive to do this through the integration of avant-garde technologies and new-age solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
