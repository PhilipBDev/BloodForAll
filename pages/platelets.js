import Image from 'next/image';

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
                  src="/platelets.jpg"
                  priority={true}
                />
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="text-center leading-relaxed text-lg mb-4">
                Platelets are small cells in your blood used for a multitude of
                reasons. They can be used to form clots to stop bleeding, fight
                cancer, and dealing with serious injuries. Platelets can be
                donated every 7 days, which is necessary if you can sinced they
                have to be used with 5 days from the time you donate! The only
                downside for donating only platelets is that it can take a bit
                of time, about 2 to 3 hours of your day, which is another reason
                why platelets are always in demand and why blood banks typically
                offer more incentives for platelet donations over blood
                donations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default plasma;
