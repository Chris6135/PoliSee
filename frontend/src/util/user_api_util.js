import axios from "axios";


export const editUser = data => {
  return axios.patch('/api/users/edit', data)
};

export const fetchUserRepresentatives = userId => {
  return axios.get('/api/politicians/user', userId)
};