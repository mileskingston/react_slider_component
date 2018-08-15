import React, { Component } from 'react';
import Slide from './Slide';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0,
      images: [
        {
          title: 'animal',
          url: 'http://placeimg.com/220/140/tech'
        },
        {
          title: 'nature',
          url: 'http://placeimg.com/220/140/nature'
        },
        {
          title: 'tech',
          url: 'http://placeimg.com/220/140/tech'
        }
      ]
    };
  }

  goToPrevSlide = () => {
    console.log('prev');
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideDimensions('width'))
    }));
  }

  slideDimensions(value) {
    const slideObj = document.querySelector('.slide').getBoundingClientRect();
    return slideObj.width;
  }

  render() {
    const { state } = this;

    return (
      <div className="slider">
        <div className="slider__wrapper" style={{transform: `translateX(${state.translateValue}px)`}}>
          {state.images.map((image, i) =>
            <Slide key={i} url={image.url} alt={image.title} />)}
        </div>

        <ArrowLeft goToPrevSlide={() => { this.goToPrevSlide(); }} />
        <ArrowRight goToNextSlide={() => { this.goToNextSlide(); }} />
      </div>
    );
  }
}

export default Slider;
