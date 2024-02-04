const stats = [
  { label: "Underpaid employees", value: "30+" },
  { label: "Placated clients  ", value: "50+" },
  { label: "Ratings ", value: "4.9/5" },

];

export default function Stats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white capitalize sm:text-4xl">
            Our Ethos
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                At The Digital Loom Inc., our ethos is built on cultivating
                genuine, long-term client partnerships. We go beyond mere
                business transactions, aspiring to be the catalyst for their
                sustained growth and acceleration. We pledge unwavering support
                by providing meticulously trained IT staffing solutions tailored
                to their unique requirements, overseeing the development and
                maintenance of their entire IT infrastructure, and seamlessly
                stepping in as consultants and advisors when needed.
              </p>
              <p className="mt-8">
                Within our organization, we&apos;ve woven a culture rooted in a deep
                passion for technology. Happy employees are the cornerstone of
                productivity. Our team comprises individuals who love what they
                do, and we&apos;ve designed our work environment to foster this
                enthusiasm. By nurturing a healthy work-life balance, we ensure
                our employees are highly productive and get ample time for
                rejuvenation with themselves and their families. We firmly
                believe that happy minds translate into satisfied and efficient
                employees who consistently deliver their best.
              </p>
            </div>
            <div>
              <p className="">
                As an equal-opportunity employer, we take pride in assembling a
                workforce with diverse backgrounds, making it our unique
                advantage. The fusion of talent from varied perspectives sets us
                apart and positions us as a highly sought-after partner. We
                invite you to experience the transformative power of our trained
                staff and witness firsthand the unmatched productivity that
                defines The Digital Loom Inc. Try our services once and discover
                the difference a dedicated and diverse workforce can make to
                your business.
              </p>
              <dl className="w-64 mt-4 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-200">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
