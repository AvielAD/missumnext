import Head from 'next/head';
import Bed from './assets/bedabout.png';
import Mesa1 from './assets/mesa1.png';
import Mesa2 from './assets/mesa2.png';
import Mesa3 from './assets/mesa3.png';
import Sillon1 from './assets/sillon1.png';
const Acercade = () => {

    return (
        <>

            <Head>
                <title>Missum - Acerca de</title>
            </Head>

            <div className="container">
                <p className="h1">Acerca de Missum</p>
                <img className="w-75" src={Bed} alt="" />
            </div>

            <div className="container row">
                <img className="col-md-3" src={Mesa1} alt="" />
                <div className="col-md-6">
                    <p className="h1">Nuestro Concepto</p>
                    <p className="">Vocablo latin que significa confiar a alguien la ejecución de una cosa.</p>
                    <p className="">Vocablo latin que significa confiar a alguien la ejecución de una cosa.
                ¡Bienvenido a MISSUM  versatile iving  El departamento completo y 100% equipado con todo lo que necesitas para tener una increíble estancia. Cuenta con una cama Quenn, además de sala, cocina y baño completos y área con lavadora y secadora de ropa. Contamos con deptos (Loft, Handicap </p>
                </div>
                <img className="col-md-3" src={Mesa2} alt="" />

            </div>

            <div className="">
                <img src={Mesa3}/>
                    <div className="w-25">
                        <p className="h1">¿Qué dicen nuestros clientes?</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                        <div className="">
                            
                        </div>
                    </div>
                <img src={Sillon1}/>
            </div>

        </>
    )
}

export default Acercade;