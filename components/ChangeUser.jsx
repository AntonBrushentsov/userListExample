import React from 'react';
class ChangeUser extends React.Component {
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
    const { state, onChange, onClick } = this;
    const { isChange, users } = state;

    return (
      <div>
        <ul className="wrapperSmall">
          {data.map((item, index) => {
            return (
              <li key={index}>
                isChange ? <input value={users} onChange={onChange()} /> :{' '}
                <p>{users}</p>
                <button onClick={onClick}>
                  {isChange ? 'Сохранить' : 'Изменить'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ChangeUser;
