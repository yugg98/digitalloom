"use client"
import Cta from "@/components/Cta";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
   
    {
      id: 2,
      question: "How can I contact The Digital Loom?",
      answer: "For inquiries, you can reach us at contact@thedigitalloom.com or call us at +91-9788936975. Our team is also available through the contact form on our website.",
    },
    {
      id: 3,
      question: "What services does The Digital Loom provide in the IT industry?",
      answer: "We specialize in a wide range of IT services including web development, web design, e-commerce development, mobile app development, digital marketing, blockchain integration, and more. Our team is dedicated to providing customized solutions to meet your specific business needs.",
    },
    {
      id: 4,
      question: "How long does a software project take?",
      answer: "Project timelines vary based on complexity. Get a tailored estimate during the consultation.",
    },
    {
      id: 5,
      question: "Does The Digital Loom provide ongoing support?",
      answer: "Yes, we offer support post-development, ensuring your software stays efficient and updated.",
    },
    {
      id: 6,
      question: "What technologies are used for mobile apps?",
      answer: "We specialize in iOS and Android platforms, using cutting-edge tech for seamless experiences.",
    },
    {
      id: 7,
      question: "Can I get updates on my project progress?",
      answer: "Yes, expect regular updates and transparent communication throughout the project.",
    },
    {
      id: 8,
      question: "What is the typical duration of a software development project with The Digital Loom?",
      answer: "The duration of a software development project can vary based on its complexity and scope. During the initial consultation, we assess your requirements and provide a timeline that aligns with your project's unique specifications.",
    },
    {
      id: 9,
      question: "Does The Digital Loom offer cybersecurity services?",
      answer: "Yes, we prioritize the security of your digital assets. Our cybersecurity services include implementing robust measures to protect your data and systems from potential threats.",
    },
    {
      id: 10,
      question: "Can The Digital Loom assist with cloud computing solutions for my business?",
      answer: "Absolutely! We offer a range of cloud computing services such as migration, storage, hosting, and security. Our experts collaborate with you to identify the most suitable cloud solution to enhance your business operations.",
    },
    {
      id: 11,
      question: "How does The Digital Loom approach website development?",
      answer: "We analyze, design, code, test, and deploy, prioritizing user experience, functionality, and scalability.",
    },
    {
      id: 12,
      question: "How do I get trained on using developed software?",
      answer: "We provide comprehensive training sessions for your team to ensure a smooth transition.",
    },
    {
      id: 13,
      question: "Does The Digital Loom offer digital marketing services?",
      answer: "Absolutely! From SEO to social media, we craft strategies to boost your online presence.",
    },
    {
      id: 14,
      question: "How secure are the websites developed by The Digital Loom?",
      answer: "Our websites prioritize security with robust measures to protect your digital assets.",
    },
    {
      id: 15,
      question: "What sets your digital marketing campaigns apart?",
      answer: "We deploy strategic campaigns for visibility, engagement, and conversion.",
    },
    {
      id: 16,
      question: "Does The Digital Loom provide AI-powered solutions?",
      answer: "Yes, we leverage AI for predictive analytics, automation, and personalized experiences.",
    },
    {
      id: 17,
      question: "What differentiates your mobile app development approach?",
      answer: "We ensure your app not only meets but exceeds industry standards for an unparalleled user experience.",
    }
  ];
  
  
  export default function Faqs() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <div className="bg-white">
        <div className="mt-20">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 text-center ">Wondering about The Digital Loom? </h2>
          <p className="text-lg mt-2 text-gray-700 text-center">Your questions, our answers. Dive into our FAQs and satiate your curiosity.</p>
          </div>
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6  sm:py-8 lg:px-8 ">
        
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <Disclosure as="div" key={faq.id} className="pt-6" 
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className={`flex w-full items-start justify-between text-left `}>
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {open || hoveredIndex === index ? (
                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                {(open || hoveredIndex === index) && (
                  <Disclosure.Panel as="dd" className="mt-2 pr-12 bg-gray-300 p-4 rounded-xl">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </dl>
        </div>
        <Cta/>
      </div>
    )
  }
  