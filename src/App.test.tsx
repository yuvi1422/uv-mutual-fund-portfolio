import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import UVHeader from './components/uv_header/uv_header';

import * as headerJSONData from './components/uv_header/uv_header.json'

describe('App Component', ()=> {
  it('renders without crashing', ()=> {
    shallow(<App />);
  });
  it('Contains 1 Header component', ()=> {
    const shallowWrapper = shallow(<App />);
    const headerComponent = shallowWrapper.find(UVHeader);
    expect(headerComponent).toHaveLength(1);

    const deepWrapper = mount(<App />);
    expect(deepWrapper.find(UVHeader).prop('data')).toEqual(headerJSONData.config);
  });
})

