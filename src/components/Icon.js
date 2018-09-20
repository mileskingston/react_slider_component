import React from 'react';
import PropTypes from 'prop-types';

import '../images/icons.svg';
import './Icon.scss';

const Icon = props => (
  <svg className={`icon icon--${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
