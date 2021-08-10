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
    },
    Catalogo:{
        Amenidades: ()=>requestHelper({
            url: '/catalogo-amenidades',
            method: 'get'
        }),
        Eventos: ()=>requestHelper({
            url: '/catalogo-eventos',
            method: 'get'
        }),
        HandicapF: ()=>requestHelper({
            url: '/catalogo-handicaps',
            method: 'get'
        }),
        HandicapP: ()=>requestHelper({
            url: '/catalogo-handicaps',
            method: 'get'
        }),
        DepartDoble: ()=>requestHelper({
            url: '/catalogo-habitaciones',
            method: 'get'
        }),
        Loft: ()=>requestHelper({
            url: '/catalogo-lofts',
            method: 'get'
        }),
    },
    Auth:{
        
        Login: (data) => requestHelper({
            url: '/auth/local',
            method: 'post',
            data
        }).catch((e)=>e.response),
        Validate: (header) => requestHelper({
            url: '/users/me',
            method: 'get',
            headers: {
                Authorization: `Bearer ${header}` 
            }
        }).catch((e)=>e.response),
    },
   
    
}