import React from 'react'
import {Provider} from 'react-redux'

import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'

import App from '../components/App'
import AppContainer from './AppContainer'

describe('(Redux Container) App', () => {
  let container, component

  const FakeComponent = () => <div>content</div>

  beforeEach(() => {
    const store = configureMockStore()({
      fruits: {
        items: {
          1: {id: 'id1', name: 'Apple', value: 11},
          2: {id: 'id2', name: 'Banana', value: 12}
        }
      }
    })

    configure({adapter: new Adapter()})

    const wrapper = mount(
      <Provider store={store}>
        <AppContainer>
          <FakeComponent />
        </AppContainer>
      </Provider>
    )

    container = wrapper.find(AppContainer)
    component = container.find(App)
  })

  it('should render the component with the provided items', () => {
    const got = component.prop('fruits')

    const want = [
      {id: 'id1', name: 'Apple', value: 11},
      {id: 'id2', name: 'Banana', value: 12}
    ]

    expect(got).toEqual(want)
  })

  it('should render the component with the provided filter', () => {
    const store = configureMockStore()({
      fruits: {
        items: {
          1: {id: 'id1', name: 'Apple', value: 11},
          2: {id: 'id2', name: 'Banana', value: 12}
        },
        filter: 'ana'
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <AppContainer>
          <FakeComponent />
        </AppContainer>
      </Provider>
    )

    container = wrapper.find(AppContainer)
    component = container.find(App)

    const got = component.prop('fruits')

    const want = [
      {id: 'id2', name: 'Banana', value: 12}
    ]

    expect(got).toEqual(want)
  })
})