import Logo from './assets/logofooter.svg';
import styles from './styles.module.css';
import Face from './assets/face.svg';
import Insta from './assets/insta.svg';
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
                <div className="container row text-center d-flex justify-content-center d-flex align-items-center">
                    <p className="col-sm-12 col-md-3 text-white">operaciones@missum.mx</p>
                    <p className="col-sm-12 col-md-2 text-white text-white">2229636166</p>
                    <p className="col-sm-12 col-md-3 text-white">Camino Morillotla 29 Reserva Territorial Quetzalcoatl, San Andrés Cholula.</p>
                    <a href="https://www.facebook.com/Missumversatileliving-356190838351772">
                        <img className="p-4" src={Face} alt="facebook"></img>
                    </a>
                    <a href="https://www.instagram.com/missum.versatile.living/">
                        <img className="p-4" src={Insta} alt="Instagram"></img>
                    </a>
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