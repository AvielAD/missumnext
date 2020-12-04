import Head from 'next/head';
import Bed from './assets/DSC064401.png';
import Mesa1 from './assets/DSC063792.png';
import Mesa2 from './assets/DSC064341.png';
import Mesa3 from './assets/DSC062661.png';
import Sillon1 from './assets/DSC065591.png';

const Acercade = () => {
    return (
        <>
            <Head>
                <title>Missum - Acerca de</title>
            </Head>
            <div className="">
                <div className="card border-0">
                    <img className="card-img w-100 pl-5" src={Bed} alt="" />
                    <p className="card-img-overlay overAbout1 bg-white">Acerca de Missum</p>
                </div>
            </div>
            <div className="container-fluid row mt-5">
                <img className="img- fluid col-md-3" src={Mesa1} alt="" />
                <div className="col-md-6 p-3">
                    <p className="h1">Nuestro Concepto</p>
                    <p className="font-weight-bold">Vocablo latín que significa confiar a alguien la ejecución de una cosa.</p>
                    <p className="">¡Bienvenido a MISSUM  versatile living! El departamento completo y 100% equipado con todo lo que necesitas para tener una increíble estancia. Cuenta con una cama Quenn, además de sala, cocina y baño completos y área con lavadora y secadora de ropa. Contamos con departamentos (Loft, Handicap) </p>
                    <p className="">La ubicación oportuna en San Andrés cholula hace de este alojamiento una opción perfecta para viajeros y familias que buscan buena movilidad por toda la ciudad. </p>
                </div>
                <img className="img-fluid col-md-3" src={Mesa2} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
                <img className="img-fluid" src={Mesa3}/>
            </div>
            <div className="row mt-5 card border-0">
                <img className="img-card imgAbout" src={Sillon1} alt="imagen about"/>
                    <div className="card-img-overlay overAbout2 bg-missum">
                        <div className="row d-flex justify-content-center">
                            <p className="">¿Qué dicen nuestros clientes?</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elite.</p>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Acercade;