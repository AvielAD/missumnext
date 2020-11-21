import './styles.module.css';
import Carousel from 'react-elastic-carousel';
import styles from './styles.module.css';

const Page = (props) => {

    const { slidesConcept } = props;

    const Banner = slidesConcept.map((item)=>{
        return(
        <div className="col-md-4" key={item.Image.url}>
            <img className="" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt="Tower" className="" />
            <p className="mt-4 font-weight-bold h5">{item.Title}</p>
            <p>{item.Description}</p>
        </div>
        )
    })
    return (
        <>

        <div className="d-block d-sm-none">
        <div className="d-flex justify-content-center text-center">

            <Carousel className="" itemsToShow={1} showArrows={false} >
                    {Banner}
            </Carousel>
            </div>

        </div>

        <div className="d-none d-sm-block  text-center">
            <div className="d-flex justify-content-center text-center">
                {Banner}
             </div>
        </div>

        </>
    )
}

export default Page;