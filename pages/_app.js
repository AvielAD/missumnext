import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-animated-slider/build/horizontal.css';

import Header from '../Components/NavBarApp';
import BannerCovid from '../Components/BannerCovid';
import FooterApp from '../Components/FooterApp';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/isotipo.ico"/>
      </Head>
  
      <header>
        <Header />
      </header>
      <section className="container-fluid bg-missum text-center p-2 ">
        <BannerCovid />
      </section>
      
      <Component {...pageProps} />

      <section className="bg-missum container-fluid">
        <FooterApp />
      </section>
    </>
  )


}

export default MyApp
