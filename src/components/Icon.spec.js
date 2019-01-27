import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('Icon component', () => {
  it('should render with matching props', () => {
    const wrapper = shallow(<Icon name="left" />);
    expect(wrapper).toMatchSnapshot();
  });
});
