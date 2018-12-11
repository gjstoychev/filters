import React from 'react'
import {shallow} from 'enzyme'

import Filter from './Filter'

import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('(Component) Filter', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Filter />)

    expect(wrapper.equals(
      <input type='text' placeholder='Filter' onChange={wrapper.instance().handleFilterChange} />
    )).toEqual(true)
  })
})