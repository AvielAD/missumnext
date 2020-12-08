import React, {useState} from 'react';
import Head from 'next/head';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';
import NavbarApp from '../Components/ADMoleculas/SearchBar';
import api from '../Services/api';
import Link from 'next/link';
import Login from '../Components/Login';

const Resultados = ({departamentos }) => {
    const [check, setCheck] = useState([]);
    const [show, setShow] = useState(true);

    function handleChange(e){
        if(e.target.checked)
            setCheck([
                ...check,
                e.target.name
            ])
        else
            setCheck([
                check.length>1 ? check.splice(check.indexOf(e.target.name)) : []
            ])
    }
    const preCards = departamentos.map((item)=> check.includes(item[6]) ? item : [])

    

    return (
        <>
            <Head>
                <title>Missum - Resultados</title>
            </Head>
            <div className="container">
                <p className="h2 mt-5 mb-5">Resultados de tu Busqueda</p>
                <div className="row mb-5 d-flex justify-content-center">
                    <NavbarApp />
                    <script type="text/javascript" src="https://resx.octorate.com/octobook/resources/widget/js/form.js" data-sitekey="0f52517309bb16019154794e6608bf73"></script>
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
                                <div>
                                    <input type="checkbox" name="loft" onChange={handleChange}/>
                                    <label>Loft</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="handicap-friendly" onChange={handleChange}/>
                                    <label>Handicap Friendly</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="handicap-pet-friendly" onChange={handleChange}/>
                                    <label>Handicap Pet Friendly</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="departamento-doble" onChange={handleChange}/>
                                    <label>Doble Habitacion</label>
                                </div>
                                <p className="h4"> Adicionales</p>
                                <hr className="mb-3" />

                            </div>
                        </Hidden>


                        <div className="col-md-9">
                            
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export const getStaticProps = async (ctx) =>{
    const res = await api.departamento.departamentos();
    const titles = res.data.map((item, index)=>[item.Nombre, item.slug, item.Subtitulo, item.Costo, item.ImagenTarjeta, item.MaxPersonas, item.categoria_departamento.slug])
    return { 
        props:{ departamentos: titles },
    }
}

export default Resultados;