import React from 'react'
import {shallow} from 'enzyme'

import List from './List'

import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('(Component) List', () => {
  it('should render the list items', () => {
    const fruitsArray = [
      {id: 'id1', name: 'Apple', value: 11},
      {id: 'id2', name: 'Banana', value: 12},
      {id: 'id3', name: 'Carrot', value: 13},
      {id: 'id4', name: 'Pinapple',value: 14},
      {id: 'id5', name: 'Kiwi',value: 15},
    ]

    const wrapper = shallow(
      <List fruits={fruitsArray} />
    )

    expect(wrapper.equals(
      <ul>
        <li key='id1'>Apple</li>
        <li key='id2'>Banana</li>
        <li key='id3'>Carrot</li>
        <li key='id4'>Pinapple</li>
        <li key='id5'>Kiwi</li>
      </ul>
    )).toEqual(true)
  })
})