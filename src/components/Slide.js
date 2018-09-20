import React from 'react';
import PropTypes from 'prop-types';

const Slide = props => (
  <img
    className={`slide ${props.currentSlide ? 'slide--active' : ''}`}
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
