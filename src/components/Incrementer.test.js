import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer.js';

describe('Incrementer tests', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
});
