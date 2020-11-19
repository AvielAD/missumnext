import './styles.module.css';
import Carousel from 'react-elastic-carousel';
import styles from './styles.module.css';

const Page = (props) => {

    const { slidesConcept } = props;

    const Banner = slidesConcept.map((item)=>{
        return(
        <div className="" key={item.Image.url}>
            <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt="Tower" className="" />
            <p className="font-weight-bold h5">{item.Title}</p>
            <p>{item.Description}</p>
        </div>
        )
    })

    /**
     * 
     *    
     */

    return (
        <>

        <div className="d-none d-sm-block">
            <div className="d-flex justify-content-center text-center">
                {Banner}
            </div>
        </div>

        <div className="d-block d-sm-none text-center">
            <Carousel itemsToShow={1} showArrows={false}>
                {Banner}
            </Carousel>
        </div>

        </>
    )
}

export default Page;