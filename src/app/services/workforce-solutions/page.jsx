"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-24 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Workforce Solutions
                </h1>
                <p className="mt-6 text-sm text-gray-600">
                  Organizations strive to optimize resources, reduce overhead
                  costs, and enhance employee efficiency in today&apos;s dynamic
                  business landscape. Our cutting-edge workplace IT staffing
                  solutions are tailored to meet these challenges head-on,
                  offering a comprehensive institutional process that goes
                  beyond traditional approaches.
                  <br />
                  <br />
                  Navigating the complexities of recruitment is a critical
                  aspect of organizational growth. We provide strategic staffing
                  solutions, providing top-tier talent that aligns with your
                  business requirements and long-term goals.
                  <br />
                  <br />
                  Our staffing solutions provide organizations with
                  high-performing individuals who are suitable for the job and
                  will get the work done! Our placements are high on employee
                  efficiency, performance metrics, and overall well-being.{" "}
                  <br />
                  <br />
                  By choosing us as your staffing partner, you embark on a
                  journey of transformation where workplace challenges turn into
                  opportunities. Our holistic approach to workforce solutions
                  reflects our commitment to your success. We invite you to
                  explore the difference our expertise can make for your
                  organization. Elevate your business with us — where talent
                  meets efficiency.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
