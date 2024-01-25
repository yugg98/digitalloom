import Button from "./Button";

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid justify-center items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About us
              </p>
              <p className="mt-6  text-gray-900">
                Embark on a transformative journey with The Digital Loom and
                discover how our innovative offerings can elevate your business
                to unprecedented heights. Join us in reshaping the future of
                digital success and ensuring your triumph in an ever-evolving
                paradigm.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-900">
                <p className="text-3xl font-bold">
                  Our Founders 
                </p>
              </p>{" "}
              <p className="mt-2">
                <span className="text-lg font-semibold text-blue-600">
              Passionate Pioneers with 60+ Years of Expertise</span> <br/>
                At the core of The Digital Loom are founders with a collective
                expertise of more than 60 years in IT consulting and
                enterprise-level implementations. Their passion and seasoned
                experience make them adept navigators in the dynamic digital
                landscape.
              </p>
              <div className="mt-0">
               <Button/>
              </div>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
