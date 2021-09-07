import api from '../Services/api';
import { Helmet } from 'react-helmet';
import Head from 'next/head';

const Covid = ({Video}) => {
    

    return (
        <>
            <Head>
                <title>Missum - Covid19</title>
                <script src='./trackingSojern.js' type="text/javascript"/>
            </Head>

            <div className="container">
                <video className="boxMultimedia" preload="none" controls poster={`${process.env.NEXT_PUBLIC_API_HOST}${Video.Portada.url}`}>
                    <source src={`${process.env.NEXT_PUBLIC_API_HOST}${Video.video.url}`} type="video/mp4" />
                </video>


                <div className="h5 mt-5 mb-5">
                    <p className="h1 font-weight-bold mb-5">COVID19</p>
                    <p className="">
                    MISSUM es consciente de la incertidumbre sobre la enfermedad del coronavirus (COVID19) está causando en el mundo; por eso estamos comprometidos en cuidar la salud y la
                    seguridad de nuestros huéspedes y empleados. A continuación, le informamos de las
                    medidas que hemos adoptado en respuesta a esta pandemia. 
                    </p>
                    <p className="">
                    Nuestra mayor prioridad es su salud, seguridad y bienestar. MISSUM está al tanto de los
                    acontecimientos en todo el mundo y en constante actualización de las novedades de
                    organizaciones globales como la Organización Mundial de la Salud (OMS) y constante
                    cumplimiento de las leyes locales y nacionales con el objetivo de conocer los requisitos
                    específicos y, de tal manera garantizar que las acciones que se toman sean las adecuadas.
                    </p>
                    <p>
                    MISSUM aplica en sus instalaciones las mejores prácticas y pautas, así como el personal se
                    encuentra informado y capacitado sobre hábitos de higiene frente al COVID-19 que tienen
                    y reducir la exposición y transmisión de COVID-19. 
                    </p>
                    <b>Medidas a tomar</b>

                    <ul className=""> 
                        <li className="mt-3 mb-3"><b>MISSUM </b> 
                        ha profundizado las prácticas de limpieza en cada uno de los
                        departamentos, siendo cuidadosos en desinfectar detalladamente todas las áreas y
                        puntos de contacto especialmente en cada cambio de huésped.  
                        </li>
                        <li className="mb-3"><b>MISSUM </b>
                        ha aumentado la frecuencia de limpieza y desinfección de las áreas
                        públicas y departamentos haciendo énfasis en los puntos de contacto constantes
                        (manijas, apagadores, elevador, pasamanos, etc.)
                        </li>
                        <li className="mb-3"><b>MISSUM </b>
                        ha informado y capacitado a todo su personal sobre las medidas a tomar y
                        sobre los productos y protocolos de limpieza efectivos contra el virus.
                        </li>
                        <li className="mb-3"><b>MISSUM </b>
                        ha adecuado sus instalaciones con las medidas necesarias, como
                        colocación de gel con un 70% de alcohol en puntos específicos, tapetes para la
                        desinfección de calzado, jabón antibacterial en los baños comunes y medidas en la
                        capacidad de las áreas comunes. 
                        </li>
                        <li className="mb-3"><b>MISSUM </b>
                        cuenta con los medios para informar a los huéspedes sobre las medidas
                        que ellos deben tomar para contribuir a que el virus no afecte a los huéspedes y al
                        personal, así como, el uso de cubre bocas en zonas de uso común, el correcto lavado
                        de manos y el distanciamiento social.
                        </li>
                    </ul>
                    <p>
                    A fin de proteger la salud y seguridad de nuestra comunidad no deben reservar los
                    servicios de MISSUM si se encuentra de los siguientes casos: 
                    </p>
                    <ul>
                        <li className="mb-3">
                        Actualmente presentas infección o diste positivo al COVID-19 en los últimos 30 días
                        </li>
                        <li className="mb-3">
                        Sospechas que estás enfermo o enferma, o tuviste exposición y estás a la espera
                        de los resultados de las pruebas para confirmar o descartar un diagnóstico de COVID-19
                        </li>
                        <li className="mb-3">
                        Muestras síntomas o te preocupa una posible infección de COVID-19
                        </li>
                        <li className="mb-3">
                        Has tenido contacto cercano y continuo con una persona enferma de COVID-19 o
                        con sospechas de estarlo en los últimos 14 días*
                        </li>
                    </ul>
                    <p>Para obtener más detalles sobre qué hacer en caso de enfermedad o exposición al COVID19, revisa las siguientes páginas: </p>
                        <ul className="mt-4">
                            <li className="mb-3"><a className="text-missum" href="http://www.imss.gob.mx/covid-19">http://www.imss.gob.mx/covid-19</a></li>
                            <li className="mb-3"><a className="text-missum" href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses">https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses</a></li>                        
                        </ul>       
                </div>
            </div>


           

        </>
    )
}
export const getStaticProps = async (ctx) => {
    const VideoHome = await api.Videos.getVideo(5);
  
    return {
      props:{
        Video: VideoHome.data,
      }
    }
  }


export default Covid;