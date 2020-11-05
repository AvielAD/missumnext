import React, { useState } from 'react';
import styles from './styles.module.css';




const Page = ({ items }) => {
    const [Tab, setTab] = useState(0)

    const Banner = items.map((item, index) => {
        return (
            <div className={`${Tab==index? '': 'd-none'} ml-4`} key={index}>
                <p className="h1">{item.Title}</p>
                <p className="font-weight-bold">{item.Subtitule}</p>
                <p>{item.Description}</p>
            </div>
        )
    })

    return (
        <>
            <div className="container d-flex flex-nowrap">
                <div className="col-md-4 bg-missum-grey">
                    <ul className={`${styles.listaDecoration}`}>
                        <li><a className="changePointer" onClick={() => setTab(0)}>Instalaciones</a></li>
                        <li><a className="changePointer" onClick={() => setTab(1)}>Exteriores</a></li>
                        <li><a className="changePointer" onClick={() => setTab(2)}>Salas de eventos y reuniones</a></li>
                        <li><a className="changePointer" onClick={() => setTab(3)}>Departamento Handicap</a></li>
                        <li><a className="changePointer" onClick={() => setTab(4)}>Departamento Dos Habitaciones</a></li>
                        <li><a className="changePointer" onClick={() => setTab(5)}>Departamento Tipo Loft</a></li>
                    </ul>
                </div>

                <div className="col-md-8">
                    {Banner}
                </div>

            </div>
        </>
    )
}

export default Page;