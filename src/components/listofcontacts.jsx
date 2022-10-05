import React from 'react'
import PropTypes from 'prop-types'

function listofcontacts(props) {
  return (
      <div>
          <ul>
              {props.items.filter((el) => el.name.includes(props.filter)).map((el) =>
                  <li key={el.id}>
                      {el.name}  {el.number}
                      <button id={el.id} onClick={props.deleteBtn}>Delete</button>
                  </li>
              )}
          </ul>
    </div>
  )
}

listofcontacts.propTypes = {
    items: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deleteBtn: PropTypes.func.isRequired,
}

export default listofcontacts
