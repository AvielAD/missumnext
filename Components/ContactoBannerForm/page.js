import ImageContact from './assets/DSC062851.png';
import { withFormik, Field } from 'formik';
import ButtonGhost from '../ADMoleculas/ButtonAD';
import axios from 'axios';
import stylesButton from '../ADMoleculas/ButtonAD/styles.module.css';
import User from './assets/user.svg';
import Smart from './assets/smartphone.svg';
import Email from './assets/mail.svg';
import Home from './assets/home.svg';
import AlertsUser from '../ADMoleculas/AlertsUser';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Page = ({ handleSubmit, isSubmitting }) => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="row">
                <img className="col-md-8" src={ImageContact} alt="imagen contacto" />
                <div className="col-md-4">
                    <div className="">
                        <p className="h1 mt-5 mb-4">Busca el lugar perfecto para hospedarte o arrendar</p>
                        <p className="">Viajas de manera individual o grupal o buscas rentar.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-nowrap">
                                <img src={User} alt="" />
                                <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Name" placeholder="Nombre" />
                            </div>
                            <div className="d-flex flex-nowrap">
                                <img src={Email} alt="" />
                                <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Email" type="email" placeholder="Correo" />
                            </div>
                            <div className="d-flex flex-nowrap">
                                <img src={Smart} alt="" />
                                <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Telefono" placeholder="Teléfono" />
                            </div>
                            <div className="d-flex flex-nowrap">
                                <img src={Home} alt="" />
                                <Field className="col-md-12 border-top-0 border-right-0 border-left-0 p-2" name="Mensaje" placeholder="Mensaje" />
                            </div>

                            <div className="d-flex justify-content-end mt-5">
                                <ButtonGhost Message="Enviar" Evento={handleSubmit} Disabled={isSubmitting} ></ButtonGhost>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withFormik({
    mapPropsToValues(props) {
        return {
            Name: '',
            Email: '',
            Telefono: '',
            Mensaje: ''
        }
    },
    handleSubmit(values, formikBag) {
        const res = axios.post('/api/email', values).then(res => res.data);
        console.log(values)
        alert(`Recibimos tu Información ${values.Name}, en breve nos comunicamos contigo.`)
        formikBag.setSubmitting(false);
    }
})(Page);

