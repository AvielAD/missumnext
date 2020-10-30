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
const Instalaciones = () => {

    return (
        <>
            <Head>
                <title>Missum - Instalaciones</title>
            </Head>

            <div className="card">
                <img className="card-img" src={Cocina} alt="cocina"/>
                <div className="card-img-overlay bg-white w-50 h-50 d-flex justify-content-end">
                    <p className="h1">Conoce nuestros departamentos</p>
                    <img className="d-flex align-self-center" src={Cuadro} alt="cuadro"/>
                </div>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={ImgInstalaciones} alt="imagen instalaciones" />
                    </div>

                    <div className="col-md-6">
                        <p className="text-center h1 mb-5 mt-5">Beneficio y Servicios</p>

                        <div className="row text-center d-flex justify-content-around mt-5 mb-5">
                            <div className="">
                                <img src={Train} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                            <div className="">
                                <img src={Gym} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                        </div>

                        <div className="row text-center d-flex justify-content-around mt-5 mb-5">
                            <div className="">
                                <img src={Recep} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                            <div className="">
                                <img src={Wifi} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                        </div>

                        <div className="row text-center d-flex justify-content-around mt-5 mb-5">
                            <div className="">
                                <img src={Pool} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                            <div className="">
                                <img src={Parking} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                        </div>

                        <div className="row text-center d-flex justify-content-around mt-5 mb-5">
                            <div className="">
                                <img src={Bussines} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                            <div className="">
                                <img src={Equip} alt="imagen" />
                                <p className="">Traslado al aeropuerto</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Instalaciones;