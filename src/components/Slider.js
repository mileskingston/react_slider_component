import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Arrow from './Arrow';
import PagerDot from './PageDot';

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

  componentDidMount() {
    window.addEventListener('resize', this.updatedSlideDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatedSlideDimensions);
  }

  goToPrevSlide = () => {
    const currentSlideEqualFirst = this.state.currentIndex === 0;

    this.setState(prevState => ({
      currentIndex: currentSlideEqualFirst
        ? this.state.images.length - 1 : prevState.currentIndex - 1,
      translateValue: currentSlideEqualFirst
        ? (this.state.images.length - 1) * -this.slideDimensions()
        : prevState.translateValue - -this.slideDimensions()
    }));
  }

  goToNextSlide = () => {
    const currentSlideEqualLast = this.state.currentIndex === this.state.images.length - 1;

    this.setState(prevState => ({
      currentIndex: currentSlideEqualLast ? 0 : prevState.currentIndex + 1,
      translateValue: currentSlideEqualLast ? 0 : prevState.translateValue - this.slideDimensions()
    }));
  }

  goToSelectedSlide = (index) => {
    const slideTranslate = index === 0 ? 0 : index * -this.slideDimensions();

    this.setState({
      currentIndex: index,
      translateValue: slideTranslate
    });
  }

  slideDimensions = () => {
    const slideObj =
      document.querySelector('.slider__wrapper .slider__slide').getBoundingClientRect();

    return slideObj.width;
  }

  updatedSlideDimensions = () => {
    this.setState({
      translateValue: -this.state.currentIndex * this.slideDimensions()
    });
  }

  render() {
    const { currentIndex, translateValue, images } = this.state;
    const {
      pager,
      arrows,
      maxWidth
    } = this.props;
    const isCurrentSlide = index => (currentIndex === index);
    const maxWidthFormatted = maxWidth === 'none' ? maxWidth : `${maxWidth}px`;

    return (
      <div
        className="slider"
        style={{ maxWidth: maxWidthFormatted }}
      >
        {images.length &&
          <div className="slider__wrapper" style={{ transform: `translateX(${translateValue}px)` }}>
            {images.map((image, i) =>
              <Slide key={i} currentSlide={isCurrentSlide(i)} url={image.url} alt={image.title} />)}
          </div>
        }

        {arrows &&
          <Fragment>
            <Arrow onClick={() => { this.goToPrevSlide(); }} />
            <Arrow direction="right" onClick={() => { this.goToNextSlide(); }} />
          </Fragment>
        }

        {pager &&
          <div className="slider__pager">
            {images.map((image, i) => (
              <PagerDot
                key={i}
                slide={i}
                currentSlide={isCurrentSlide(i)}
                onClick={() => { this.goToSelectedSlide(i); }}
              />
            ))}
          </div>
        }
      </div>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  pager: PropTypes.bool,
  arrows: PropTypes.bool,
  maxWidth: PropTypes.string
};

Slider.defaultProps = {
  pager: true,
  arrows: true,
  maxWidth: 'none'
};

export default Slider;
