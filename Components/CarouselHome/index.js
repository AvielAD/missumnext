import Page from './page';
import styles from './styles.module.css';

const CarouselHome =(props)=>{
    const {slidesCarousel, className} = props;
    
    return(
        <>
            <Page slidesCarousel={slidesCarousel}/>
        </>
    )
}

export default CarouselHome;