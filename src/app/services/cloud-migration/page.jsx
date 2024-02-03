import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-full bg-[url('/it.jpg')] bg-cover py-36">
        <p className="text-5xl text-white text-center  font-semibold">
        Cloud Migration

        </p>
        <p className="text-white text-lg text-center max-w-4xl mx-auto mt-4">
        Our expertise is providing seamless cloud adoption solutions, comprehensive data strategy formulation, and innovative solution design. Explore the transformative capabilities we bring to organizations seeking to harness the full potential of cloud environments.

        </p>
      </div>
      <Features />
    </main>
  );
};

const features = [
  // ... existing features ...

  {
    name: "Cloud Adoption, Data Strategy, Solution Design",
    description: "At the heart of our Cloud Migration Services is a commitment to Cloud Adoption, Data Strategy, and Solution Design. We understand that successful migration requires a strategic blend of these elements, and our approach is crafted to ensure a smooth transition for your organization."
  },
  {
    name: "Pre-built Migration Accelerators and Frameworks",
    description: "Our services come equipped with pre-built migration accelerators and frameworks. These tools are designed to streamline the migration process, ensuring efficiency, reliability, and cost-effectiveness. By leveraging these accelerators, we significantly reduce the complexities of transitioning from current systems to robust cloud environments."
  },
  {
    name: "Seamless and Cost-effective Transition",
    description: "We enable organizations to transition operations seamlessly and cost-effectively to the cloud. Our tailored solutions prioritize minimal disruption, allowing your business to maintain momentum while adopting cloud infrastructure."
  },
  {
    name: "Empowering Data Storage and Accessibility",
    description: "Our Cloud Migration Services empower organizations to store their data securely in the cloud and make it easily accessible. We optimize data storage and retrieval processes, ensuring your valuable information is available most efficiently and effectively."
  }
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
