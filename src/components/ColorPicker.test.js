import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker.js';

describe('ColorPicker tests', () => {
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color to red on button press', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('color')).toEqual('red');
  });

  it('changes color to yellow on button press', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state('color')).toEqual('yellow');
  });

  it('changes color to blue on button press', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click');

    expect(wrapper.state('color')).toEqual('blue');
  });

  it('changes div className to color on button press', done => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.setState({ color: 'red' }, () => {
      expect(wrapper.find('div').at(0).hasClass('red')).toBeTruthy();
      console.log(wrapper);
      done();
    });
  });
});
