import React, { Component } from 'react';

import { createUser } from 'source';

import { showError } from 'utils';

class Form extends Component {
  state = {
    firstName: '',
    secondName: '',
    email: ''
  };

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  onSubmit = event => {
    event.preventDefault();

    const { updateUsersList, usersLength } = this.props;

    const newUser = { ...this.state, id: usersLength };
    const { firstName, secondName, email } = newUser;
    if (firstName && secondName && email) {
      createUser(newUser)
        .then(() => {
          updateUsersList();
        })
        .catch(showError);
      this.setState({
        firstName: '',
        secondName: '',
        email: ''
      });
    } else {
      console.log('Заполните все поля');
    }
  };

  render() {
    const {
      changeValue,
      state: { firstName, secondName, email }
    } = this;

    return (
      <form onSubmit={this.onSubmit} className="wrapperSmall">
        <label>
          Имя
          <input
            value={firstName}
            type="text"
            onChange={changeValue('firstName')}
          />
        </label>
        <label>
          Фамилия
          <input
            value={secondName}
            type="text"
            onChange={changeValue('secondName')}
          />
        </label>
        <label>
          Email
          <input value={email} type="email" onChange={changeValue('email')} />
        </label>
        <button>Сохранить</button>
      </form>
    );
  }
}

export default Form;
