import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-full bg-[url('/it.jpg')] bg-cover py-36">
        <p className="text-5xl text-white text-center  font-semibold">
          E-commerce Solutions
        </p>
        <p className="text-white text-lg text-center max-w-4xl mx-auto mt-4">
          We leverage the latest web and mobile technologies to build, grow, and
          support your business. Our comprehensive solutions include online
          storefront development, payment gateway integration, digital marketing
          strategies for e-commerce, Web 3.0, and NFT Marketplaces.
        </p>
      </div>
      <Features />
    </main>
  );
};

const features = [
  // ... existing features ...

  {
    name: "Digital Strategy Development",
    description:
      "Our seasoned consultants collaborate with your team to develop a comprehensive digital strategy tailored to your business objectives. Whether you want to enhance customer engagement, optimize operations, or drive innovation for success in the digital age.",
  },
  {
    name: "Needs Assessment and Gap Analysis",
    description:
      "Understanding your organization's unique needs and challenges is the first step toward effective transformation. Our team conducts thorough needs assessments and gap analyses to identify existing strengths and weaknesses. By pinpointing areas for improvement, we lay the foundation for strategic interventions that align with your overarching goals.",
  },
  {
    name: "Roadmap for Digital Transformation",
    description:
      "We provide a clear and actionable plan that outlines the steps, milestones, and key initiatives needed to propel your organization forward. Our roadmaps are designed to be dynamic, ensuring adaptability to changing landscapes and evolving business requirements. We provide a partnership that extends beyond recommendations — where digital strategy becomes a catalyst for growth, and roadmaps lead to unparalleled success. Elevate your business with Consulting and Strategy services that set the stage for enduring success in the digital era.",
  },
  // Add more features as needed
];

function Features() {
  return (
    <div className="bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mx-auto  mt-16 grid max-w-2xl grid-cols-1 gap-x-2  gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="hover:bg-gray-200 hover:scale-105 rounded-lg p-6"
              key={feature.name}
            >
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default page;
