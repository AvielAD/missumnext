import axios from 'axios';

const requestHelper = axios.create({
    baseURL: process.env.API_HOST,
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
    }
}