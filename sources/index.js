import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const deleteUser = id => Axios.delete('/user', { data: { id } });
const changeUser = id => Axios.put('/user', { params: { id } });
export { getUsers, createUser, deleteUser, changeUser };
