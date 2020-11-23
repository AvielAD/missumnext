import { useState } from 'react';
import Head from 'next/head';
import ImgInstalaciones from './assets/ImgInstalaciones.png';
import Train from './assets/InstaSvg/train.svg';
import Gym from './assets/InstaSvg/gym.svg';
import Recep from './assets/InstaSvg/recep.svg';
import Wifi from './assets/InstaSvg/wifi.svg';
import Pool from './assets/InstaSvg/pool.svg';
import Parking from './assets/InstaSvg/parking.svg';
import Bussines from './assets/InstaSvg/bussines.svg';
import Equip from './assets/InstaSvg/equip.svg';
import Cocina from './assets/cocina1.png';
import Cuadro from './assets/cuadro.svg';
import BannerFAQ from '../Components/BannerFAQ';
import Sillon1 from './assets/sillon1.png';
import ImageGallery from 'react-image-gallery';
import api from '../Services/api';
import ImageI from './assets/DSC063791.png';
import ImageI2 from './assets/DSC063601.png';

const Instalaciones = (props) => {
    const { Video, Amenidades, Eventos, HandicapF, HandicapP, DepartDoble, Loft } = props;
    const [Gallery, setGallery] = useState("amenidades");
    let option = "amenidades";

    const listA = Amenidades.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Amenidad.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Amenidad.formats.thumbnail.url}`}`
        })
    })

    const listE = Eventos.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Evento.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Evento.formats.thumbnail.url}`}`
        })
    })

    const listF = HandicapF.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Handicap.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Handicap.formats.thumbnail.url}`}`
        })
    })

    const listP = HandicapP.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Handicap.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Handicap.formats.thumbnail.url}`}`
        })
    })

    const doble = DepartDoble.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Habitacion.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Habitacion.formats.thumbnail.url}`}`
        })
    })

    const loft = Loft.map((item) => {
        return ({
            'original': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Loft.url}`}`,
            'thumbnail': `${`${process.env.NEXT_PUBLIC_API_HOST}${item.Loft.formats.thumbnail.url}`}`
        })
    })
    return (
        <>
            <Head>
                <title>Missum - Instalaciones</title>
            </Head>

            <div className="container">
                <video className="boxMultimedia" preload="none" controls poster={`${process.env.NEXT_PUBLIC_API_HOST}${Video.Portada.url}`}>
                    <source src={`${process.env.NEXT_PUBLIC_API_HOST}${Video.video.url}`} type="video/mp4" />
                </video>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="bg-missum-grey col-md-4">
                        <ul className="">
                            <li className=""><a className="text-dark">Instalaciones</a></li>
                            <li className=""><a onClick={() => setGallery("amenidades")} className="text-dark changeListPointer">Amenidades</a></li>
                            <li className=""><a onClick={() => setGallery("eventos")} className="text-dark changeListPointer">Salas de eventos y reuniones</a></li>
                            <li className=""><a onClick={() => setGallery("handicapF")} className="text-dark changeListPointer">Departamento Handicap Friendly</a></li>
                            <li className=""><a onClick={() => setGallery("handicapP")} className="text-dark changeListPointer">Departamento Pet Friendly</a></li>
                            <li className=""><a onClick={() => setGallery("doble")} className="text-dark changeListPointer">Departamento 2 habitaciones</a></li>
                            <li className=""><a onClick={() => setGallery("loft")} className="text-dark changeListPointer">Departamento tipo loft</a></li>
                        </ul>

                    </div>

                    <div className={`${Gallery == "amenidades" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[0].Title}</p>
                            <p className="">{items[0].Description}</p>
                        </div>
                    </div>

                    <div className={`${Gallery == "eventos" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[1].Title}</p>
                            <p className="">{items[1].Description}</p>
                        </div>
                    </div>

                    <div className={`${Gallery == "handicapF" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[2].Title}</p>
                            <p className="">{items[2].Description}</p>
                        </div>
                    </div>

                    <div className={`${Gallery == "handicapP" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[3].Title}</p>
                            <p className="">{items[3].Description}</p>
                        </div>
                    </div>

                    <div className={`${Gallery == "doble" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[4].Title}</p>
                            <p className="">{items[4].Description}</p>
                        </div>
                    </div>
                    <div className={`${Gallery == "loft" ? '' : 'd-none'} container col-md-8 `}>
                        <div>
                            <p className="h1">{items[5].Title}</p>
                            <p className="">{items[5].Description}</p>
                        </div>
                    </div>
                </div>

                <div className={`${Gallery == "amenidades" ? '' : 'd-none'} container col-md-12`}>
                    <ImageGallery  additionalClass="h-100 w-100" items={listA} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>

                <div className={`${Gallery == "eventos" ? '' : 'd-none'} container col-md-12 `}>
                    <ImageGallery autoPlay={true} items={listE} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>

                <div className={`${Gallery == "handicapF" ? '' : 'd-none'} container col-md-12 `}>
                    <ImageGallery items={listF} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>

                <div className={`${Gallery == "handicapP" ? '' : 'd-none'} container col-md-12 `}>
                    <ImageGallery items={listP} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>

                <div className={`${Gallery == "doble" ? '' : 'd-none'} container col-md-12 `}>
                    <ImageGallery items={doble} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>

                <div className={`${Gallery == "loft" ? '' : 'd-none'} container col-md-12 `}>
                    <ImageGallery items={loft} lazyLoad={true} showThumbnails={false} showNav={false}
                        showBullets={true} showIndex={true} useBrowserFullscreen={true} />
                </div>
            </div>
            <div className="row ">

                <div className="col-md-6">
                    <img className="img-fluid " src={ImageI} alt="alt" />
                </div>

                <div className="container col-xs-12 col-md-6 text-center mt-2">
                    <div className="row d-flex align-items-center d-flex justify-content-center h-100 w-100">
                    <p className="h1">Beneficios y servicios</p>
                        
                        <div className="col-6 col-md-6">
                            <img src={Gym} alt="icon svg"></img>
                            <p>Gimnasio</p>
                        </div>
                        
                        <div className="col-6 col-md-6">
                            <img src={Wifi} alt="icon svg"></img>
                            <p>Wifi Gratis</p>
                        </div>

                        <div className="col-6">
                            <img src={Recep} alt="icon svg"></img>
                            <p>Recepcion</p>
                        </div>
                        
                        <div className="col-6">
                            <img src={Parking} alt="icon svg"></img>
                            <p>Estacionamiento</p>
                        </div>

                        <div className="col-6">
                            <img src={Equip} alt="icon svg"></img>
                            <p>Equipamiento</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row card border-0 ">
                <img className="card-img pt-5 " src={ImageI2} alt="imagen"/>
                <div className="card-img-overlay d-flex justify-content-end">
                    <p className="bg-missum text-white overInstalation">No te pierdas la oportunidad de vivir la experiencia Missum</p>
                </div>
            </div>

        </>
    )
}
export const getStaticProps = async (ctx) => {

    const VideoHome = await api.Videos.getVideo(2);
    const Amenidades = await api.Catalogo.Amenidades();
    const Eventos = await api.Catalogo.Eventos();
    const HandicapF = await api.Catalogo.HandicapF();
    const HandicapP = await api.Catalogo.HandicapP();
    const DepartDoble = await api.Catalogo.DepartDoble();
    const Loft = await api.Catalogo.Loft();

    return {
        props: {
            Video: VideoHome.data,
            Amenidades: Amenidades.data,
            Eventos: Eventos.data,
            HandicapF: HandicapF.data,
            HandicapP: HandicapP.data,
            DepartDoble: DepartDoble.data,
            Loft: Loft.data
        },
    }
}

export default Instalaciones;

const items = [

    {
        Title: 'AMENIDADES',
        Description: 'MISSUM cuenta con excelentes y comódas amenidades para que se sienta como en casa. Disfruta de nuestra terraza con una vista increíble a los volcanes, ideal para tomar un café mientras se aprecia el atardecer. Contamos con un business center con cubículos especiales para cuatro personas totalmente privados y una barra de trabajo. Para ejercitarse puede hacer uso del gimnasio que cuenta con aparatos de cardio y equipamiento para fuerza. Contamos con centro de lavado exclusivo para los inquilinos donde podrás hacer uso gratuito de la lavadora, secadora y plancha. '
    },
    {
        Title: 'Salas de Eventos y Reuniones',
        Description: 'MISSUM cuenta con una sala para eventos y reuniones de negocios con capacidad máxima de 20 personas, con una increíble vista, se ofrece el servicio de coffe break, desayunos, comidas y  cocktail.'
    },
    {
        Title: 'Departamento Handicap Friendly',
        Description: 'Ideal para adultos mayores o personas con discapacidad, cuenta con las puertas más amplias, con dos habitaciones con 2 camas queen size, sala, comedor para cuatro personas, cocina integral equipada, baño más amplio con regadera adecuada con barras y entrada para silla de ruedas, pantalla smart tv. Wi-fi gratis, amenidades como lavandería, terraza y gimnasio.'
    },
    {
        Title: 'Departamento Handicap Pet Friendly',
        Description: 'Ideal para estancias con mascotas pequeñas ya que se cuenta con amplio balcón o terraza privada. Departamento con dos habitaciones con camas queen size, sala, comedor para cuatro personas, cocina integral equipada, baño más amplio con regadera adecuada con barras y entrada para silla de ruedas, pantalla smart tv. Wi-fi gratis, amenidades como lavanderia, terraza y gimnasio.'
    },
    {
        Title: 'Departamento Dos Habitaciones',
        Description: 'Ideal para dos o cuatro personas  o familia cuenta con dos habitaciones amplias con 2 camas queen size, sala, comedor para cuatro personas, cocina integral equipada, baño completo, pantalla smart tv. Wi-fi gratis, amenidades como lavandería, terraza y gimnasio.'
    },
    {
        Title: 'Departamento Tipo Loft',
        Description: 'Ideal para una persona o pareja cuenta con una habitación amplia con cama queen size,  escritorio, cocina integral equipada con barra, baño completo, pantalla smart tv. Wi-fi gratis, amenidades como lavandería, terraza y gimnasio. '
    },
]