import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const donate = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>BloodForAll</title>
        <link
          rel="icon"
          href="https://www.svgrepo.com/show/164208/syringe.svg"
        />
      </Head>

      <div className="text-center flex justify-center items-center flex-col">
//         <div className="justify-center items-center flex flex-col lg:px-6 pt-8">
//           {user && (
//             <>
//               <h1 className="font-bold text-xl pb-5">Hello, {user.name}! 👋</h1>
//             </>
//           )}
//         </div>
        <div className="w-8/12 text-lg">
          <h1 className="pt-10 pb-10 text-red-500 font-bold text-3xl">
            Donate Today!!
          </h1>
          <p className="pb-10">
            Blood is made up of three main components that you can donate. Red
            blood cells, platelets, and plasma. No matter what kind of donation
            you do, you'll be helping out tremendously by saving the lives of
            people in need!
          </p>
          <p>
            It's pretty simple to get started! All you need to do to prepare is
            to eat a good, preferably non-greasy, meal and drink plenty of
            water! Walk-ins are typically accepted, though due to COVID
            restrictions your local blood bank may require an appointment ahead
            of time so be sure to give them a quick call first! After you arrive
            you'll do some paperwork, dedicate your time to sitting and possibly
            watch a movie (depending on what you donate, as platelets can take a
            few hours), and then you'll get a little snack and usually a small
            incentive gift for helping save a life!
          </p>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              width={800}
              height={800}
              class="object-cover object-center"
              src="/donate-today.png"
              priority={true}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-red-500 border-2 mb-3">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/blood-bag.svg"
                  priority={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Blood
                </h2>
                <p class="leading-relaxed text-base">
                  Blood is always important to donate no matter what type you
                  are! Every day patients are in need of blood, and it's up to
                  you to help and help save lives by just spending less than an
                  hour of your time every couple of months!
                </p>
                <Link href="/blood">
                  <a class="mt-3 text-red-500 underline font-semibold cursor-pointer inline-flex items-center">
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
                </Link>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center mt-3">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-yellow-500 border-2 mb-3">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/platelet-bag.svg"
                  priority={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Platelets
                </h2>
                <p class="leading-relaxed text-base">
                  Platelets are one of the most important components when it
                  comes to treating cancer patients. They can be donated every 7
                  days, but they will expire only 5 days after leaving your
                  body, which is why it's super important to donate them as
                  often as possible!
                </p>
                <Link href="/platelets">
                  <a class="mt-3 text-yellow-500 underline font-semibold cursor-pointer inline-flex items-center">
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
                </Link>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center mt-3">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-blue-500 border-2 mb-3">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/plasma-bag.svg"
                  priority={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Plasma
                </h2>
                <p class="leading-relaxed text-base">
                  Plasma is very important for treating burns and other serious
                  injuries. It can be donated once per month, but if you donate
                  whole blood you won't even have to worry about donating since
                  phlebotomists will be able to get it along with your blood
                  cells!
                </p>
                <Link href="/plasma">
                  <a class="mt-3 text-blue-500 underline font-semibold cursor-pointer inline-flex items-center">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default donate;
