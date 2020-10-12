import React, { useReducer } from "react"
import axios from 'axios'
import ContactContext from "./contactContext"
import ContactReducer from "./contactReducer"
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CONTACT_ERROR,
  CLEAR_FILTER,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types"

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  // Get Contact
  const getContacts = async () => {

    try {
      const res = await axios.get('/api/contacts')

      dispatch({ 
        type: GET_CONTACTS, 
        payload: res.data 
      })
    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Add Contact
  // create a function that takes contact param
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/contacts', contact, config)

      dispatch({ 
        type: ADD_CONTACT, 
        payload: res.data 
      })
      
    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }    
  }

  // Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`)

      dispatch({ 
        type: DELETE_CONTACT, 
        payload: id 
      })
    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }
    
  }

  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)

      dispatch({ 
        type: UPDATE_CONTACT, 
        payload: res.data
      })

    } catch (err) {
      dispatch({ 
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Clear Contacts
  const clearContacts = (contact) => {
    dispatch({ type: CLEAR_CONTACTS, payload: contact })
  }

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT, payload: contact })
  }

  // Filter Contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,

        getContacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
