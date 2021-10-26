import DoughnutGraph from '../components/DoughnutGraph';
import Image from 'next/image';

const blood = () => {
  return (
    <section class="body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex w-full mb-20 justify-center text-center items-center flex-wrap lg:flex-nowrap ">
          <div className="md:w-8/12 ">
            <DoughnutGraph />
          </div>

          <p class="h-6/12 lg:w-6/12 w-full text-lg">
            You can do your part to make a difference and save a life by
            donating blood! Blood transfusions are necessary for surgeries,
            injuries, cancer patients, and many other health conditions.{' '}
            <p className="pt-10">
              Donating blood is a quick and easy process! All you need to do to
              prepare is eat a hearty breakfast and drink a lot of water (avoid
              caffeine). Then simply visit a phlebotomist at your local blood
              bank or mobile blood bus!
            </p>
          </p>
        </div>
        <div class="flex flex-wrap text-center m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/opos.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                37% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                O+
              </h2>
              <p class="leading-relaxed text-base">
                O+ is the most common blood type and is transfused most often.
                Whether you donate whole blood, platelets, or plasma you'll be
                helping out the community tremendously.
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>O+, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>O+, A+, B+, AB+</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/apos.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                36% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                A+
              </h2>
              <p class="leading-relaxed text-base">
                A+ is the second most common type and, like O+ blood, this one
                can be donated as whole blood, platelets, or plasma since it is
                transfused just as often as O+.
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>A+, A-, O+, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>A+, AB+</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/bpos.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                8% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                B+
              </h2>
              <p class="leading-relaxed text-base">
                B+ is a rare blood type that should be donated through blood or
                platelets. Hospitals do not use B+ blood too often, however your
                platelets are always needed!
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>B+, B-, O+, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>B+, AB+</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/abpos.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                3% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                AB+
              </h2>
              <p class="leading-relaxed text-base">
                AB+ is one of the rarest of all blood types. This blood type is
                known as the universal plasma donor since it can be transfused
                into anyone. AB+ platelets are very important as well.
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>Any Type</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>AB+</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/oneg.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                7% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                O-
              </h2>
              <p class="leading-relaxed text-base">
                O- is the ultimate life saver and is the highest in demand. This
                blood type is known as the universal donor since these blood
                cells can be given to any patient without worry.
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>Any Type</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/aneg.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                6% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                A-
              </h2>
              <p class="leading-relaxed text-base">
                As with all negative types, A- blood will always be high in
                demand since it can be used for all A and AB types. Whole blood
                donations are the most preferred for this type!
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>A-, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>A+, A-, AB+, AB-</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/bneg.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                2% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                B-
              </h2>
              <p class="leading-relaxed text-base">
                B- is a rare and powerful type for blood donations. Like other
                negative types, B- donors should focus on donating whole blood
                since all B and AB types can receive it!
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>B-, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>B+, B-, AB+, AB-</p>
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={200}
                height={200}
                src="/abneg.png"
                priority={true}
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                1% of the population
              </h3>
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                AB-
              </h2>
              <p class="leading-relaxed text-base">
                AB- is the rarest blood type out there. They are known as
                universal platelet and plasma donors since anyone will be able
                to receive these platelets and plasma.
              </p>
              <p className="font-sm pt-5 pb-5">
                <b>Blood Types You Can Receive:</b> <p>AB-, A-, B-, O-</p>
              </p>
              <p className="font-sm">
                <b>Blood Types You Can Help:</b> <p>AB+, AB-</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blood;
