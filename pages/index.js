import api from '../Services/api';
import Head from 'next/head'
import CarouselHome from '../Components/CarouselHome';
import SearchBar from '../Components/ADMoleculas/SearchBar';
import BannerConcept from '../Components/BannerConcept';
import BannerPromo from '../Components/BannerPromo';
import BannerEquipament from '../Components/BannerEquipament';
import BannerTurismo from '../Components/BannerTurismo';
import BannerUbicacion from '../Components/BannerUbicacion';

export default function Home({ slidesCarousel, slidesConcept, Promos, Equipament }) {
  return (
    <>
      <Head>
        <title>Missum</title>
        <link rel="icon" href="/isotipo.ico" />
      </Head>


      <section className="card">
        <CarouselHome className="card-img" slidesCarousel={slidesCarousel} />
        <div className="row card-img-overlay d-flex justify-content-center align-items-center">
          <div className="row w-50">
            <p className="col-md-12 text-center text-white title-carousel title-h1Carousel"> ¡Configura tu estancia!</p>
            <p className="col-md-12 text-center text-white title-carousel ">Tu comodidad es lo más importante, personaliza como desees</p>
            <SearchBar className="col-md-12 w-100 mt-5"/>
          </div>

        
        </div>
      </section>

      <section className="container mt-5 mb-5">
        <div className="row-12 text-center font-weight-bold mb-5">
          <p className="h1">Missum, tu nuevo concepto Versatile Living</p>
        </div>

        <BannerConcept slidesConcept={slidesConcept} />
      </section>

      <section className="container mt-5 mb-5">
        <div className="container text-center">
          <p className="h1 mb-5"> Promociones</p>
        </div>
        <BannerPromo Promos={Promos} />
      </section>

      <section className="container mt-5 mb-5 d-none d-sm-none d-md-block">
        <div className="container text-center">
          <p className="h1 mb-5"> ¡ Todos nuestros departamentos lo haran sentirse como en casa!</p>
        </div>

        <BannerEquipament Equipament={Equipament} />

      </section>



      <section className="container mt-5 mb-5">
        <div className="container text-center">
          <p className="h1 mb-5"> Todo lo que necesitas para esta gran experiencia cerca de ti</p>
        </div>

        <BannerUbicacion />
      </section>



    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const BannerCarousel = await api.home.carousel();
  const BannerConcept = await api.home.concept();
  const BannerPromos = await api.home.promos();
  const BannerEquipament = await api.home.equipament();

  return {
    slidesCarousel: BannerCarousel.data,
    slidesConcept: BannerConcept.data,
    Promos: BannerPromos.data,
    Equipament: BannerEquipament.data,
  }
}
