import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.placeholder
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    event.preventDefault()

    const {value} = event.target
    const {selectOption} = this.props

    this.setState({value})

    selectOption(value)
  }

  render () {
    const {items} = this.props
    const {value} = this.state

    return (
      <select value={value} onChange={this.handleChange}>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    )
  }
}

Select.propTypes = {
  items: PropTypes.array.isRequired,
  selectOption: PropTypes.func.isRequired
}

export default Select