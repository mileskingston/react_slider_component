import React from 'react';
import { shallow } from 'enzyme';

import Slide from './Slide';

const props = {
  url: 'test/url',
  alt: 'test alt',
  currentSlide: true
};

describe('Slide component', () => {
  it('should render with matching props', () => {
    const wrapper = shallow(<Slide {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
