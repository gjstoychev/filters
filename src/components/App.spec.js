import React from 'react'
import {shallow} from 'enzyme'

import App from './App'
import List from './List'
import Filter from './Filter'

import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('(Component) App', () => {
  it('should render the component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <div className='App'>
        <p>React-Redux-Reselect-Filter-Example</p>
        <Filter />
        <List />
      </div>
    )).toEqual(true)
  })
})