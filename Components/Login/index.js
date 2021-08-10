import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from './assets/DSC063471.jpg';
import User from './assets/user.svg';
import Key from './assets/key.svg';
import ButtonMissum from '../ADMoleculas/ButtonAD';
import axios from 'axios';
import { withFormik, Field, ErrorMessage, Form } from 'formik';

const Page = (props) => {
    const router = useRouter()

    async function handleSubmit(e){
        e.preventDefault();

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const response = await axios.post('/api/auth/login', user).catch((e)=> console.log(e.message))

        console.log(response)

        if(response){

            if(response.status==200){
                
                router.push('/user/profile')

            }
        }
        else{
            alert('claves incorrectas')
        }
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="row">
                        <div className="d-none d-sm-block col-md-6">
                            <img className="img-fluid" src={Image} alt="imagen" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center d-flex\">

                            <div className="flex-wrap">
                                <h3 className="mb-4" >Inicia Sesion</h3>
                                <p className="mb-4">
                                    Por favor ingresa tus datos
                            </p>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <img src={User} alt="icon" />
                                        <input type="email" name="email" placeholder="Email" className="border-top-0 border-right-0 border-left-0"/>
                                    </div>
                                    <div>
                                        <img src={Key} alt="icon" />
                                        <input type="password" name="password" placeholder="Password" className="border-top-0 border-right-0 border-left-0"/>
                                    </div>
                                    <div className="mt-5">
                                        <ButtonMissum Message="Inicia Sesion" />
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <p>Aun no tienes una cuenta Missum?</p>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Page;