import axios from "axios";



export const sendTestMail =() => {
    console.log("sending the axios request from mail_util")
    return  axios(
        {
        method: "POST", 
        url:"/api/mailer/send", 
        data: {
            name: "Chris",
            email: "Christopher.simons10@gmail.com",
            message: "Hey chris"
        }
        }).then((response)=>{
            console.log("you are in the then")
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!"); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
        }
    }).catch(err => console.log(err))
}


// const data = {
//     name: "Chris",
//     email: "Chrisotpher.simons10@gmail.com",
//     message: "Hey chris"
// }

// export const sendTestMail = ()=> {
//     return axios.post("/api/mailer/send", data) 
// }


  