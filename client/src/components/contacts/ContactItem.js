import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  deleteContact,
  setCurrent,
  clearCurrent,
} from '../../actions/contactActions'
import { connect } from 'react-redux'

const ContactItem = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
  const { _id, name, email, phone, type } = contact

  const onDelete = () => {
    deleteContact(_id)
    clearCurrent()
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phonen" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          onClick={() => setCurrent(contact)}
          className="btn btn-dark btn-sm"
        >
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
  filtered: state.contacts.filtered,
  loading: state.contacts.loading,
})

export default connect(mapStateToProps, {
  deleteContact,
  setCurrent,
  clearCurrent,
})(ContactItem)
