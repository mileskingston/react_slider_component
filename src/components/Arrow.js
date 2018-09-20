import React from 'react';
import PropTypes from 'prop-types';

const Arrow = props => (
  <button
    className={`arrw ${props.direction === 'left' ? 'arrw--left' : 'arrw--right'}`}
    onClick={props.onClick}
  >
    {props.direction === 'left' ? 'left' : 'right'}
  </button>
);

Arrow.displayName = 'Arrow';

Arrow.propTypes = {
  direction: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Arrow.defaultProps = {
  direction: 'left'
};

export default Arrow;
