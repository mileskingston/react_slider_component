import React from 'react';
import Slider from './components/Slider';

const settings = {
  pager: true
};

const App = () => (
  <div className="app">
    <Slider {...settings} />
  </div>
);

export default App;
