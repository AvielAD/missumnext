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
                <div className="container row text-center">
                    <p className="col-sm-12 col-md-3 text-white">Correo Missum</p>
                    <p className="col-sm-12 col-md-2 text-white">Telefono Missum</p>
                    <p className="col-sm-12 col-md-3 text-white">Direccion Missum</p>
                    <p className="col-sm-12 col-md-2 text-white">Direccion Missum</p>
                    <p className="col-sm-12 col-md-2 text-white">Direccion Missum</p>
                </div>
            </div>
            <div className="container-fluid p-3">
                    <p className="text-white text-center">©2020 Missum. Todos los derechos reservados.</p>
            </div>
        </>
    )
}
export default Page;