import Link from 'next/link';
import { useState } from 'react';

const TopNav = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <nav className=" bg-white text-black font-medium text-sm p-1 ">
      <div className="flex justify-center space-x-7">
        <Link href="/" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:bg-gray-300">HOME</a>
        </Link>
        <Link href="/contact" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:bg-gray-300">CONTACT</a>
        </Link>
        {signedIn && (
          <Link href="/profile" className="py-4 px-2 border-b-4 font-semibold">
            <a className="hover:underline hover:bg-gray-300">PROFILE</a>
          </Link>
        )}
        {/* <Link href="/" className="py-4 px-2 border-b-4 font-semibold">
          <a className="hover:underline hover:bg-gray-300">SIGN IN</a>
        </Link> */}
        {!signedIn && (
          <button
            className="hover:underline hover:bg-gray-300 font-semibold"
            type="button"
            onClick={() => setSignedIn(!signedIn)}
          >
            SIGN IN
          </button>
        )}
        {signedIn && (
          <button
            className="hover:underline hover:bg-gray-300 font-semibold"
            type="button"
            onClick={() => setSignedIn(!signedIn)}
          >
            SIGN OUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
