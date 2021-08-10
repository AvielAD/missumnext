import api from '../../../Services/api';
import Cookies from 'cookies';

export default async (req, res) => {
    if (req.method == 'POST') {
        const { email, password } = req.body;
        const user = {
            identifier: email,
            password: password
        }
        const response = await api.Auth.Login(user)

        if(response.status == 200){
            const cookies = new Cookies(req, res)
            cookies.set('authToken', response.data.jwt, {
                httpOnly: true,
                sameSite: 'lax'
            })
    
            res.status(200).json('ok');
        }
        else{
            res.status(400).json({ response: 'Informacion Incorrecta' });
        }

    }
    else
        res.status(400).json({ response: 'Metodo no permitido' });
}
