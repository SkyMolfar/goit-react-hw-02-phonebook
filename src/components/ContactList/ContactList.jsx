import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListContainer, ContactListItems } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ContactListContainer>
      <ContactListItems>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactListItems>
    </ContactListContainer>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};




