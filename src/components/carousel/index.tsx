import React from 'react'
import Carousel from 'styled-components-carousel'
import { CarouselStyle } from './style';

export const RandomPokemon = () => (
    <Carousel
        slidesToShow={3}
        center
        centerPadding={30}
        breakpoints={[
            {
                size: 200,
                settings: {
                    slidesToShow: 1,
                    showArrows: false,
                    showIndicator: false,
                    swipeable: true,
                },
            },
            {
                size: 600,
                settings: {
                    slidesToShow: 3,
                    showArrows: false,
                    showIndicator: true,
                    swipeable: true,
                },
            },
            {
                size: 1000,
                settings: {
                    slidesToShow: 4,
                    showArrows: true,
                    showIndicator: true,
                    center: true,
                    swipeable: true,
                },
            },
        ]}
    >
        <CarouselStyle>
            <div className="card">
                <div>
                    <span>Um</span>
                </div>
                <div>
                    <span>Dois</span>
                </div>
                <div>
                    <span>tres</span>
                </div>
            </div>
        </CarouselStyle>
    </Carousel>
);