import React from 'react';
import PropTypes from 'prop-types';

import './PagerDot.css';

const PagerDot = props => (
  <button
    type="button"
    className={`pager__dot ${props.currentSlide ? 'pager__dot--active' : ''}`}
    onClick={() => { props.onClick(); }}
  />
);

PagerDot.displayName = 'PagerDot';

PagerDot.propTypes = {
  currentSlide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PagerDot;
