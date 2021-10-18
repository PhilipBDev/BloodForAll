import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    // <nav className="bg-red-500 shadow-lg font-bold text-white text-lg p-4 flex justify-center ">
    //   <div className="font-bold">BloodForAll</div>
    //   <div className="space-x-7">
    //     <Link href="/donate" className="py-4 px-2 border-b-4 font-semibold">
    //       <a className="hover:underline hover:animate-pulse">DONATE</a>
    //     </Link>
    //     <Link href="/blood" className="py-4 px-2 border-b-4 font-semibold">
    //       <a className="hover:underline hover:animate-pulse">BLOOD</a>
    //     </Link>
    //     <Link href="/plasma" className="py-4 px-2 border-b-4 font-semibold">
    //       <a className="hover:underline hover:animate-pulse">PLASMA</a>
    //     </Link>
    //     <Link href="/platelets" className="py-4 px-2 border-b-4 font-semibold">
    //       <a className="hover:underline hover:animate-pulse">PLATELETS</a>
    //     </Link>
    //     <Link href="/about" className="py-4 px-2 border-b-4 font-semibold">
    //       <a className="hover:underline hover:animate-pulse">ABOUT US</a>
    //     </Link>
    //   </div>
    // </nav>
    <header className="bg-red-500 shadow-lg font-bold text-white">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 lg:absolute">
          <Image className="mx-2" src="/blood.svg" width={35} height={35} />
          <span class="ml-3 text-2xl font-bold">BloodForAll</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-lg">
          <Link href="/donate" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">DONATE</a>
          </Link>
          <Link href="/blood" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">BLOOD</a>
          </Link>
          <Link href="/plasma" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">PLASMA</a>
          </Link>
          <Link href="/platelets" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">
              PLATELETS
            </a>
          </Link>
          <Link href="/about" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">ABOUT US</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
