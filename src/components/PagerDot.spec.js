import React from 'react';
import { shallow } from 'enzyme';

import PagerDot from './PagerDot';

const curruentSlideTrue = true;

describe('PagerDot component', () => {
    it('should render with matching props', () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(
            <PagerDot slide={0} currentSlide={curruentSlideTrue} onClick={mockFunc} />
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onClick function on click', () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(<PagerDot slide={0} currentSlide={curruentSlideTrue} onClick={mockFunc} />);

        wrapper.simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    });
}); 