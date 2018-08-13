import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App, ', () => {
  const wrapper = shallow(<App />);

  it('renders container', () => {
    expect(wrapper.find('.app').length).toEqual(1);
  });
});
