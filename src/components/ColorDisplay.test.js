import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay.js';

describe('ColorDisplay component tests', () => {
  it('renders the color display', () => {
    const wrapper = shallow(<ColorDisplay color="FF0000" />)
    expect(wrapper).toMatchSnapshot();
  });
});
