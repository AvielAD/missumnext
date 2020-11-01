import React from 'react';
import Head from 'next/head';
import { withFormik, Field } from 'formik';
import CardImg from './assets/CardImg.jpg';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';

const CardList = [
    {
        Titulo: 'Titulo',
        Subtitulo: 'Subtitulo',
        Costo: '2500',
        Descripcion: 'Descripcion detallada para la tarjeta funcional',
        maxPersonas: '2',
        imageCard: CardImg,
    },
    {
        Titulo: 'Titulo 2',
        Subtitulo: 'Subtitulo',
        Costo: '2500',
        Descripcion: 'Descripcion detallada para la tarjeta funcional',
        maxPersonas: '2',
        imageCard: CardImg,
    },
]

const Resultados = ({ values }) => {
    const [expandedFilter, setExpandedFilter] = React.useState(true);

    const Card = CardList.map((item) => {
        const [expanded, setExpanded] = React.useState(false);

        return (
            <div className="card mb-3">
                <div className="row">
                    <img className="col-md-5 card-img changePointer" src={item.imageCard} alt="imagen card" />
                    <div className="col-md-7">
                        <p className="h2 d-flex justify-content-between">{item.Titulo} <span className="h6">${item.Costo}/noche</span></p>
                        <p className="">{item.Descripcion}</p>
                        <p className="font-weight-bold">No. maximo de personas {item.maxPersonas}</p>
                        <a className="changePointer text-missum" onClick={() => {
                            setExpanded(!expanded);
                        }}>Ver Detalles</a>
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className="">
                            <div className="bg-missum-grey ">
                                Lista oculta
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    });


    return (
        <>
            <Head>
                <title>Missum - Resultados</title>
            </Head>
            <div className="container">
                <p className="h2">Resultados de tu Busqueda</p>
                <div className="row bg-white border border-dark borderCircle1 mb-5 mt-3">
                    prueba espacio
                </div>

                <div className="">
                    <div className="row mb-5">
                        <Hidden smUp>
                            <div className="col-md-12 bg-missum-grey" >
                                <p onClick={() => {
                            setExpandedFilter(!expandedFilter);
                        }}>Filtros</p>
                                
                            </div>
                        </Hidden>

                        <Hidden xsDown>
                            <div className="col-md-3 bg-missum-grey" >
                                <p className="h4"> Tipo de Departamento</p>
                                <hr className="mb-3" />
                                <label className="w-100"><Field className="text-dark" name="loft" type="checkbox" /> Loft</label>
                                <label className="w-100"><Field name="petfriendly" type="checkbox" />  Petfriendly</label>
                                <label className="w-100"><Field name="handicap" type="checkbox" />  Handicap</label>
                                <label className="w-100 mb-5"><Field name="roomstwo" type="checkbox" />  Roomstwo</label>
                                <p className="h4"> Adicionales</p>
                                <hr className="mb-3" />
                                <label className="w-100"><Field name="balcon" type="checkbox" />  Balcon</label>
                                <label className="w-100 mb-5"><Field name="terraza" type="checkbox" />  Terraza</label>
                            </div>
                        </Hidden>


                        <div className="col-md-9">
                            {Card}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        loft: false,
        petfriendly: false,
        handicap: false,
        roomstwo: false,
        balcon: false,
        terraza: false
    }),
    handleSubmit(value) {
    }
})(Resultados);