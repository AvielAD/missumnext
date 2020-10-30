import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';
import Styles from './Styles.module.css';
import SearchBar from '../ADMoleculas/SearchBar';

const Page = (props) => {
    const {slidesCarousel} = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slidesCarousel.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slidesCarousel.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = slidesCarousel.map((item) => {

        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}
            className=""
          >
            <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt={item.Title}/>

            <div className="container card-img-overlay">
                    <SearchBar />
            </div>


          </CarouselItem>
        );
      });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="carousel-fade"
            >
                {slides}

                
            </Carousel>
        </>
    );

}

export default Page;