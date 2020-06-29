import axios from "axios";

export const sendTestMail =( data) => {
        return axios.post("/api/mailer/send", data)
}



  