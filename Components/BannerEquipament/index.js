import Page from './page';
import ImagenTest from './assets/Hmac.png';
import ImagenTestCholula from './assets/cholula.png';
import Univer from './assets/Univer.png';

const BannerEquipament = () =>{


        return(
        <>
            <Page Equipamiento={Equipamiento} Turismo={Turismo}/>
        </>
    )

}

export default BannerEquipament;


const Equipamiento = [
    {
        Imagen: {
            url: ImagenTest
        },
        Titulo: 'Zona Turistica de Cholula',
        Descripcion: 'Distancia 4.1km'
    },
    {
        Imagen: {
            url: ImagenTestCholula
        },
        Titulo: 'Hospital Mac',
        Descripcion: 'Distancia 6.3km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Explanada',
        Descripcion: 'Distancia 2.8km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Universidad de las Americas',
        Descripcion: 'Distancia 3km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Angelopolis',
        Descripcion: 'Distancia 5.3km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Explanada',
        Descripcion: 'Distancia 2.8km'
    },
]


const Turismo = [
    {
        Imagen: {
            url: ImagenTest
        },
        Titulo: 'Piramide de Cholula',
        Descripcion: 'Distancia 5.4km'
    },
    {
        Imagen: {
            url: ImagenTestCholula
        },
        Titulo: 'Estrella de Puebla',
        Descripcion: 'Distancia 6.1km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Centro Comercial Angelopolis',
        Descripcion: 'Distancia 5.3km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Museo Barroco',
        Descripcion: 'Distancia 8km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Tren Turistico',
        Descripcion: 'Distancia 5.8km'
    },
]
