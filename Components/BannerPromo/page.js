
const Page = ({ Promos }) => {

    return (
        <>
            <div className="">
            
                <div className="card col-md-12 border-0" key={Promos[0].Imagen.url}>
                    <img src={`${process.env.NEXT_PUBLIC_API_HOST}${Promos[0].Imagen.url}`} alt="imagen"></img>
                    <div className="card-img-overlay text-white">
                        <p className="card-title h1"> {Promos[0].Titulo}</p>
                        <p className="card-text ">{Promos[0].Resumen}</p>
                    </div>
                </div>


            </div>
        </>
    );
}


export default Page;