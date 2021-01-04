import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/uv_header/uv_header';

describe('App Component', ()=> {
  it('renders without crashing', ()=> {
    shallow(<App />);
  });
  it('Contains 1 Header component', ()=> {
    var wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
})

