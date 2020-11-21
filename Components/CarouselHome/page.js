import React, { useState, useRef } from 'react';

import Carousel from 'react-elastic-carousel';

import styles from './styles.module.css';

const Page = (props) => {
    const {slidesCarousel, className} = props;
    let resetTimeout;
    const carouselRef = useRef(null); 

    const slides = slidesCarousel.map((item, index) => {

        return (
            <div className="fadeIn" key={index}>
                <img className="h-100 w-100 FadeOut " src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt={item.Title}/>
            </div>
        );
      });

    return (
        <>
            <Carousel className="border-0" ref={carouselRef}
            enableAutoPlay autoPlaySpeed={3500} itemsToShow={1} showArrows={false} 
            pagination={false} onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === slidesCarousel.length) {
                   resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0)
                  }, 3500) // same time
                }
           }}>
                {slides}
            </Carousel>

            
        </>
    );

}

export default Page;