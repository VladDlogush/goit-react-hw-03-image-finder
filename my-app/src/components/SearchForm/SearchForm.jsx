import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styled.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={query}
          onChange={this.handleChange}
          placeholder="Search images..."
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
