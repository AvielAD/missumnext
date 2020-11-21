import Carousel from 'react-elastic-carousel';

const Page = ({ Promos }) => {

    const Promociones = Promos.map((item, index) => {

        return (
            <div className="card p-1 border-0 heightPromociones" key={index}>
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

        <div className="d-none d-sm-block">
            <div className="d-flex justify-content-center">
                <Carousel itemsToShow={2} showArrows={false} pagination={false}>
                    {Promociones}
                </Carousel>
            </div>
        </div>
        
        <div className="d-block d-sm-none ">
            <Carousel itemsToShow={1} showArrows={false} pagination={true}>
                {Promociones}
            </Carousel>
        </div>


        </>
    );





}


export default Page;