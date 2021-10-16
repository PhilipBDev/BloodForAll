import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-red-500 text-white font-medium text-sm p-1 text-center">
      Copyright © 2021{' '}
      <Link href="https://www.philipb.dev/">
        <a className="underline hover:animate-pulse">PhilipBDev</a>
      </Link>
    </footer>
  );
};

export default Footer;
