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
                  priority={true}
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
              <p class="leading-relaxed text-lg mb-4 text-center">
                Plasma donations are typically used to treat severe trauma,
                burns, shock injuries, certain conditions caused by cancer,
                liver issues, and clotting disorders. The process for donating
                plasma differs very little from donating blood, but other than
                taking a few extra minutes you wouldn't even realize it. The
                best part of donating plasma is that it can be frozen and stored
                for up to an entire year after you donate! AB is known as the
                universal blood type for plasma donations and can be given to
                anyone with any blood type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default plasma;
