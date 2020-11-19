import mail from './assets/mail.svg';
import phone from './assets/phone.svg';
import ubi from './assets/ubi.svg';

const Page = () => {

    return (
        <>
            <div className="row p-5 shadow-box-1 h-100">
                <iframe className="col-md-8" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.702907511637!2d-98.27044241904908!3d19.048279206842285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32001ee75e90aa91!2sMISSUM%20Versatile%20Living!5e0!3m2!1ses-419!2smx!4v1605785765351!5m2!1ses-419!2smx" ></iframe>
                <div className="col-md-4 ">
                    <p className="h4 mb-4 mt-2 text-center"> La mejor ubicación</p>
                    <ul>
                        <li>
                            <a className="col-sm-12 text-left text-missum" href="mailto:operaciones@missum.mx"><img className="mr-1" src={mail} alt="mail"/> operaciones@missum.mx</a>
                        </li>
                        <li>
                            <a className="col-sm-12 text-missum" href="tel:2229636166"><img className="mr-1" src={phone} alt="phone"/> 2229636166 </a>
                        </li>
                        <li>
                            <a className="col-sm-12 text-missum"><img className="mr-1" src={ubi} alt="ubi"/> Camino Morillotla 29 Reserva Territorial Quetzalcoatl, San Andrés Cholula. </a>
                        </li>
                    </ul>
                    
                </div>

            </div>
        </>
    )

}

export default Page;