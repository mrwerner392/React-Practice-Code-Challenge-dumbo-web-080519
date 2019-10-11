import React, { Component } from 'react';

export default class AddMoney extends Component {

  state = {
    value: ""
  }

  handleInputChange = evt => {
    this.setState({
      value: evt.target.value
    })
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    parseInt(evt.target.amount.value) > 0 ? this.props.handleAddMoney(evt) : alert('Amount must be positive.')
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <label>Add Money to Account: </label>
        <input type="number"
               name="amount"
               value={ this.state.value }
               onChange={ this.handleInputChange }
               />
        <input type='submit' value='Add Money' />
      </form>
    )
  }

}
