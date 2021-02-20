import Slider from 'react-animated-slider';
import styles from '../styles/acercade.module.css';
import Irev from './assets/reviews/rev.jpg';
import StarIcon from '@material-ui/icons/Star';
import arbnb from './assets/otas/airbnb-512.png';
import booking from './assets/otas/booking3.png';
import google from './assets/otas/google.jpg';
import Head from 'next/head';

const review = () => {
    return (
        <>
            <Head>
                <title>Missum - Reseñas</title>
            </Head>

            <div className="card border-0">
                <img className="card-img imageView" src={Irev} alt="reviews" />
                <div className="card-img-overlay d-flex">
                    <div className="text-center align-self-center mx-auto bg-white rounded padingReview">
                        <div className="text-warning iconos">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <p className="title">Opinión de nuestros clientes</p>
                        <p className="">Desde las diferentes plataformas con las que puedes reservar con nosotros, nuestros clientes expresan su experiencía.</p>
                    </div>
                </div>
            </div>

            <div className="">
                <Slider autoplay={3000} >
                    {reviews.map((item, index) => (
                        <div key={index} className="d-flex justify-content-center paddingSlides">
                            <div className="d-flex align-items-center d-flex flex-wrap">
                                <img className="rounded-circle mx-auto" height="50px" width="50px" src={item.imgOta} alt="ota" />
                                <div className="text-center text-warning col-md-12">
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                </div>
                                <h4 className={`text-center col-md-12 ${styles.fontStyle}`}>"{item.description}"</h4>
                                <h6 className={`text-center col-md-12 ${styles.fontStyle}`}>{item.name} <span className="font-weight-bold font-weight-normal">- {item.date}</span></h6>
                            </div>
                        </div>
                    ))

                    }
                </Slider>

            </div>

            <div className="container mt-3 w-75">
                <div className="row d-flex justify-content-center">
                    <div className="mb-5 ">
                        {reviews.map((item, index) => (
                            <div key={index} className={index > 0 ? `mt-5` : ``}>
                                <div className="text-warning col-md-12 p-0">
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                    <StarIcon style={{ fontSize: 16 }} />
                                </div>
                                <p>{item.description}</p>
                                <p>{item.name} <span className="font-weight-bold">- {item.date}</span></p>
                            </div>
                        ))}

                    </div>
                </div>

            </div>



        </>
    )
}

export default review;

const reviews = [
    {
        description: 'La vista de la terraza es maravillosa',
        name: 'Ricardo',
        date: 'Enero 2021',
        imgOta: arbnb
    },
    {
        description: 'Excelente atención, limpio, comodo y super ubicado. Lo recomiendo totalmente',
        name: 'Haide',
        date: 'Noviembre 2020',
        imgOta: booking
    },
    {
        description: 'Versatilidad, confort, seguridad y buen gusto en una magnifica ubicación en la ciudad de Puebla para estancias cortas o tan prolongadas como desees. Atención personalizada de profesionales.',
        name: 'Agustin Bertheau Irigoyen',
        date: 'Enero 2021',
        imgOta: google
    },
    {
        description: 'This is a beautiful apartment in a lovely area right in Cholula, Pueblo. Spacious and cozy, with a comfortable bed, nice little kitchen, and cozy sitting area. The two bedrooms are comfortable and the kitchen is very well-equipped. The public rooftop/penthouse (with gym) is the highlight of this accommodation. Definitely highly recommended!',
        name: 'Mirco',
        date: 'Enero 2021',
        imgOta: arbnb
    },
    {
        description: 'Great experience!, super clean, modern, practical',
        name: 'Claudio',
        date: 'Diciembre 2020',
        imgOta: booking
    },
    {
        description: 'Todo impecable, gran servicio y muy cómodo. Me ge queddo 3 veces y gran ubicación',
        name: 'Montse Bertheau',
        date: 'Enero 2021',
        imgOta: google
    },
    {
        description: 'El lugar está impecable, además muy impecable el lugar y cómodo. Altamente recomendable!',
        name: 'Daniela',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'Fantástico, awesome place! great view from the roof. the building has everthing you need.',
        name: 'Alisa',
        date: 'Diciembre 2020',
        imgOta: booking
    },
    {
        description: 'Excelente lugar, la atencion muy buena por parte de todos, muy limpio y completo, las amenidades muy padres y me encanto la vista del gym.. claro que voy a regresar.',
        name: 'Fernanda Bazagoitia Yrigoyen',
        date: 'Diciembre 2020',
        imgOta: google
    },
    {
        description: 'En una palabra, perfecto. Todo estuvo increíble, la zona, la vigilancia, el servicio, la comunicación con el host, el estacionamiento, el departamento nuevo, impecable, ordenado, excelente decoración, amenidades y en general una maravillosa experiencía. 100% recomendado',
        name: 'Gloria',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'Nos encantó. Todo muy limpio. El personal muy amable en todo momento y atentos. Esperamos regresar pronto.',
        name: 'Thalia',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'El lugar está increible, todo súper cómodo y como lo ves en las imágenes. La atención es súper buena y amable y siempre hay alguien disponible para ayudarte. Seguro y el estacionamiento súper cómodo. Sin duda me quedaría de nuevo',
        name: 'Karen',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'Super recomendable. Excelente lugar.',
        name: 'Heriberto Alan',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'La decoración del alojamiento tiene un diseño espectacular, la ubicación es excelente y se encuentra en perfectas condiciones, siempre estuvieron al pendiente de cualquier detalle respondiendo de manera inmediata, recomiendo ampliamente.',
        name: 'Diana',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'Our stay here was above all expectations, the host has been absolutely incredible. Such a warm welcome to Mexico and Cholula :)',
        name: 'Lisa',
        date: 'Diciembre 2020',
        imgOta: arbnb
    },
    {
        description: 'El lugar es perfecto para una estadía larga o corta, la atención del personal fue excelente desde la llegada hasta la salida, el lugar está impecable y mucho mejor a las fotos me encanto lo recomiendo totalmente',
        name: 'Javier',
        date: 'Noviembre 2020',
        imgOta: arbnb
    },
    {
        description: 'El lugar es tal y como aparece en las fotos, impecable, gran diseño y muy buena atención por parte del equipo MISSUM. Definitivamente regresaría.',
        name: 'Daniel',
        date: 'Noviembre 2020',
        imgOta: arbnb
    },
]