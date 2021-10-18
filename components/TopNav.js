import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const TopNav = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div class="container mx-auto flex flex-wrap justify-center bg-white text-black font-medium text-sm p-1 flex-col md:flex-row items-center">
      <nav class="flex flex-wrap items-center justify-center">
        <div className="flex justify-center space-x-7">
          <Link href="/" className="py-4 border-b-4 font-semibold">
            <a className="hover:underline hover:bg-gray-300">HOME</a>
          </Link>
          <Link href="/contact" className="py-4 border-b-4 font-semibold">
            <a className="hover:underline hover:bg-gray-300">CONTACT</a>
          </Link>
          {/* {user && (
            <Link href="/profile" className="py-4 border-b-4 font-semibold">
              <a className="hover:underline hover:bg-gray-300">PROFILE</a>
            </Link>
          )} */}
          {!user && <a href="/api/auth/login">SIGN IN</a>}
          {user && (
            <a
              href="/api/auth/logout"
              className="hover:underline hover:bg-gray-300 font-semibold"
            >
              SIGN OUT
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
