import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => (
  <button className="arrw arrw--left" onClick={props.onClick}>left</button>
);

ArrowLeft.displayName = 'ArrowLeft';

ArrowLeft.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ArrowLeft;
