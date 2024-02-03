import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-full bg-[url('/it.jpg')] bg-cover py-36">
        <p className="text-5xl text-white text-center  font-semibold">
        Business Process Optimization


        </p>
        <p className="text-white text-lg text-center max-w-4xl mx-auto mt-4">
        Enhance your business operations through strategic solutions, including Business Applications, Intelligent Automation, and CoPilot Development.

        </p>
      </div>
      <Features />
    </main>
  );
};

const features = [
  // ... existing features ...

  {
    name: "Business Applications",
    description: "Our tailored Business Applications are designed to meet the unique demands of your industry. Whether you require a comprehensive ERP system or specialized applications, we deliver solutions that streamline processes, enhance collaboration, and drive productivity."
  },
  {
    name: "Intelligent Automation",
    description: "Leverage the power of artificial intelligence and machine learning to automate repetitive tasks, reduce errors, and free up valuable resources. Our automation strategies are designed to enhance operational speed, accuracy, and agility, ensuring your business remains at the forefront of technological advancement."
  },
  {
    name: "CoPilot Development",
    description: "Navigate the complexities of business operations with our CoPilot Development services. We collaborate with your team to develop intelligent, user-friendly systems that act as your digital co-pilots. From real-time analytics to smart decision-making support, our CoPilot Development ensures that your business processes are optimized and guided by intelligent insights."
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
