import React from 'react';
import Slider from './components/Slider';

import './App.scss';

const settings = {
  pager: true,
  arrows: true,
  maxWidth: '600'
};

const App = () => (
  <div className="container">
    <Slider {...settings} />
  </div>
);

export default App;
