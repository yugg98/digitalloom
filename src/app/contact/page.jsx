"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Contactus() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    fullname: "",
    email: "",
    lastname: "",
    phonenumber: "",
    message:""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        axios.post('/api/send', data, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };
  return (
    <div className="relative isolate border-0">
      <div className="border-0 mx-auto max-w-7xl px-4 sm:px-6 my-10 lg:px-8">
        <div className="mx-auto grid px-4 sm:px-6 lg:px-10 grid-cols-1 lg:grid-cols-2 ">
          <div className="relative  lg:static lg:border-r md:pr-10 py-24 px-4">
            <h2 className="text-4xl font-dmserif sm:text-6xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Fill the form. We will get back to you in 24 hours.
            </p>
            <dl className="mt-8 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                2 Brady Way Westford
                  <br /> Westford MA 01886
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                   978-320-LOOM (5666)
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:contact@thedigitalloom.com"
                  >
                    contact@thedigitalloom.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form onSubmit={handleSubmit} className="md:py-24 md:px-10 px-4">
            {error == "" ? null : (
              <div
                className="flex items-center max-w-xl p-4 my-4 text-sm font-semibold text-red-600 rounded bg-red-50"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>{error}</div>
              </div>
            )}
            {success ? (
              <div
                className="flex items-center max-w-xl p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Thank You! </span> We will reach
                  out to you soon
                </div>
              </div>
            ) : null}
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div>
                <div className="mt-5">
                  <input
                    type="text"
                    name="fullname"
                    id="full-name"
                    className="min-w-0 w-full text-black flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"

                    onChange={handleChange}
                    value={data.fullname}
                    placeholder="Full Name"
                    autoComplete="family-name"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-8">
                    <input
                      type="email"
                      name="email"
                      className="min-w-0 w-full text-black flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"

                      id="email"
                      onChange={handleChange}
                      value={data.email}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-8">
                    <input
                      className="min-w-0 w-full text-black flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                      type="tel"
                      name="phonenumber"
                      id="phone-number"
                      onChange={handleChange}
                      value={data.phonenumber}
                      placeholder="Phone Number"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-8">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows={4}
                      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 w-full  dark:focus:ring-teal-400/10 sm:text-sm"
                      variant="underlined"
                      defaultValue={""}
                      onChange={handleChange}
                      value={data.message}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full cursor-pointer max-w-xs font-semibold py-3 px-8 bg-black text-white hover:bg-gray-800 flex my-6 "
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.686195058195!2d77.21345137549773!3d28.549150475710352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzU2LjkiTiA3N8KwMTInNTcuNyJF!5e0!3m2!1sen!2sin!4v1697278191185!5m2!1sen!2sin"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
