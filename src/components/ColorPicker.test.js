import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker.js';

describe('ColorPicker Tests', () => {
  it('renders the color picker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects on a red button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(0).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('red');
  });

  it('selects on a yellow button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(1).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('yellow');
  });

  it('selects on a blue button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(2).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('blue');
  });
});
