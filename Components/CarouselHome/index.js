import Page from './page';

const CarouselHome =(props)=>{
    const {slidesCarousel, className} = props;
    
    return(
        <>
            <Page slidesCarousel={slidesCarousel} className={className}/>
        </>
    )
}

export default CarouselHome;