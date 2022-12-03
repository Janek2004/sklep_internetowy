import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if(currentSlide < 3) setCurrentSlide(currentSlide + 1)
        else setCurrentSlide(0)
    }
    const prevSlide = () => {
        if(currentSlide > 0) setCurrentSlide(currentSlide - 1)
        else setCurrentSlide(3)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(currentSlide)
            if (currentSlide < 3) setCurrentSlide(currentSlide + 1)
            else setCurrentSlide(0)
        }, 8000);

        return () => {
            clearInterval(interval)
        }

    }, [currentSlide])

    return (
        <div className='app-carousel'>
            <div onClick={prevSlide} className='app-carousel-navigator'><span className='app-carousel-prev'></span></div>
            <div onClick={nextSlide} className='app-carousel-navigator' app-direction='right'><span className='app-carousel-next'></span></div>
            <div className='app-carousel-item bg-dark item-1' app-active={currentSlide === 0 ? 'true' : 'false'}></div>
            <div className='app-carousel-item bg-warning item-2' app-active={currentSlide === 1 ? 'true' : 'false'}></div>
            <div className='app-carousel-item bg-danger item-3' app-active={currentSlide === 2 ? 'true' : 'false'}></div>
            <div className='app-carousel-item bg-success item-4' app-active={currentSlide === 3 ? 'true' : 'false'}></div>
        </div>
    )
}

export default Carousel;