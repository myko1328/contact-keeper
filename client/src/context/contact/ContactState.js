import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Myko Miparanum',
        email: 'mmiparanum@gmail.com',
        phone: '000-001-1234',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Garrette Paran',
        email: 'gparan@gmail.com',
        phone: '123-333-1234',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Mark Duhaylungson',
        email: 'md@gmail.com',
        phone: '231-790-7677',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
