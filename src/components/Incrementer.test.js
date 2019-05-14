import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer.js';

describe('Incrementer tests', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('increments count on a button click', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('count')).toEqual(1)
  });
});
