import React from 'react';
import PropTypes from 'prop-types';

import './Indicator.css';

const Indicator = props => (
  <button
    type="button"
    className={`slider__indicator ${props.currentSlide ? 'slider__indicator--active' : ''}`}
    onClick={() => { props.onClick(); }}
  />
);

Indicator.displayName = 'Indicator';

Indicator.propTypes = {
  currentSlide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Indicator;
