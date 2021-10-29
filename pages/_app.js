import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <meta property="og:title" content="BloodForAll" />
        <meta property="og:image" content="https://i.imgur.com/nH6o5gA.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
