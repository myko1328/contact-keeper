import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from './Types'
import axios from 'axios'

//Get Contact Action
export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/contacts')
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    })
  }
}

// Delete Contact Action
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (err) {
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};

// Add Contact Action
export const addContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post('/api/contacts', contact, config)
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    })
  }
}

// Set Current Contact Action
export const setCurrent = (contact) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: contact,
  })
  window.scrollTo(0, 0)
}

// Clear Current Contact Action
export const clearCurrent = () => ({ type: CLEAR_CURRENT })

// Set Current Contact Action
export const updateContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)
    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    })
  }
}

// Filter Contacts Action
export const filterContacts = (text) => ({
  type: FILTER_CONTACTS,
  payload: text,
})

// Clear Filter Action
export const clearFilter = () => ({
  type: CLEAR_FILTER,
})

// Clear Contacts Action
export const clearContacts = () => ({
  type: CLEAR_CONTACTS,
})
