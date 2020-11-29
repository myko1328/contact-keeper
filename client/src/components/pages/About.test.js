import React from 'react'

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';

configure({ adapter: new Adapter() });

describe("Testing about page", () => {

    test("render about content", () => {
        const wrapper = shallow(<About />)
        expect(wrapper.find('.my-1').text()).toContain('A Full stack React app for keeping contact')
    })

    test("render version of the application", () => {
        const wrapper = shallow(<About />)
        expect(wrapper.find('.bg-dark').text()).toBe('Version: 1.0.0')
    })

})