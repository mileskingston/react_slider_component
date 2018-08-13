import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => (
  <button className="arrw arrw--right" onClick={props.goToNextSlide}>right</button>
);

ArrowRight.displayName = 'ArrowRight';

ArrowRight.propTypes = {
  goToNextSlide: PropTypes.func.isRequired
};

export default ArrowRight;
