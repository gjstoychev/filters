import {itemsSelector, filterSelector, filteredFruitsSelector} from './selectors'

describe('(Selectors) fruits', () => {
  const state = {
    fruits: {
      items: {
        id1: {name: 'item1'},
        id2: {name: 'item2'}
      },
      filter: ''
    }
  }

  it('should return items', () => {
    const got = itemsSelector(state)

    const want = {
      id1: {name: 'item1'},
      id2: {name: 'item2'}
    }

    expect(got).toEqual(want)
  })

  it('should return filter', () => {
    const state = {
      fruits: {filter: 'BT1234'}
    }

    const got = filterSelector(state)

    expect(got).toEqual('BT1234')
  })

  it('should return an array with all items', () => {
    const got = filteredFruitsSelector(state)

    const want = [
      {name: 'item1'},
      {name: 'item2'}
    ]

    expect(got).toEqual(want)
  })

  it('should return an array with filtered items', () => {
    const state = {
      fruits: {
        items: {
          id1: {name: 'item1'},
          id2: {name: 'item2'}
        },
        filter: '2'
      }
    }

    const got = filteredFruitsSelector(state)

    const want = [{name: 'item2'}]

    expect(got).toEqual(want)
  })
})