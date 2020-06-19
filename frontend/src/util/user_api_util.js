import axios from "axios";


export const editUser = data => {
  return axios.patch('/api/users/edit', data)
};

export const fetchUserRepresentatives = () => {
  return axios.get('/api/users/politicians')
};