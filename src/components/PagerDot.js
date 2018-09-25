import React from 'react';
import PropTypes from 'prop-types';

import './PagerDot.scss';

const PagerDot = ({
  onClick,
  currentSlide,
  slide
}) => (
  <button
    type="button"
    className={`pager__dot ${currentSlide ? 'pager__dot--active' : ''}`}
    onClick={() => { onClick(); }}
    tabIndex={currentSlide ? '-1' : '0'}
  >
    <span className="sr--only">{slide}</span>
  </button>
);

PagerDot.displayName = 'PagerDot';

PagerDot.propTypes = {
  currentSlide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  slide: PropTypes.number.isRequired
};

export default PagerDot;
