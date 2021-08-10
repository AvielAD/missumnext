import { useState } from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Button from 'react-bootstrap/Button'

const test = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

   
    return(
        <>
            <div className="container">

                    <Button onClick={()=>setShowLogin(true)}>Login</Button>
                    <Login show={showLogin} onHide={()=>setShowLogin(false)}/>

                    <Button onClick={()=>setShowRegister(true)}>Registrar</Button>
                    <Register show={showRegister} onHide={()=>setShowRegister(false)}/>
           </div>
        </>
    )
}

export default test;