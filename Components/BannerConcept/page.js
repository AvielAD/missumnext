import './styles.module.css';

const Page = (props) => {

    const { slidesConcept } = props;

    const Banner = slidesConcept.map((item)=>{
        return(
        <div className="col-sm align-middle " key={item.Image.url}>
            <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt="Tower" className="mb-5" />
            <p className="font-weight-bold h5">{item.Title}</p>
            <p>{item.Description}</p>
        </div>
        )
    })


    return (
        <>
            <div className="row d-flex justify-content-center text-center">
                {Banner}
            </div>
        </>
    )
}

export default Page;