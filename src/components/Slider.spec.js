import React from 'react';
import { shallow, mount } from 'enzyme';

import Slider from './Slider';

describe('Slider component', () => {
    it('should render with matching props', () => {
        const wrapper = mount(<Slider />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should show the right amount of slides', () => {
        const wrapper = mount(<Slider />);

        wrapper.setState({
            images: [ 
              {
                title: 'animal',
                url: 'http://placeimg.com/220/140/tech'
              },
              {
                title: 'nature',
                url: 'http://placeimg.com/220/140/nature'
              },
              {
                title: 'tech',
                url: 'http://placeimg.com/220/140/people'
              },
              {
                title: 'animal',
                url: 'http://placeimg.com/220/140/tech'
              },
              {
                title: 'nature',
                url: 'http://placeimg.com/220/140/nature'
              },
              {
                title: 'tech',
                url: 'http://placeimg.com/220/140/people'
              }
            ]
        });

        expect(wrapper.find('.slider__slide').length).toBe(6);
    });

    it('shouldnt render wrapper', () => {
        const wrapper = shallow(<Slider />);
        wrapper.setState({
            images: []
        });

        expect(wrapper.find('.slider__wrapper').length).toBe(0);
    });
    it('shouldnt render pager', () => {
        const wrapper = shallow(<Slider pager={false} />);

        expect(wrapper.find('.slider__pager').length).toBe(0);
    });

    it('shouldnt render arrows', () => {
        const wrapper = shallow(<Slider arrows={false} />);

        expect(wrapper.find('.slider__arrow').length).toBe(0);
    });

    it('should update state values on clicking to next slide', () => {
        const wrapper = shallow(<Slider />);
        const instance = wrapper.instance();
        instance.slideDimensions = jest.fn();
        instance.goToNextSlide();
        wrapper.update();

        expect(instance.state.currentIndex).toBe(1);
    });


    it('should update state values on clicking to previous slide', () => {
        const wrapper = shallow(<Slider />);
        const instance = wrapper.instance();
        instance.slideDimensions = jest.fn();
        instance.goToPrevSlide();
        wrapper.update();

        expect(instance.state.currentIndex).toBe(2);
    });
});