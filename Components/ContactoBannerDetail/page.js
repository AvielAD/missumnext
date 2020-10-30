import ContactoImagen2 from './assets/contactImagen2.png';
import VectorTel from './assets/VectorTel.svg';
import Cuadro from './assets/cuadro.svg';
const Page = () => {

    return (
        <>
            <div className="container">

                <div className="row">
                    <img className="col-md-2" src={Cuadro} alt="imagen cuadro" />
                    <div className="col-md-8">
                        <p className="h2">Agenda tu cita</p>
                        <p className="">Visiita con uno de nuestros especialistas y conoce nuestras instalaciones</p>
                    </div>
                </div>

                <div className="row">
                    <div className="card">
                        <img className="card-img img-fluid" src={ContactoImagen2} alt="imagen contacto" />

                        <div className="card-img-overlay text-center d-flex justify-content-center">
                            
                            <div className="row">
                                <div className="">
                                    <img src={VectorTel} alt="telefono" />
                                    <p className="text-white">beatrizochoa@missum.com</p>
                                    <p className="text-white">5546734213</p>
                                </div>

                                <div className="">
                                    <img src={VectorTel} alt="telefono" />
                                    <p className="text-white">beatrizochoa@missum.com</p>
                                    <p className="text-white">5546734213</p>
                                </div>

                                <div className="">
                                    <img src={VectorTel} alt="telefono" />
                                    <p className="text-white">beatrizochoa@missum.com</p>
                                    <p className="text-white">5546734213</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <p className="h1">Reservaciones especiales</p>
                        <p className="">Si necesitas reservar de manera grupal más de 10 departamentos por noche llena nuestro formulario de contacto con motivo de reservación especial</p>
                        <p className="">Nos comunicaremos contigo en un plazo de 24 horas</p>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <p className="">¿Tienes alguna duda? <a>Resvisa nuestras FAQS</a></p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Page;