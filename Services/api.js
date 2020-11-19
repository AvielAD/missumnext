import axios from 'axios';

const requestHelper = axios.create({
    baseURL: process.env.API_HOST,
});

const requestEmail = axios.create({
    baseURL: process.env.SENDGRID_API,
});

export default {
    home:{
        carousel: () => requestHelper({
            url: '/carousel-homes',
            method: 'get',
        }),
        concept: () => requestHelper({
            url: '/carousel-concepts',
            method: 'get',
        }),
        promos: () => requestHelper({
            url: '/promociones',
            method: 'get',
        }),
        equipament: () => requestHelper({
            url: '/equipamiento-urbanos'
        })
    },
    departamento:{
        departamentos: ()=> requestHelper({
            url: '/departamentos',
            method: 'get'
        }),
        departamento: (slug)=> requestHelper({
            url: `/departamentos?slug=${slug}`,
            method: 'get'
        })

    },
    Email:{
        send: (data) => requestEmail({
            url: '/send',
            method:'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
            data,
        })
    },
    Videos: {
        getVideo: (id) => requestHelper({
            url: `/videos/${id}`,
            method: 'get',
        })
    }
    
}