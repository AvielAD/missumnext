import Page from './page';

const CarouselHome =(props)=>{
    const {slidesCarousel} = props;
    
    return(
        <>
            <Page slidesCarousel={slidesCarousel}/>
        </>
    )
}

export default CarouselHome;