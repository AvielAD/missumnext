import styles from './styles.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {useState} from 'react';

const Page = ({Show}) => {
    const [show, setShow] = useState(false);
    
    setShow(Show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hola, recibimos tu información</Modal.Title>
                </Modal.Header>
                <Modal.Body>En breve nos comunicamos contigo</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Page;