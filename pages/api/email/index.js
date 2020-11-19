import api from '../../../Services/api';

const email = "aviel.aldama@gmail.com";

const dataEmail = {
    personalizations: [
        {
            to: [
                {
                    email
                },
            ],
        }
    ],
    from: {
        email: 'cliente@missum.mx',
        name: 'Test Send Grid',
    },
    subject: "sending with sendgrid",
    content: [{
        type: 'text/html',
        value: `Congratulations <b>aviel</b> you send a email`
    }]
}


export default async function emailHandler(req, res){

    const response = await api.Email.send(dataEmail);
    res.status(200).json({email: 'email enviado'});

}
