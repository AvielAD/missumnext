import Cookie from 'cookies';
import axios from 'axios';
import api from '../../../Services/api';

const Validate = async (req, res) => {
    if (req.method == 'GET') {
        const cookie = new Cookie(req, res)
        const authToken = cookie.get('authToken')
        const response = await api.Auth.Validate(authToken)
        console.log(response.status)
        
        if(response.status == 200){
            const user = {
                user: response.data.username,
                email: response.data.email
            }
            res.status(200).json({response: user})
            res.end()
        }
        else
            res.status(400).json({ response: 'claves incorrectas' })
            res.end()
    }
    else
        res.status(400).json({ response: 'Metodo no permitido' });
        res.end()
}

export default Validate;