import React from 'react';
import Head from 'next/head';
import { withFormik, Field } from 'formik';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';
import NavbarApp from '../Components/ADMoleculas/SearchBar';
import api from '../Services/api';
import Link from 'next/link';

const Resultados = ({ values, departamentos }) => {

    const [expandedFilter, setExpandedFilter] = React.useState(true);
    const Card = departamentos.map((item, index) => {
        const [expanded, setExpanded] = React.useState(false);

        return (
            <div className="card mb-3" key={index}>
                <div className="row">
                    <img className="col-md-5 card-img imageResults" src={`${process.env.NEXT_PUBLIC_API_HOST}${item[4].url}`} alt="imagen card" />
                    <div className="col-md-7">
                        <p className="h2 d-flex justify-content-between">
                            <Link href={`/descripcion/${item[1]}`}>{item[0]}</Link> 
                            <span className="h6">${item[3]}/noche</span></p>
                        <p className="">{item[2]}</p>
                        <p className="font-weight-bold">No. maximo de personas {item[5]}</p>
                        <a className="changePointer text-missum" onClick={() => {
                            setExpanded(!expanded);
                        }}>Ver Detalles</a>
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className="ml-3">
                            <div className="bg-missum-grey">
                                <p>Lista oculta</p>
                                <p>Lista oculta</p>
                                
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
                <p className="h2 mt-5 mb-5">Resultados de tu Busqueda</p>
                <div className="row mb-5 d-flex justify-content-center">
                   <NavbarApp />
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

export const getStaticProps = async (ctx) =>{
    const res = await api.departamento.departamentos();
    const titles = res.data.map((item, index)=>[item.Nombre, item.slug, item.Subtitulo, item.Costo, item.ImagenTarjeta, item.MaxPersonas])
    return { 
        props:{ departamentos: titles },
    }
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