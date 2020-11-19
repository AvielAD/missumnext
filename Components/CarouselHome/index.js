import Page from './page';
import styles from './styles.module.css';

const CarouselHome =(props)=>{
    const {slidesCarousel, className} = props;
    
    return(
        <>
         <div className="heightContainer">
            
            <Page slidesCarousel={slidesCarousel} className="card-img"/>

            <div className="card-image-overlay">
                {props.children}
            </div>
        </div>
        </>
    )
}

export default CarouselHome;