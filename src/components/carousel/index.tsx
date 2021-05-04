import React from 'react'
// import { CarouselStyle } from './style';
import Carousel from 'styled-components-carousel';

const Example = () => (
    <Carousel
        center
        infinite
        showArrows
        showIndicator
        slidesToShow={3}
    >
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>1</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>2</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>3</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>3</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>3</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>3</span>
        </div>
        <div style={{width: '100px', height: '100px', background: '#fff'}}>
            <span>3</span>
        </div>
    </Carousel>
);

export default Example