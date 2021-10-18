import Image from 'next/image';

const donate = () => {
  return (
    <>
      <div>
        <h1>Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          illo, ex expedita itaque quisquam voluptate corrupti et laborum dolor
          nulla blanditiis iusto quo maxime at esse nihil facere. Cum illum,
          doloremque necessitatibus nulla impedit hic ut provident voluptatum
          sint alias nesciunt nobis enim et laboriosam saepe consequatur,
          consectetur explicabo? Quibusdam tempora sunt inventore sed
          repudiandae odit exercitationem nesciunt sequi praesentium animi,
          perferendis distinctio, dignissimos fugit saepe, minima voluptas
          doloribus facilis ad dolores eaque maxime! Quaerat cum necessitatibus
          sed vel temporibus maiores fuga, mollitia adipisci, laborum optio
          aliquid modi delectus repellat architecto? Quibusdam, sapiente harum.
          Voluptatibus, dolores? Repellat pariatur qui odio?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          odit rem numquam illo inventore eligendi mollitia libero quas,
          veritatis autem. Voluptatum a, temporibus iure fugit ipsum, deserunt
          necessitatibus saepe expedita molestias accusamus architecto cumque.
          Vero et labore voluptatum quasi qui alias maxime maiores voluptates,
          doloribus ea expedita ipsum officiis quisquam.
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              width={800}
              height={800}
              class="object-cover object-center"
              src="/donate-today.png"
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
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Blood
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
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-yellow-500 border-2 mb-5">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/platelet-bag.svg"
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
      <div className="text-center flex flex-wrap overflow-hidden w-screen justify-center lg:-mx-5 mb-8">
        <p className="pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          amet dignissimos alias illum in quod dicta enim perferendis, minima
          excepturi libero pariatur culpa delectus. Eum reprehenderit cupiditate
          quidem, odio obcaecati unde? Provident, quia sequi ipsum inventore at
          officia nihil ea? Magnam cupiditate tempore fuga repudiandae officia
          in ex! Eligendi, dolore.
        </p>
        <ul className="pb-4 list-disc	">
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
          velit ducimus ipsam ab. Tempore veniam velit dolorem nihil error? Aut,
          voluptatum cupiditate eveniet consequuntur eligendi consectetur
          reiciendis, eos sapiente veritatis dignissimos recusandae praesentium
          dolore doloribus ipsa quo ratione quam obcaecati delectus labore
          quasi, debitis veniam aperiam velit corrupti! Aut distinctio eius eum
          aspernatur quas recusandae beatae soluta provident adipisci nisi,
          asperiores in numquam animi minus, suscipit sit assumenda nulla.
          Recusandae ut vitae quo dolores autem rem voluptate id maxime! Maxime
          fuga dolor a distinctio corrupti!
        </p>
      </div>
    </>
  );
};

export default donate;
