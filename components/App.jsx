import React, { Component } from 'react';

import Form from './Form';
import UsersList from './UsersList';
import { getUsers, deleteUser, changeUser } from 'source';

import { showError } from 'utils';
import './styles.css';

class App extends Component {
  state = {
    users: []
  };

  updateUsersList = () => {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  };

  deleteUser = firstName => () => {
    deleteUser(firstName)
      .then(({ data }) => {
        this.updateUsersList({ users: data });
      })
      .catch(showError);
  };

  changeUser = firstName => () => {
    changeUser(firstName)
      .then(() => {
        this.updateUsersList();
      })
      .catch(showError);
  };

  componentDidMount() {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  }

  render() {
    const { updateUsersList, deleteUser, changeUser } = this;
    const { users } = this.state;

    return (
      <div className="wrapper">
        <UsersList
          data={users}
          deleteUser={deleteUser}
          changeUser={changeUser}
        />
        <Form updateUsersList={updateUsersList} />
      </div>
    );
  }
}

export default App;
