import axios from "axios";


export const editUser = data => {
  return axios.patch('/api/users/edit', data)
};
