import reducer from './fruits'
import * as fruits from './fruits'

describe.only('(Redux Module) Fruits', () => {
  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})

      const want = {
        items: {
          'id1': {id: 'id1', name: 'Apple', value: 11},
          'id2': {id: 'id2', name: 'Banana', value: 12},
          'id3': {id: 'id3', name: 'Carrot', value: 13},
          'id4': {id: 'id4', name: 'Pinapple',value: 14},
          'id5': {id: 'id5', name: 'Kiwi',value: 15},
        },
        filter: ''
      }

      expect(got).toEqual(want)
    })

    it('should return the previous state if an action was not matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})

      expect(got).toEqual(state)
    })
  })

  describe('(Action Creator) setFilter', () => {
    it('should return the action object', () => {
      const got = fruits.setFilter('BT')

      const want = {
        type: fruits.SET_FILTER,
        filter: 'BT'
      }

      expect(got).toEqual(want)
    })
  })

  describe('(Action Handler) SET_FILTER', () => {
    it('should add the filter to the state', () => {
      const state = {
        items: [1, 2, 3],
        filter: ''
      }

      const got = reducer(state, {
        type: fruits.SET_FILTER,
        filter: 'BT'
      })

      const want = {
        items: [1, 2, 3],
        filter: 'BT'
      }

      expect(got).toEqual(want)
    })
  })
})