
const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
}

const Page = ({ Equipament }) => {
    const elements = Equipament.map((item) => {

        return (
            <div className="card col-md-4" key={item.Imagen.url}>
                <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Imagen.url}`} />
                <div className="card-img-overlay">
                    <p className="card-title">{item.Titulo}</p>
                    <p className="card-text">{item.Descripcion}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            {elements}
        </>
    );
}

export default Page;