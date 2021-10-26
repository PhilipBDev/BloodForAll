import Image from 'next/image';

const about = () => {
  return (
    <>
      <div className="pt-12 flex justify-center items-center text-center pl-16 pr-16">
        <p>
          BloodForAll is the Internet's number one resource for information on
          blood banks and the donation process. We'll teach you what type of
          donation, from blood to platelets to plasma, would be most beneficial
          to others depending on your blood type. For example, O- blood is best
          for blood donations while B+ should focus on donating platelets. With
          that said, no matter your type, donating blood, plasma, or platelets
          will help save a life!
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-16 mx-auto flex lg:flex-row flex-col justify-center">
          <div class="flex flex-col justify-center text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet the team responsible for sharing information about the
              donation process through their experiences!
            </p>
          </div>
          <div class="flex flex-wrap text-center -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/1.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Joel Winger
                  </h2>
                  <p class="text-gray-500">CEO</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/2.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Abed Pudi
                  </h2>
                  <p class="text-gray-500">UI Design</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/3.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Annie Brie
                  </h2>
                  <p class="text-gray-500">Event Coordinatior</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/4.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Britta Jacobs
                  </h2>
                  <p class="text-gray-500">Programmer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/5.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Dean Chang
                  </h2>
                  <p class="text-gray-500">Head of Donor Services</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/6.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Bernie Bernz
                  </h2>
                  <p class="text-gray-500">Lead Phlebotomist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/7.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p class="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/8.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Matthew McCree
                  </h2>
                  <p class="text-gray-500">Biologics Supervisor</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/avatars/9.jpg"
                  priority={true}
                  width={64}
                  height={64}
                ></Image>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Ford Willingham
                  </h2>
                  <p class="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
