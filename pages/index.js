import Head from 'next/head'
import Header from '../Components/NavBarApp';
import BannerCovid from '../Components/BannerCovid';
import CarouselHome from '../Components/CarouselHome';
import BannerConcept from '../Components/BannerConcept';
import BannerPromo from '../Components/BannerPromo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <BannerCovid />

      <CarouselHome width="100" height="100%"/>

      <BannerConcept />

      <BannerPromo />

      

    </div>
  )
}
