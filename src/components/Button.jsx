import React from "react";

const Button = () => {
  return (
    <div>
      <a
        href=""
        title=""
        class="inline-flex items-center text-white px-6 py-4 mt-8 font-semibold transition-all duration-200 bg-[#0874F1] rounded-lg lg:mt-6 hover:bg-blue-600 focus:bg-blue-400"
        role="button"
      >
        Contact us
        <svg
          class="w-6 h-6 ml-8 -mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Button;
