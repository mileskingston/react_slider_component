import React from 'react';
import { shallow } from 'enzyme';

import Arrow from './Arrow';

describe('Arrow component', () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn
  };

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('should render with matching props', () => {
    const wrapper = shallow(<Arrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick function on click', () => {
    const wrapper = shallow(<Arrow {...props} />);
    wrapper.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('should contain correct icon', () => {
    const wrapper = shallow(<Arrow {...props} direction="right" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain correct class', () => {
    const wrapper = shallow(<Arrow {...props} direction="right" />);
    expect(wrapper.find('.slider__arrow--right').length).toBe(1);
  });
});
