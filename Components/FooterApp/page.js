import Logo from './assets/logofooter.svg';
import styles from './styles.module.css';
import Linked from './assets/linkedin.svg';
import Twitter from './assets/twitter.svg';
const Page = () => {

    return (
        <>
            <div className="container p-5">
                <div className="d-flex justify-content-center mb-5">
                    <div className="row">
                        <img className="img-fluid" src={Logo} alt="imagen logo" />
                    </div>
                </div>
                <hr className="bg-white"/>
                <div className="container row text-center d-flex justify-content-center">
                    <p className="col-sm-12 col-md-3 text-white">operaciones@missum.mx</p>
                    <p className="col-sm-12 col-md-2 text-white text-white">2229636166</p>
                    <p className="col-sm-12 col-md-3 text-white">Camino Morillotla 29 Reserva Territorial Quetzalcoatl, San Andres Cholula.</p>
                </div>
                <hr className="bg-white"/>

            </div>
            <div className="container-fluid p-3">
                    <p className="text-white text-center">©2020 Missum. Todos los derechos reservados.</p>
            </div>
        </>
    )
}
export default Page;