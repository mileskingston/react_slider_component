import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => (
  <button className="arrw arrw--right" onClick={props.onClick}>right</button>
);

ArrowRight.displayName = 'ArrowRight';

ArrowRight.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ArrowRight;
