import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Styles from './Styles.module.css';
import Slide01 from './assets/corner.png';
import Slide02 from './assets/slide01.jpg';
import Slide03 from './assets/slide04.jpg';

const items = [
    {
        src: Slide01,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: Slide02,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: Slide03,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];




const CarouselHome = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            className={Styles.carouselHeight}
          >
            <img src={item.src} alt={item.altText} width="100%" height="100%"/>
          </CarouselItem>
        );
      });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
            </Carousel>
        </>
    );

}

export default CarouselHome;