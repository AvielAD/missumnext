import React, {useState} from 'react';
import styles from './styles.module.css';
import Carousel from 'react-elastic-carousel';

const Page = ({Equipamiento, Turismo}) => {
    const [TabE, setTabE] = useState(true);
    const [TabT, setTabT] = useState(false);

    const elementsE = Equipamiento.map((item, index) => {

        return (
            <div className="card col-md-12 border-0" key={index}>
                <img loading="lazy"className="card-img heightEquipament" src={`${item.Imagen.url}`} />
                <div className="w-100" className="card-img-overlay text-white ">
                    <div className="row">
                        <p className="h2 col-md-12 mb-4">{item.Titulo}</p>
                        <span className="col-md-12">{item.Descripcion}</span>
                    </div>

                </div>
            </div>
        )
    })

    const ElementsT = Turismo.map((item, index) => {

        return (
            <div className="card col-md-12 border-0" key={index}>
                <img loading="lazy" className="card-img heightEquipament" src={`${item.Imagen.url}`} />
                <div className="w-100" className="card-img-overlay text-white ">
                    <div className="row">
                        <p className="h2 col-md-12 mb-4">{item.Titulo}</p>
                        <span className="col-md-12">{item.Descripcion}</span>
                    </div>

                </div>
            </div>
        )
    })

    function handleEquipament(){
        if(TabT){
            setTabE(!TabE)
            setTabT(!TabT)
        }
    }
    function handleTurismo(){
        if(TabE){
            setTabT(!TabT)
            setTabE(!TabE)
        }
    }

    return (
        <>
            <div className="mt-5 mb-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <p className="p-2 h2"><a className={`${TabE? 'text-missum':'text-dark'} changeListPointer`} onClick={handleEquipament}>Equipamiento Urbano</a></p>
                    <p className="p-2 h2"><a className={`${TabE? 'text-dark':'text-missum'} changeListPointer`} onClick={handleTurismo}>Turismo</a></p>
                </div>
                <hr className="bg-dark"/>
                
                <div className={`d-none ${TabE? 'd-block':''}`}>

                    <div className="d-block d-sm-none">
                        <Carousel itemsToShow={1} showArrows={false}>
                            {elementsE}
                        </Carousel>
                    </div>

                    <div className="d-none d-sm-block d-md-block">
                        <Carousel itemsToShow={3} showArrows={false}>
                            {elementsE}
                        </Carousel>
                    </div>
                
                </div>

                <div className={`d-none ${TabT? 'd-block':''} `}>
                <div className="d-block d-sm-none">
                        <Carousel itemsToShow={1} showArrows={false}>
                            {ElementsT}
                        </Carousel>
                    </div>

                    <div className="d-none d-sm-block d-md-block">
                        <Carousel itemsToShow={3} showArrows={false}>
                            {ElementsT}
                        </Carousel>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Page;