import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Indicator from './Indicator';

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
          url: 'http://placeimg.com/220/140/people'
        }
      ]
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: ((this.state.images.length - 1) * -(this.slideDimensions('width')))
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue - -(this.slideDimensions('width'))
    }));
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
      translateValue: prevState.translateValue - (this.slideDimensions('width'))
    }));
  }

  goToSelectedSlide = (index) => {
    this.setState(prevState => ({
      currentIndex: index
    }));
  }

  slideDimensions(value) {
    const slideObj = document.querySelector('.slide').getBoundingClientRect();
    return slideObj.width;
  }

  render() {
    const { currentIndex, translateValue, images } = this.state;
    const { indicators, arrows } = this.props;
    const isCurrentSlide = (index) => (currentIndex === index);

    return (
      <div className="slider">
        {images.length &&
          <div className="slider__wrapper" style={{transform: `translateX(${translateValue}px)`}}>
            {images.map((image, i) =>
              <Slide key={i} currentSlide={isCurrentSlide(i)} url={image.url} alt={image.title} />)}
          </div>
        }

        {arrows &&
          <Fragment>
            <ArrowLeft onClick={() => { this.goToPrevSlide(); }} />
            <ArrowRight onClick={() => { this.goToNextSlide(); }} />
          </Fragment>
        }

        {indicators &&
          <div className="indicators">
            {images.map((image, i) =>
              <Indicator
                key={i}
                currentSlide={isCurrentSlide(i)}
                onClick={() => { this.goToSelectedSlide(i); }} 
              />
            )}
          </div>
        }
      </div>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  indicators: PropTypes.bool,
  arrows: PropTypes.bool
};

Slider.defaultProps = {
  indicators: true,
  arrows: true
};

export default Slider;
