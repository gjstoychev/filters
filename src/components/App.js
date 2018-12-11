import React from 'react'
import PropTypes from 'prop-types'

import List from './List'
import Select from './Select'
import Filter from './Filter'

import './App.css'

const App = ({ fruits, filter, setFilter, selectOption, cleanFilters }) => {
  const colors = ['all', 'yellow', 'green', 'orange', 'brown']

  return (
    <div className='App'>
        <Select items={colors} placeholder='Colors' selectOption={selectOption} />
        <Filter id='name' value={filter.name} placeholder='Name' setFilter={setFilter} />
        <Filter id='type' value={filter.type} placeholder='Type' setFilter={setFilter} />
        <button onClick={cleanFilters}>X</button>
        <List fruits={fruits} />
    </div>
  )
}

App.propTypes = {
  fruits: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  selectOption: PropTypes.func.isRequired
}

export default App