import './styles.module.css';
import Tower from './assets/edificio.svg'
import Bath from './assets/bath.svg'
import Reception from './assets/reception.svg'

const BannerConcept = () => {
    return (
        <div className="container text-center mt-5 mb-5">
            <div className="row-12 font-weight-bold mt-5 mb-5">
                <p className="h1">Missum, tu nuevo concepto Versatile Living</p>
            </div>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-sm align-middle ">
                    <img src={Tower} alt="Tower" className="mb-5"/>
                    <p className="font-weight-bold h5">Departamentos Personalizados</p>
                    <p>Hospedaje y Arrendamiento, elige y paga solo lo que necesitas, equipamiento, blancos y muebles.</p>
                </div>
                <div className="col-sm align-middle ">
                    <img src={Bath} alt="Tower" className="mb-5"/>
                    <p className="font-weight-bold h5">Sientete como en casa</p>
                    <p>Tenemos las mejores amenidades, instalaciones de lujo y la mejor ubicación de Puebla.</p>
                </div>
                <div className="col-sm align-middle ">
                    <img src={Reception} alt="Tower" className="mb-5"/>
                    <p className="font-weight-bold h5">Espacios para eventos y reuniones</p>
                    <p>Tenemos espacios como terraza y bussines center para tus sesiones.</p>
                </div>
            </div>
        </div>
    );
}

export default BannerConcept;