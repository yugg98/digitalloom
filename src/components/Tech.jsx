import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    "name": "Web Design",
    "description": "Spearheading innovation in the Web3 realm, we lead the charge in transforming digital landscapes. Our designers blend creativity with functionality to ensure a seamless and visually stunning online presence."
  },
  
  {
    "name": "Mobile App Development",
    "description": "Propel your digital influence to new heights through avant-garde mobile applications, meticulously tailored for both iOS and Android platforms. Our adept team not only ensures strict adherence to industry standards but transcends them, promising a seamlessly unparalleled user experience."
  },
  {
    "name": "Digital Marketing",
    "description": "Strategic digital marketing campaigns that drive visibility, engagement, and conversion. From SEO and social media to content marketing, we deploy comprehensive strategies to boost your online presence."
  },
  {
    "name": "NFT Expertise",
    "description": "As a team specializing in Non-Fungible Tokens (NFTs), we are pioneers in the field of digital asset ownership. Our approach is guided by a robust understanding of blockchain technology, digital art, and the evolving digital economy, all of which culminate to create our standout NFT solutions."
  },
  {
    "name": "Mastery in Solidity Programming",
    "description": "Our team's exceptional expertise and comprehensive proficiency in the Solidity programming language guarantees the development of robust and secure smart contracts. We excel in crafting these contracts meticulously, which serve as the backbone of decentralized applications, thus enabling these applications to operate with absolute precision and efficiency."
  },
  {
    "name": "Comprehensive Web3 Services",
    "description": "As pioneers in the digital landscape, we provide a wide range of services that encompass the entirety of Web3 technologies. Our offerings stand as a testament to not just meeting but surpassing the ever-evolving demands of the digital epoch, Smart Contract Development, DApps, Tokenization Services, DAO Development…you name it, we’ve got it all covered for you!"
  }
]


export default function Tech() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center  gap-x-2">Web Development <ArrowRightCircleIcon className='w-8 h-8 text-blue-600'/> </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Tailored website solutions crafted for optimal performance, user experience, and scalability. Our expert developers bring your digital vision to life with precision and innovation.            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative hover:scale-95 bg-gray-300 p-4 rounded-xl pl-9">
              <dt className="font-semibold text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-2">{feature.description}</dd>
            </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
const services = [
  {
    "name": "Direct Hire",
    "description": "Our direct hire service takes the stress out of the hiring process by thoroughly vetting and presenting only the most qualified candidates for the job",
  },
  {
    "name": "Contingent Staffing",
    "description": "With a pool of qualified and pre-vetted candidates, we can provide the temporary resources you need to keep your business running smoothly",
  },
  {
    "name": "Statement of Work",
    "description": "By clearly outlining project deliverables, timelines, and payment terms, our SOWs ensure that both parties are on the same page and set up for success",
  },
  {
    "name": "Payroll Solutions",
    "description": "Our team of experts handles all aspects of payroll, including tax compliance and employee benefits, so you can focus on what matters most"
  },
  {
    "name": "Near Shore Staffing",
    "description": "By working with qualified professionals in nearby countries, you can take advantage of cost savings while still receiving top-notch talent"
  },
  {
    "name": "RPO",
    "description": "By outsourcing your recruitment needs to us, you can focus on running your business while we handle the entire hiring process from start to finish"
  }
]

export function Managedit() {
  return (
    <div className="bg-white py-24  sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl flex items-center justify-center gap-x-2">Workflows Solutions <ArrowRightCircleIcon className='w-8 h-8 text-blue-600'/></p>
            
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {services.map((feature) => (
              <div key={feature.name} className="relative hover:scale-95 bg-gray-300 p-4 rounded-xl pl-9">
                <dt className="font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export function industryexpertise() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center gap-x-2">Workflows Solutions <ArrowRightCircleIcon className='w-8 h-8 text-blue-600'/></p>
            
          </div>
          <dl className="col-span-2  grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {services.map((feature) => (
              <div key={feature.name} className="relative  pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
