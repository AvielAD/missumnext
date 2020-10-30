import Head from 'next/head';
import ContactoBannerForm from '../Components/ContactoBannerForm';
import ContactoBannerDetail from '../Components/ContactoBannerDetail';

const Contacto =()=>{

    return(
        <>
            <Head>
              <title>Missum - Contacto</title>
            </Head>

            
            <section className="container-fluid">
                <ContactoBannerForm/>
                <ContactoBannerDetail/>
            </section>

        </>
    )
}

export default Contacto;