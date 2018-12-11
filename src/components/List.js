import React from 'react'
import PropTypes from 'prop-types'

const List = ({fruits}) => {
  return (
    <div>
      {fruits.map(item => (<div key={item.id}>{item.name}</div>))}
    </div>
  )
}

List.propTypes = {
  fruits: PropTypes.array.isRequired
}

export default List