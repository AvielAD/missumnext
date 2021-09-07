import Head from 'next/head';
import ContactoBannerForm from '../Components/ContactoBannerForm';
import ContactoBannerDetail from '../Components/ContactoBannerDetail';

const Contacto = () => {
    
    return (
        <>
            <Head>
                <title>Missum - Contacto</title>
                <script src='./trackingSojern.js' type="text/javascript"/>
            </Head>


            <section className="container-fluid">

                <ContactoBannerForm />

                <ContactoBannerDetail />

                <div className="border container w-75 mt-5 mb-5">
                    <div className="">
                        <p className="h1">Reservaciones especiales</p>
                        <p className="mt-5">Si necesitas reservar de manera grupal más de 10 departamentos por noche llena nuestro formulario de contacto con motivo de reservación especial</p>
                        <p className="font-weight-bold">Nos comunicaremos contigo en un plazo de 24 horas</p>
                    </div>
                    <div className="bg-missum-grey text-center w-100 ">
                        <p className="w-100">¿Tienes alguna duda? <a>Resvisa nuestras FAQS</a></p>
                    </div>
                </div>
            </section>


          

        </>
    )
}




export default Contacto;