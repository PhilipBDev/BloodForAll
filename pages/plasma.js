import Image from 'next/image';
import Link from 'next/link';

const plasma = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="inline-flex items-center justify-center">
                <Image
                  className="rounded-lg rounded-t-3xl"
                  width={400}
                  height={400}
                  src="/plasma.jpg"
                />
              </div>
              <div className="pt-3">
                <Link
                  href="https://commons.wikimedia.org/wiki/File:Plasma_and_platelet_donation.jpg"
                  className="py-4 border-b-4 font-semibold"
                >
                  <a className="underline hover:animate-pulse">Photo</a>
                </Link>{' '}
                by{' '}
                <Link
                  href="https://en.wikipedia.org/wiki/User:Whoisjohngalt"
                  className="py-4 border-b-4 font-semibold"
                >
                  <a className="underline hover:animate-pulse">Whoisjohngalt</a>
                </Link>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default plasma;
