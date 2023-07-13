import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactInfo, ContactItemContainer, ContactName, ContactNumber, DeleteButton } from './ContactItem.styled';

export class ContactItem extends Component {
  handleDelete = () => {
    const { id, onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <ContactItemContainer>
        <ContactInfo>
          <ContactName>{name}</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContactInfo>
        <DeleteButton onClick={this.handleDelete}>Видалити</DeleteButton>
      </ContactItemContainer>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};




