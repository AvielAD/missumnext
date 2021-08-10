import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const Register = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
               
            </Modal>
        </>
    )
}


export default Register;