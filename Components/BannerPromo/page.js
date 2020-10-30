
const Page =({Promos})=> {

    const promosBanners = Promos.map((item) => {
        
        return(

        <div id="#promos" className="card col-md-4" key={item.Imagen.url}>
            <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Imagen.url}`} alt="imagen"></img>
            <div className="card-img-overlay text-white">
                <p className="card-title h1"> {item.Titulo}</p>
                <p className="card-text h4">{item.Resumen}</p>
            </div>
        </div>
        )
    });


    return(
        <>
            {promosBanners}
        </>
    );
}


export default Page;