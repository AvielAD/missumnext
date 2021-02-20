import { useState } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Components/NavBarApp';
import BannerCovid from '../Components/BannerCovid';
import FooterApp from '../Components/FooterApp';
import Head from 'next/head'

import Reserva from './assets/otas/Reserva.png';
import Missum from './assets/Missum.svg';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/modal.module.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { withFormik, Field, Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/router';


import Email from './assets/mail.svg';
import Home from './assets/home.svg';
import axios from 'axios';

import airbnb from '../pages/assets/otas/airbnb-512.png';
import booking from '../pages/assets/otas/booking3.png';
import phone from '../pages/assets/otas/phone.svg';
import whats from '../pages/assets/otas/whats.svg';

function MyApp({ Component, pageProps }) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goWhatsapp =() => {
    window.location.replace('https://www.google.com');
  }

  const goPhone =() => {
    window.location.href = 'tel:2229636166';
  }
  const goAirbnb =() => {
    window.location.replace('https://www.google.com');
  }
  const goBooking =() => {
    window.location.replace('https://www.google.com');
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/isotipo.ico" />
      </Head>

      <header>
        <Header />
      </header>
      <section className="container-fluid bg-missum text-center p-2 ">
        <BannerCovid />
      </section>

      <Component {...pageProps} />

      <div className={`bg-missum text-white ${styles.buttonReserva} changePointer p-3`} onClick={handleOpen}>
        <div className="d-flex flew-wrap">
          <CalendarTodayIcon style={{ fontSize: 25 }} />
          <p className="ml-2">Reserva</p>
        </div>
      </div>

      <Modal
        className="d-flex justify-content-end"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              <div className="d-none d-sm-block col-sm-6 w-100 h-100 p-0 m-0">

                <img className="w-100 h-100 position-absolute" src={Reserva} alt="image" />

                <div className={`${styles.imageContainer}`}>
                  <div className={`${styles.imageContent}`}>
                    <img src={Missum} alt="image" />

                    <div className={`${styles.imageTextOver}`}>
                      <div className={`${styles.imageTextOver2}`}>
                        <div className="">
                          <p className="h1">15% OFF</p>
                          <p className="h2">Cupón MISSUM15</p>
                          <p className="">reserva directamente con nosotros por telefóno o whatsapp y recibe un 15% de descuento en tu tercer noche.</p>

                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
              <div className="col-sm-6 bg-white p-0 m-0">

                <div className="p-4">
                  <p className="h1 ">¡Reserva ahora!</p>
                  <p className=""> Contactanos para realizar una reserva y obtén grandes descuentos y promociones directamente en Missum.</p>
                  <Form>
                    <div className={`${styles.formName} col-md-12 form-control border-top-0 border-right-0 border-left-0 p-2 mb-3 `}>
                      <Field name="Name" type="text" placeholder="Nombre" className={`ml-2 border-0 w-100`}/>
                    </div>
                    <div className={`${styles.formEmail} col-md-12 form-control border-top-0 border-right-0 border-left-0 p-2 mb-3 `}>
                      <Field name="Email" type="email" placeholder="Correo" className={`ml-2 border-0 w-100`}/>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                      <button type="submit" className={`bg-missum ${styles.forButton} `}>Enviar</button>
                    </div>
                  </Form>
                </div>

                <div className="">
                  <div className="row p-4">
                    
                    <p className="col-12 col-sm-7">Escribenos directamente</p>

                    <div className="col-12 col-sm-5 d-flex justify-content-around">

                      <img onClick={goWhatsapp} className="rounded-circle changePointer"  width="50px" height="50px" src={whats} alt=""/>
                    
                      <img onClick={goPhone} className="rounded-circle changePointer" width="50px" height="50px" src={phone} alt=""/>
                    
                    </div>

                  </div>
                </div>

                <div className="bg-missum-grey h-100">
                  <div className="text-center p-4 ">
                    <p className="d-none d-sm-block">Encuentranos en: </p>

                  <div className=" d-flex justify-content-around p-2 ">
                    
                    <img onClick={goAirbnb} className="rounded-circle changePointer" width="50px" height="50px" src={airbnb} alt=""/>
                    <img onClick={goBooking} className="rounded-circle changePointer" width="50px" height="50px" src={booking} alt=""/>
                  </div>
                  
                  </div>
                </div>

              </div>


            



            </div>

          </div>

        </Slide>

      </Modal>

      <section className="bg-missum container-fluid">
        <FooterApp />
      </section>
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
    alert(`Recibimos tu Información ${values.Name}, en breve nos comunicamos contigo.`)
    formikBag.setSubmitting(false);
  }

})(MyApp);
