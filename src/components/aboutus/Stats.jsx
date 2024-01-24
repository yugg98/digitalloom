const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

export default function Stats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white capitalize sm:text-4xl">
            ABOUT US
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                <span className="text-blue-400 font-semibold text-xl">Our Founders with 60+ Years of Expertise <br/></span>
                At the core of The Digital Loom are founders with a collective
                expertise of more than 60 years in IT consulting and
                enterprise-level implementations. Their passion and seasoned
                experience make them adept navigators in the dynamic digital
                landscape.
              </p>
              <p className="mt-8">
              <span className="text-blue-400 font-semibold text-xl">Diverse Experience Across Industries <br/></span>
                Our founders bring a wealth of consulting and implementation
                experience across various applications, including prospecting,
                client reporting, trading systems, back-office automation,
                engineering, AI, Web3, and a spectrum of software solutions.
                With a proven track record, we&apos;ve successfully developed
                high-performance teams.
              </p>
            </div>
            <div>
              <p>
              <span className="text-blue-400 font-semibold text-xl">Your Partner for Digital Triumph <br/></span>

                As we launch The Digital Loom, we invite you to explore the
                possibilities that lie at the intersection of passion,
                expertise, and innovation. We are committed to being your
                partner in success, offering tailored solutions that ensure your
                business not only survives but thrives in the competitive
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
