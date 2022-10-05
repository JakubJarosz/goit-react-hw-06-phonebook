import React from 'react'
import PropTypes from 'prop-types'

function contacts(props) {
  return (
      <div>
          <h2>Contacts</h2>
          <input
              type="text"
              onChange={props.inputFilter}
          />
    </div>
  )
}

contacts.propTypes = {
    inputFilter: PropTypes.func.isRequired,
}

export default contacts
