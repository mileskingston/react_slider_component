import React from 'react';
import PropTypes from 'prop-types';

function Slide(props) {
  return (
    <img className="slide" src={props.url} alt={props.alt} />
  );
}

Slide.displayName = 'Slide';

Slide.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Slide.defaultProps = {
  alt: ''
};

export default Slide;
