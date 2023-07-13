import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <FilterContainer>
        <FilterInput
          type="text"
          name="filter"
          placeholder="Пошук контактів"
          value={value}
          onChange={onChange}
        />
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

