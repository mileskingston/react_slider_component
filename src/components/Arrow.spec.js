import React from 'react';
import { mount } from 'enzyme';

import Arrow from './Arrow';

describe('Arrow component', () => {
    it('should render with matching props', () => {
        const mockFunc = jest.fn();
        const wrapper = mount(<Arrow onClick={mockFunc} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call onClick function on click', () => {
        const mockFunc = jest.fn();
        const wrapper = mount(<Arrow onClick={mockFunc} />);

        wrapper.simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    });

    it('should contain correct class', () => {
        const mockFunc = jest.fn();
        const wrapper = mount(<Arrow onClick={mockFunc} direction="right" />);

        expect(wrapper.find('.slider__arrow--right').length).toBe(1);
    });

    it('should contain correct icon', () => {
        const mockFunc = jest.fn();
        const wrapper = mount(<Arrow onClick={mockFunc} direction="right" />);

        expect(wrapper.find('.icon--right').length).toBe(1);
    });
});