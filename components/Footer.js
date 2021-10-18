import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer class="text-white body-font bg-red-500">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center">
          <Link href="http://localhost:3000/">
            <a class="flex title-font font-medium items-center justify-center text-white mb-4 md:mb-0">
              <Image src="/blood.svg" width={35} height={35} />

              <a class="ml-3 text-2xl font-bold">BloodForAll</a>
            </a>
          </Link>
          <p class="mt-3 ml-3 text-sm text-white">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
              BLOOD BANKS
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
              POSITIVE BLOOD
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
              NEGATIVE BLOOD
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
              PLASMA & PLATELETS
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-black text-sm text-center sm:text-left font-semibold">
            Copyright © 2021{' '}
            <Link href="https://www.philipb.dev/">
              <a className="underline hover:animate-pulse hover:text-red-600">
                PhilipBDev
              </a>
            </Link>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://twitter.com/PhilipBDev">
              <a class="text-black">
                <svg
                  fill="rgb(239, 68, 68)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 hover:cursor-pointer hover:animate-pulse"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/philip-brown-83bb131ab/">
              <a class="ml-3 text-black">
                <svg
                  fill="rgb(239, 68, 68)"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 hover:cursor-pointer hover:animate-pulse"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>

                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </Link>
            <Link href="https://github.com/PhilipBDev">
              <a class="text-black ml-3">
                <svg
                  fill="rgb(239, 68, 68)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="02"
                  class="w-5 h-5 hover:cursor-pointer hover:animate-pulse"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
