import React from 'react';
import Slider from 'react-animated-slider';
import Carousel from 'react-bootstrap/Carousel'
import styles from './styles.module.css';
const Page = (props) => {
    const { slidesCarousel} = props;

    const slides = slidesCarousel.map((item, index) => {
        return (
            <Carousel.Item key={index}>
                <img  className={`${styles.heightContainer}`} src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Image.url}`} alt={item.Title} />
            </Carousel.Item>
        );
    });

    return (
        <>
            <Carousel > 
                {slides}
            </Carousel>
        </>
    );

}

export default Page;