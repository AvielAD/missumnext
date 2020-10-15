import Head from 'next/head'
import Header from '../Components/NavBarApp';
import BannerCovid from '../Components/BannerCovid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <BannerCovid />


    </div>
  )
}
