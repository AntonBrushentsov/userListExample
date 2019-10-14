import React from 'react';
class UsersList extends React.Component {
  state = {
    isChange: false,
    users: {
      firstName: '',
      secondName: '',
      email: ''
    }
  };
  onChange = field => event => {
    const { users } = this.state;
    users[field] = event.target.value;
    this.setState({ users });
  };
  onClick = () => {
    const { isChange } = this.state;
    this.setState({ isChange: !isChange });
  };
  render() {
    const { data, deleteUser, state, onChange, onClick } = this;
    const { isChange, users } = state;
    return (
      <div>
        {data.length !== 0 ? (
          <ul className="wrapperSmall">
            {data.map(item => {
              const { id } = item;
              return (
                <li>
                  isChange ? ( s <input value={users} onChange={onChange()} />)
                  : (<p>{users}</p>)
                  <button onClick={onClick}>
                    {isChange ? 'Сохранить' : 'Изменить'}
                  </button>
                  {/*<p>{`First name: ${firstName}`}</p>*/}
                  {/*<p>{`Second name: ${secondName}`}</p>*/}
                  {/*<p>{`Email: ${email}`}</p>*/}
                  <button onClick={deleteUser(id)}>Удалить</button>
                  {/*<button onClick={changeUser(id)}>Изменить</button>*/}
                </li>
              );
            })}
          </ul>
        ) : (
          <h4>Нет данных</h4>
        )}
      </div>
    );
  }
}

export default UsersList;
