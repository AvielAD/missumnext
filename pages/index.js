import api from '../Services/api';
import Head from 'next/head'
import CarouselHome from '../Components/CarouselHome';
import SearchBar from '../Components/ADMoleculas/SearchBar';
import BannerConcept from '../Components/BannerConcept';
import BannerPromo from '../Components/BannerPromo';
import BannerEquipament from '../Components/BannerEquipament';
import BannerTurismo from '../Components/BannerTurismo';
import BannerUbicacion from '../Components/BannerUbicacion';
import Carousel from 'react-elastic-carousel';
import Cocina from './assets/cocina1.png';
import bussines1 from './assets/bussines1.png';
import bussines2 from './assets/bussines2.png';

export default function Home({ slidesCarousel, slidesConcept, Promos, Equipament, Video}) {
  
  return (
    <>
      <Head>
        <title>Missum</title>
      </Head>


      <section className="">
          <CarouselHome slidesCarousel={slidesCarousel} />
      </section>

      <section className="container mt-4 mb-4">
        <div className="row-12 text-center font-weight-bold mb-5">
          <p className="h1">Missum, tu nuevo concepto Versatile Living</p>
        </div>

        <BannerConcept slidesConcept={slidesConcept} />
      </section>

      <section className="container mb-4">
        <div className="container text-center">
          <p className="h1 mb-5"> Promociones</p>
        </div>
        <BannerPromo Promos={Promos} />
      </section>

      <section className="mb-4">
        <div className="container text-center">
          <p className="h1 mb-5"> ¡ Todos nuestros departamentos lo haran sentirse como en casa!</p>
        </div>

        <BannerEquipament Equipament={Equipament} />

      </section>

      <section id="#bussines" className="mb-4">
        <div className="container card border-0">
          
          <div className="card-img p-3">
            <Carousel itemsToShow={1} showArrows={false}>
               <img src={bussines1} alt="bussines1"/>
               <img src={bussines2} alt="bussines2"/>
            </Carousel>
          </div>

          <div className="card-img-overlay box-video bg-missum text-white">
              <p className="card-text ">Planifica tu próxima reunión de negocios o a tu próximo evento expecial con nosotros</p>
              <p className="card-text ">Missum ofrece salas de reuniones que pueden recibir hasta 4 personas y una terraza con capacidad maxima para 20 personas</p>
              <p className="card-text ">Pregunta por nuestros paquetes de sesiones con coffe break.</p>
          </div>
        </div>
      </section>


      <section id="#video" className="container mb-4">
        <div>
          <video className="boxMultimedia" controls preload="none" poster={`${process.env.NEXT_PUBLIC_API_HOST}${Video.Portada.url}`}>
            <source src={`${process.env.NEXT_PUBLIC_API_HOST}${Video.video.url}`}/>

          </video>
        </div>
      </section>


      <section className="container ">
        <div className="container text-center">
          <p className="h1 mb-2"> Todo lo que necesitas para esta gran experiencia cerca de ti</p>
        </div>

        <BannerUbicacion />
      </section>



    </>
  )
}

export const getStaticProps = async (ctx) => {
  const BannerCarousel = await api.home.carousel();
  const BannerConcept = await api.home.concept();
  const BannerPromos = await api.home.promos();
  const BannerEquipament = await api.home.equipament();
  const VideoHome = await api.Videos.getVideo(1);

  return {
    props:{
      slidesCarousel: BannerCarousel.data,
      slidesConcept: BannerConcept.data,
      Promos: BannerPromos.data,
      Equipament: BannerEquipament.data,
      Video: VideoHome.data,
    }
  }
}
