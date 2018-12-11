import {connect} from 'react-redux'

import {setFilter, selectOption, cleanFilters} from '../reducers/fruits'
import {selectedFruitsSelector} from '../reducers/selectors'

import App from '../components/App'

const mapStateToProps = (state) => ({
  fruits: selectedFruitsSelector(state),
  filter: state.fruits.filter
})

const mapDispatchToProps = {
  setFilter,
  selectOption,
  cleanFilters
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)