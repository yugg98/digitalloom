import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-full bg-[url('/it.jpg')] bg-cover py-36">
        <p className="text-5xl text-white text-center  font-semibold">
        Customer Experience (CX) Enhancement

        </p>
        <p className="text-white text-lg text-center max-w-4xl mx-auto mt-4">
        Explore our expertise in user experience (UI/UX) design, customer journey mapping, and personalization and customer segmentation.

        </p>
      </div>
      <Features />
    </main>
  );
};

const features = [
  // ... existing features ...

  {
    name: "User Experience (UI/UX) Design",
    description: "Crafting an exceptional user experience is at the core of what we do. Our UI/UX design services are a fusion of creativity and functionality. We collaborate with your team to create visually appealing interfaces that captivate your audience and ensure seamless navigation and usability. Elevate your brand through designs that leave a lasting impression."
  },
  {
    name: "Customer Journey Mapping",
    description: "Understanding your customer's journey is critical to delivering a memorable experience. Our customer journey mapping services will enhance your customer's interactions with your brand. From the initial touchpoint to conversion and beyond, we identify opportunities to optimize and improve each stage, ensuring a cohesive and delightful customer experience."
  },
  {
    name: "Personalization and Customer Segmentation",
    description: "Tailoring your offerings to individual preferences is the hallmark of personalized customer experiences. We specialize in implementing personalization and customer segmentation strategies beyond one-size-fits-all approaches. By understanding your audience's unique needs, we help you deliver content, recommendations, and interactions that resonate emotionally."
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
