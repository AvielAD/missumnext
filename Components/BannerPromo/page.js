import Carousel from 'react-elastic-carousel';

const Page = ({ Promos }) => {

    const Promociones = Promos.map((item, index) => {

        return (
            <div className="card p-1 border-0 heightPromociones " key={index}>
                <img className="h-100 w-100" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Imagen.url}`} alt="imagen"></img>
                <div className="card-img-overlay text-white">
                    <p className="card-title h1"> {item.Titulo}</p>
                    <p className="card-text ">{item.Resumen}</p>
                </div>
            </div>
        )
    })

    /**Caso 1 promocion*/
    return (
        <>

            <div className="d-none d-md-block ">
                <div className="d-flex justify-content-center">
                    
                    <div className="card mr-2 border-0 col-md-6 " >
                        <img className="h-100 img-fluid card-img" src={`${process.env.NEXT_PUBLIC_API_HOST}${Promos[0].Imagen.url}`} alt="imagen"></img>
                        <div className="card-img-overlay text-white">
                            <p className="card-title h1"> {Promos[0].Titulo}</p>
                            <p className="card-text ">{Promos[0].Resumen}</p>
                        </div>
                    </div>

                    <div className="row d-flex flex-wrap">
                        <div className="card p-1 border-0  col-md-12" >
                            <img className="img-fluid card-img" src={`${process.env.NEXT_PUBLIC_API_HOST}${Promos[2].Imagen.url}`} alt="imagen"></img>
                            <div className="card-img-overlay text-white">
                                <p className="card-title h1"> {Promos[2].Titulo}</p>
                                <p className="card-text ">{Promos[2].Resumen}</p>
                            </div>
                        </div>

                        <div className="card p-1 border-0  col-md-12" >
                            <img className="img-fluid card-img" src={`${process.env.NEXT_PUBLIC_API_HOST}${Promos[1].Imagen.url}`} alt="imagen"></img>
                            <div className="card-img-overlay text-white">
                                <p className="card-title h1"> {Promos[1].Titulo}</p>
                                <p className="card-text ">{Promos[1].Resumen}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="d-block d-md-none ">
                <Carousel itemsToShow={1} showArrows={false} pagination={true}>
                    {Promociones}
                </Carousel>
            </div>


        </>
    );





}


export default Page;