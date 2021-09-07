import Head from 'next/head';
import { Helmet } from 'react-helmet';
const item = 
    {
        Titulo: 'Departamento tipo loft',
        Subtitulo: 'Descripcion de departamento',
        MaxPersons: '2',
        Description: 'Nuestros departamentos dobles son ideales para su estancia, son 70m2 que cuentan con dos habitaciones con cama queen size, closets amplios, un baño completo, cocina equipada, sala-comedor y cuarto de lavado. Relájese en nuestro departamento tipo loft es ideal para una persona o parejas, cuenta con una habitación amplia con cama queen size, closet grande, un escritorio para trabajar, baño completo y cocina equipada. Todos nuestros departamentos lo harán sentirse en casa', 
        Amenidades: ['piscina','estacionamiento','telefono']
    }

const Departamento =() =>{

    return(
        <>  
            <Head>
                <title>Missum - Departamento</title>
                <script src='./trackingSojern.js' type="text/javascript"/>

            </Head>
            <div className="container-fluid d-flex justify-content-between">
                <div className="">
                    <p>Regresar</p>
                </div>
                <div className="d-inline-flex">
                    <p className="mr-5">Compartir</p>
                    <p>favorito</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="bg-dark">
                    <p className="text-white h-50">gallery</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="">
                    <p className="h1">{item.Title}</p>
                </div>

            </div>

           
        </>
    )
}

export default Departamento;