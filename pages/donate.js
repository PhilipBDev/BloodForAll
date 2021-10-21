import Image from 'next/image';

const donate = () => {
  return (
    <>
      <div className="text-center flex justify-center items-center flex-col">
        <div className="w-8/12 text-lg">
          <h1 className="pt-20 pb-10 text-red-500 font-bold text-3xl">
            Donate Today!!
          </h1>
          <p className="pb-10">
            Blood is made up of three main components that you can donate. Red blood cells,
            platelets, and plasma. No matter what kind of donation you do, you'll be helping out tremendously by saving the lives of people in need!
          </p>
          <p>
            It's pretty simple to get started! All you need to do to prepare is to eat a good, preferably non-greasy, meal and drink plenty of water! Walk-ins are typically accepted, though due to COVID restrictions your local blood bank may require an appointment ahead of time so be sure to give them a quick call first! After you arrive you'll do some paperwork, dedicate your time to sitting and possibly watch a movie (depending on what you donate, as platelets can take a few hours), and then you'll get a little snack and usually a small incentive gift for helping save a life!
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
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-red-500 border-2 mb-5">
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
                  Blood is .
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
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
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-yellow-500 border-2 mb-5">
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
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
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
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-blue-500 border-2 mb-5">
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
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
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
      <div className="text-center flex flex-wrap overflow-hidden justify-center lg:-mx-5 mb-8">
        <div className="w-8/12">
          <p className="pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            amet dignissimos alias illum in quod dicta enim perferendis, minima
            excepturi libero pariatur culpa delectus. Eum reprehenderit
            cupiditate quidem, odio obcaecati unde? Provident, quia sequi ipsum
            inventore at officia nihil ea? Magnam cupiditate tempore fuga
            repudiandae officia in ex! Eligendi, dolore.
          </p>
          <ul className="pb-4">
            <li>Fact 1</li>
            <li>Fact 2</li>
            <li>Fact 3</li>
            <li>Fact 4</li>
            <li>Fact 5</li>
          </ul>
          <p className="pb-4">
            {' '}
            Ducimus modi autem impedit fugiat veniam? Illo molestias
            exercitationem aliquid assumenda quibusdam voluptate, ipsa error rem
            autem iusto dicta sit? Illo minima sequi, aspernatur itaque qui
            repudiandae dolor iste aliquid nam fugiat nostrum labore nulla eaque
            velit ducimus ipsam ab. Tempore veniam velit dolorem nihil error?
            Aut, voluptatum cupiditate eveniet consequuntur eligendi consectetur
            reiciendis, eos sapiente veritatis dignissimos recusandae
            praesentium dolore doloribus ipsa quo ratione quam obcaecati
            delectus labore quasi, debitis veniam aperiam velit corrupti! Aut
            distinctio eius eum aspernatur quas recusandae beatae soluta
            provident adipisci nisi, asperiores in numquam animi minus, suscipit
            sit assumenda nulla. Recusandae ut vitae quo dolores autem rem
            voluptate id maxime! Maxime fuga dolor a distinctio corrupti!
          </p>
        </div>
      </div>
    </>
  );
};

export default donate;
