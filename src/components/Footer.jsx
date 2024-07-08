const navigation = {
  solutions: [
    { name: "Workforce Solutions", href: "/services/workforce-solutions" },
    { name: "Managed IT Services", href: "/services/managed-it-services" },
    { name: "Cloud Migration", href: "/services/cloud-migration" },
    { name: "Consulting and Strategy", href: "/services/consulting-strategy" },
  ],
  company: [
    { name: "About", href: "/aboutus" },
    { name: "FAQs", href: "/faqs" },

    { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    {
      name: "Business Process Optimization",
      href: "/services/business-process-optimization",
    },
    {
      name: "Customer Experience (CX) Enhancement",
      href: "/services/customer-experience-enhancement",
    },
  ],
  legal: [
    { name: "Contact us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/thedigitalloom",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="28"
          height="28"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ec79f5"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/the-digital-loom/",
      icon: (props) => (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className="mt-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.92 5.72C7.92 5.98107 7.84258 6.23628 7.69754 6.45335C7.5525 6.67043 7.34634 6.83961 7.10514 6.93952C6.86394 7.03943 6.59854 7.06557 6.34248 7.01464C6.08643 6.9637 5.85122 6.83799 5.66662 6.65338C5.48201 6.46878 5.3563 6.23357 5.30536 5.97752C5.25443 5.72146 5.28057 5.45606 5.38048 5.21486C5.48039 4.97366 5.64957 4.7675 5.86665 4.62246C6.08372 4.47742 6.33893 4.4 6.6 4.4C6.95009 4.4 7.28583 4.53907 7.53338 4.78662C7.78093 5.03417 7.92 5.36991 7.92 5.72ZM22 1.76V20.24C22 20.7068 21.8146 21.1544 21.4845 21.4845C21.1544 21.8146 20.7068 22 20.24 22H1.76C1.29322 22 0.845556 21.8146 0.515492 21.4845C0.185428 21.1544 0 20.7068 0 20.24V1.76C0 1.29322 0.185428 0.845556 0.515492 0.515492C0.845556 0.185428 1.29322 0 1.76 0H20.24C20.7068 0 21.1544 0.185428 21.4845 0.515492C21.8146 0.845556 22 1.29322 22 1.76ZM20.24 20.24V1.76H1.76V20.24H20.24ZM6.6 8.36C6.36661 8.36 6.14278 8.45271 5.97775 8.61775C5.81271 8.78278 5.72 9.00661 5.72 9.24V16.28C5.72 16.5134 5.81271 16.7372 5.97775 16.9023C6.14278 17.0673 6.36661 17.16 6.6 17.16C6.83339 17.16 7.05722 17.0673 7.22225 16.9023C7.38729 16.7372 7.48 16.5134 7.48 16.28V9.24C7.48 9.00661 7.38729 8.78278 7.22225 8.61775C7.05722 8.45271 6.83339 8.36 6.6 8.36ZM13.2 8.36C12.4078 8.35996 11.6338 8.59752 10.978 9.042C10.9299 8.83084 10.8056 8.64485 10.6289 8.5196C10.4522 8.39436 10.2356 8.33867 10.0204 8.36318C9.80521 8.38769 9.60663 8.49069 9.46265 8.65247C9.31866 8.81424 9.23939 9.02343 9.24 9.24V16.28C9.24 16.5134 9.33271 16.7372 9.49775 16.9023C9.66278 17.0673 9.88661 17.16 10.12 17.16C10.3534 17.16 10.5772 17.0673 10.7423 16.9023C10.9073 16.7372 11 16.5134 11 16.28V12.32C11 11.7365 11.2318 11.1769 11.6444 10.7644C12.0569 10.3518 12.6165 10.12 13.2 10.12C13.7835 10.12 14.3431 10.3518 14.7556 10.7644C15.1682 11.1769 15.4 11.7365 15.4 12.32V16.28C15.4 16.5134 15.4927 16.7372 15.6577 16.9023C15.8228 17.0673 16.0466 17.16 16.28 17.16C16.5134 17.16 16.7372 17.0673 16.9023 16.9023C17.0673 16.7372 17.16 16.5134 17.16 16.28V12.32C17.16 11.2697 16.7428 10.2625 16.0001 9.51986C15.2575 8.77721 14.2503 8.36 13.2 8.36Z"
            fill="#EC79F5"
          />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 ">
          <div className="space-y-8">
            <img className="h-48 w-auto" src="/logo.svg" alt="Your Company" />
            <p className="text-sm leading-6 text-gray-300">
              Get ready to expedite your dive into Technology with Disruption,
              <br /> Innovation & Revolution with us!
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16  xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-40">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
