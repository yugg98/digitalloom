"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const services = [
  {
    name: "Business Process Optimization",
    href: "/services/business-process-optimization",
  },
  { name: "Workforce Solutions", href: "/services/workforce-solutions" },
  { name: "Managed IT Services", href: "/services/managed-it-services" },
  { name: "Cloud Migration", href: "/services/cloud-migration" },
  { name: "Consulting and Strategy", href: "/services/consulting-strategy" },
  { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
  
  {
    name: "Customer Experience (CX) Enhancement",
    href: "/services/customer-experience-enhancement",
  },
];

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the Popover
  const closePopover = () => {
    setIsOpen(false);
  };
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="h-48 w-auto"
                      src="/logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex  lg:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link
                  href="/"
                  className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-gray-500"
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  About us
                </Link>
                <Popover
                  open={isOpen}
                  onClose={closePopover}
                  className="relative flex justify-center outline-none"
                >
                  <Popover.Button className="inline-flex outline-none items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Services
                    <ChevronDownIcon
                      className="ml-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-[9999] w-56 p-2 mt-3 bg-gray-900 shadow-lg -left-8 top-full rounded-xl ring-1 ring-gray-900/5">
                      {services.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                        >
                          {item.name}
                        </a>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Link
                  href="/#clients"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Our Clients
                </Link>
                <Link
                  href="https://calendly.com/contact-tdl/30min"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Book Meeting
                </Link>
                
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <Link
                  href="/contact"
                  className="relative flex-shrink-0 rounded-full outline-none  p-1 text-white bg-blue-700 py-2 px-4  hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden absolute z-[200] w-full bg-white">
            <div className="space-y-1 pb-3 pt-2 px-4">
              <Disclosure.Button
                as="a"
                href="/"
                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black "
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/aboutus"
                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black "
              >
                About us
              </Disclosure.Button>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black ">
                      Services
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {services.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block py-2 pl-6 pr-3 text-black text-sm font-semibold leading-7  rounded-lg "
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black "
              >
                Contact us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://calendly.com/contact-tdl/30min"
                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black "
              >
                Book Meeting
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
