import React from 'react'

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './ContactForm';

configure({ adapter: new Adapter() });
 
describe("Contact Form Testing", () => {

    test("render title of form", () => {
        const wrapper = shallow(<ContactForm />)
        expect(wrapper.find('h2').text()).toContain('Add Contact')
    })

})