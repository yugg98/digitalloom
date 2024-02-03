import React from 'react'

const page = () => {
  return (
    <main>
        <div className="w-full bg-[url('/it.jpg')] bg-cover py-36">
            <p className="text-5xl text-white text-center  font-semibold">Managed IT Services
</p>
<p className="text-white text-lg text-center max-w-4xl mx-auto mt-4">We specialize in various innovative solutions that empower businesses to thrive in the digital era. Explore the transformative possibilities offered by our comprehensive suite of services.
</p>
        </div>
        <Features/>
    </main>
  )
}

const features = [
    {
      "name": "AI Chatbots",
      "description": "Revolutionize your customer interactions with our AI-powered chatbots. Enhance user engagement, provide instant support, and streamline communication processes. Our advanced chatbot solutions are tailored to meet the unique needs of your business, delivering efficiency and customer satisfaction through intelligent and quick solutions."
    },
    {
      "name": "Blockchain Solutions",
      "description": "Immerse your business in secure and transparent transactions with our blockchain solutions. From enhancing data integrity to optimizing supply chain processes, our blockchain expertise ensures a seamless integration that drives trust and efficiency."
    },
    {
      "name": "Business Analytics",
      "description": "Transform raw data into actionable insights, enabling informed decision-making. Gain a competitive edge, optimize processes, and drive strategic initiatives."
    },
    {
      "name": "Digital Transformation",
      "description": "Our services are designed to guide your organization through a seamless evolution, leveraging the latest technologies to enhance efficiency, agility, and overall performance. Our solutions are customized as per the client's needs."
    },
    {
      "name": "Enterprise App Development",
      "description": "From conceptualization to deployment, we create scalable and intuitive applications that align with your business objectives. We bring your business ideas to life with our custom enterprise app development services."
    },
    {
      "name": "Enterprise Business Solutions",
      "description": "From ERP implementations to process optimization, we provide end-to-end solutions that elevate your organizational capabilities and drive sustained growth."
    },
    {
      "name": "Managed IT Services",
      "description": "At The Digital Loom Inc., we go beyond providing services; we deliver tailored solutions that align with your business goals. Embrace innovation, enhance efficiency, and stay ahead in the digital race with our Managed IT Services."
    }
  ]
  
 function Features() {
    return (
      <div className="bg-white py-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
          <dl className="mx-auto  mt-16 grid max-w-2xl grid-cols-1 gap-x-2  gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div className='hover:bg-gray-200 hover:scale-105 rounded-lg p-6' key={feature.name}>
                <dt className="font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-1 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
export default page