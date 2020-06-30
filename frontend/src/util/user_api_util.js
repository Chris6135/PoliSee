import axios from "axios";


export const editUser = data => {
  debugger
  return axios.patch('/api/users/edit', data)
};

export const fetchUserRepresentatives = () => {
  return axios.get('/api/users/politicians')
};
