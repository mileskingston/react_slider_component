import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => (
  <button className="arrw arrw--left" onClick={props.goToPrevSlide}>left</button>
);

ArrowLeft.displayName = 'ArrowLeft';

ArrowLeft.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired
};

export default ArrowLeft;
