# React slider

Custom React slider written from scratch.

## How to run

first install node_modules folder.
```sh
npm install
```

to run development build with local server
```sh
npm run start
```

For production build
```sh
npm run build
```

## Props

 - pager : bool (default true)
 - arrows : bool (default true)
 - maxWidth: string (default 'none')
 - className: string (default '')

example:
```sh
import React from 'react';
import Slider from './components/Slider';

const settings = {
  pager: true,
  arrows: true,
  maxWidth: '600',
  className: 'new-slider'
};

const SimpleSlider = () => (
  <div className="container">
    <Slider {...settings} />
  </div>
);

export default SimpleSlider;

```

### TODO:

* allow custom pager
* allow custom arrows
* add unit tests
* create api call for images
* remove back effect in slideshow
* slides to show
* slides to scroll
* draggable