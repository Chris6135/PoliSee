import axios from "axios";

const UserAPI = {
  editUser: (data) => axios.patch("/api/users/edit", data),
  fetchUserRepresentatives: () => axios.get("/api/users/politicians"),
  toggleSubscribe: (id) => axios.patch(`/api/politicians/${id}/subscribe`),
  toggleContact: () => axios.put("/api/users/contact"),
  emailNow: () => axios.put("/api/users/email"),
};

export default UserAPI;
