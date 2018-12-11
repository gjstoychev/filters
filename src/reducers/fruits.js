export const SET_FILTER = 'SET_FILTER'
export const SELECTION = 'SELECTION'
export const CLEAN_FILTERS = 'CLEAN_FILTERS'

export const setFilter = (query, id) => ({
  type: SET_FILTER,
  query,
  id
})

export const selectOption = option => ({
  type: SELECTION,
  option
})

export const cleanFilters = () => ({
  type: CLEAN_FILTERS
})

const setFilterHandler = (state, {query, id}) => {
  const newState = {
    ...state,
    filter: {
      ...state.filter,
      [id]: query
    }
  }

  return newState
}

const selectionHandler = (state, {option}) => {
  const newState = {
    ...state,
    selection: option
  }

  return newState
}

const cleanFiltersHandler = state => {
  const newState = {
    ...state,
    items: startingFruits,
    selection: 'all',
    filter: {
      ...state.filter,
      name: '',
      type: ''
    }
  }

  return newState
}

const ACTION_HANDLERS = {
  [SET_FILTER]: setFilterHandler,
  [SELECTION]: selectionHandler,
  [CLEAN_FILTERS]: cleanFiltersHandler
}

const startingFruits = {
  'id1': {id: 'id1', name: 'Apple', color: 'green', type: 'fruit'},
  'id2': {id: 'id2', name: 'Banana', color: 'yellow', type: 'fruit'},
  'id3': {id: 'id3', name: 'Carrot', color: 'orange', type: 'vegetable'},
  'id4': {id: 'id4', name: 'Pinapple', color: 'brown', type: 'fruit'},
  'id5': {id: 'id5', name: 'Kiwi', color: 'green', type: 'fruit'}
}

const initialState = {
  items: startingFruits,
  selection: 'all',
  filter: {
    name: '',
    type: ''
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
