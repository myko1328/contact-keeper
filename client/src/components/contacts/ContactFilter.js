import React, { useContext, useRef, useEffect } from 'react'
import { filterContacts, clearFilter } from '../../actions/contactActions'
import { connect } from 'react-redux'

const ContactFilter = ({ filterContacts, clearFilter }) => {
  const text = useRef('')

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  )
}

export default connect(null, {
  filterContacts,
  clearFilter,
})(ContactFilter)
