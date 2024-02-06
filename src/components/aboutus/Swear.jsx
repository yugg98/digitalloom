import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Realize Everyone Potential',
    description:
      'Digital Loom, we embrace the transformative power of individuals to drive change. Our commitment lies in empowering each person to unfurl their boundless capabilities, fostering an environment where every individual inherent potential flourishes.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Achieve Work and Life Balance',
    description:
    "Harmonize the rhythm of work and life, creating a symphony where each note resonates with balance. Craft a narrative where professional endeavors and personal well-being dance in graceful equilibrium.",
    icon: LockClosedIcon,
  },
  {
    name: 'Transparency and Integrity in Action',
    description:
      'Cultivate a tapestry of talent, embracing the richness that diversity brings to our collective journey.""Forge an inclusive workforce, weaving together a diverse mosaic of perspectives and experiences.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Inclusive and Diverse Workforce',
    description:
      'We Cultivate a tapestry of talent, embracing the richness that diversity brings to our collective journey, forging an inclusive workforce, weaving together a diverse mosaic of perspectives and experiences.',
    icon: FingerPrintIcon,
  },
]

export default function Swear() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ethics we swear by
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 hover:bg-gray-200 hover:scale-95 p-4 rounded-lg">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
