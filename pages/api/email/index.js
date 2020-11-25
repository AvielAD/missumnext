import nodemailer from 'nodemailer';
 
export default async function emailHandler(req, res){
    if(req.method =='POST'){
        
        const {Name, Email, Telefono, Mensaje} = req.body;
        console.log(req.body)

        let transporter = nodemailer.createTransport({
            name: 'missum.mx',
            host: 'smtp.office365.com',
            port: 587,
            secure:false,
            auth: {
                user: "invitado.missum@outlook.com",
                pass: "Missum20201!"
            },
            tls:{
                rejectUnauthorized:false,
            },

        });

        transporter.verify((err, sucess)=>{
            if(err) console.log(err)
            else console.log('verificated: ',sucess)
        })

        let info = await transporter.sendMail({
            from: 'invitado.missum@outlook.com',
            to: 'operaciones@missum.mx, gerencia@missum.mx',
            subject: Name,
            text: `Numero Contacto: ${Telefono}`,
            html: `<div> Invitado: ${Name} <ul><li>${Email}</li> <li>${Telefono}</li></ul> <p>${Mensaje}</p></div>`
        });
        console.log(info)

        res.status(200).json({response: 'recibido'});
    }
    else
        res.status(200).json({response: 'no'});

}
