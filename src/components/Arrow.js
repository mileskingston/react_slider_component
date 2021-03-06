import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

import './Arrow.scss';

const Arrow = props => (
  <button
    className={
      `slider__arrow ${props.direction === 'left' ? 'slider__arrow--left' : 'slider__arrow--right'}`
    }
    onClick={props.onClick}
  >
    <span className="sr--only">{props.direction}</span>

    {props.direction === 'left'
      ? <Icon name="left" />
      : <Icon name="right" />}
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
