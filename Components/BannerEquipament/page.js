import React, {useState} from 'react';
import styles from './styles.module.css';

const Page = ({Equipamiento, Turismo}) => {
    const [TabE, setTabE] = useState();

    const elementsE = Equipamiento.map((item) => {

        return (
            <div className="card col-md-4 border-0" key={item.Imagen.url}>
                <img className="card-img" src={`${item.Imagen.url}`} />
                <div className="w-100" className="card-img-overlay text-white d-flex align-items-end">
                    <div className="row">
                        <p className="h2 col-md-12 mb-4">{item.Titulo}</p>
                        <span className="col-md-12">{item.Descripcion}</span>
                    </div>

                </div>
            </div>
        )
    })

    const ElementsT = Turismo.map((item) => {

        return (
            <div className="card col-md-4 border-0" key={item.Imagen.url}>
                <img className="card-img" src={`${item.Imagen.url}`} />
                <div className="w-100" className="card-img-overlay text-white d-flex align-items-end">
                    <div className="row">
                        <p className="h2 col-md-12 mb-4">{item.Titulo}</p>
                        <span className="col-md-12">{item.Descripcion}</span>
                    </div>

                </div>
            </div>
        )
    })
    


    return (
        <>
            <div >

            </div>

        </>
    );
}

export default Page;