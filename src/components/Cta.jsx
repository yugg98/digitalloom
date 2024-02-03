import Button from "./Button";

export default function Cta() {
  return (
    <div className="bg-[#41C9FF]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empower Your Growth: Unleash the Potential of Your Business with Our Digital Transformation and IT Staffing Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-indigo-900">
          Restructure Your Business Operations and Processes with Blockchain and Cloud Infrastructure. Streamline Efficiency, Boost Security, and Stay Ahead of the Curve. Click Here to Schedule a Consultation with Our Experts!

          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Ctar = () => {
  return (
    <div className="bg-[#41C9FF]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight leading-10 text-gray-900 sm:text-4xl">
          Ready to grow your buisness?
          <br />
          Get Your Quote Now!
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button />
        </div>
      </div>
    </div>
  );
};
