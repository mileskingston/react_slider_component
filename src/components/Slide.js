import React from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

const Slide = props => (
  <img
    className={`slider__slide ${props.currentSlide ? 'slider__slide--active' : ''}`}
    src={props.url}
    alt={props.alt}
  />
);

Slide.displayName = 'Slide';

Slide.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  currentSlide: PropTypes.bool.isRequired
};

Slide.defaultProps = {
  alt: ''
};

export default Slide;
