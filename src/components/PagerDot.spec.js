import React from 'react';
import { shallow } from 'enzyme';

import PagerDot from './PagerDot';

const mockFn = jest.fn();

const props = {
  curruentSlide: true,
  onClick: mockFn,
  slide: 0
};

describe('PagerDot component', () => {
  it('should render with matching props', () => {
    const wrapper = shallow(<PagerDot {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick function on click', () => {
    const wrapper = shallow(<PagerDot {...props} />);

    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
