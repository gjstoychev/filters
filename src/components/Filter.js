import React from 'react'
import PropTypes from 'prop-types'

class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange (event) {
    const {id, value} = event.target
    const {setFilter} = this.props

    setFilter(value, id)
  }

  render() {
    const {id, value, placeholder} = this.props

    return (
      <input
        id={id}
        type='text'
        value={value}
        placeholder={placeholder}
        onBlur={this.handleFilterChange}
        onChange={this.handleFilterChange}
      />
    )
  }
}

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Filter
