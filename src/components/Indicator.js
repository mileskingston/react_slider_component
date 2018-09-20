import React from 'react';
import PropTypes from 'prop-types';

import './Indicator.css';

const Indicator = props => (
  <button
    type="button"
    className={`indicator ${props.currentSlide ? 'indicator--active' : ''}`}
    onClick={() => { props.onClick(); }}
  />
);

Indicator.displayName = 'Indicator';

Indicator.propTypes = {
  currentSlide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Indicator;
