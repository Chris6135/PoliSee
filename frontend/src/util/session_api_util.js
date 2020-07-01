import axios from "axios";

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },
  register: (user) => axios.post("/api/users/register", user),
  login: (user) => axios.post("/api/users/login", user),
  editUser: (data) => axios.patch("/api/users/edit", data),
  fetchUserRepresentatives: () => axios.get("/api/users/politicians"),
  toggleSubscribe: (id) => axios.patch(`/api/politicians/${id}/subscribe`),
  toggleContact: () => axios.put("/api/users/contact"),
  emailNow: () => axios.post("/api/users/email"),
};

export default SessionAPI;
