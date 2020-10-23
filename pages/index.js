import api from '../Services/api';
import Head from 'next/head'
import Header from '../Components/NavBarApp';
import BannerCovid from '../Components/BannerCovid';
import CarouselHome from '../Components/CarouselHome';
import BannerConcept from '../Components/BannerConcept';
import BannerPromo from '../Components/BannerPromo';
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Missum</title>
        <link rel="icon" href="/isotipo.ico"/>
      </Head>

      <Header />

      <BannerCovid />

      <CarouselHome slidesCarousel={props.slidesCarousel}/>

      <BannerConcept />

      <BannerPromo />

      

    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await api.home.carousel();
  return { slidesCarousel: res.data}
}
