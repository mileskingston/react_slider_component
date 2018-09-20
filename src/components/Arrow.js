import React from 'react';
import PropTypes from 'prop-types';

import './Arrow.css';

const Arrow = props => (
  <button
    className={
      `slider__arrow ${props.direction === 'left' ? 'slider__arrow--left' : 'slider__arrow--right'}`
    }
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
