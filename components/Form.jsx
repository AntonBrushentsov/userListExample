import React, { Component } from 'react';

import { createUser } from 'source';

import { showError } from 'utils';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      secondName: '',
      email: ''
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  onSubmit(e) {
    e.preventDefault();

    const { updateUsersList } = this.props;

    createUser(this.state)
      .then(() => {
        updateUsersList();
      })
      .catch(showError);
  }

  render() {
    const { changeValue } = this;

    return (
      <form onSubmit={this.onSubmit} className="wrapperSmall">
        <label>
          Имя
          <input type="text" onChange={changeValue('firstName')} />
        </label>
        <label>
          Фамилия
          <input type="text" onChange={changeValue('secondName')} />
        </label>
        <label>
          Email
          <input type="email" onChange={changeValue('email')} />
        </label>
        <button>Сохранить</button>
      </form>
    );
  }
}

export default Form;
