import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-red-500 shadow-lg font-bold text-white text-lg p-4">
      <div className="flex justify-center space-x-7">
        <Link href="/donate" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:animate-pulse">DONATE</a>
        </Link>
        <Link href="/blood" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:animate-pulse">BLOOD</a>
        </Link>
        <Link href="/plasma" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:animate-pulse">PLASMA</a>
        </Link>
        <Link href="/platelets" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:animate-pulse">PLATELETS</a>
        </Link>
        <Link href="/about" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:animate-pulse">ABOUT US</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
