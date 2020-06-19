const express = require("express");
const router = express.Router();
const transporter = require("../../mailer/transporter");

//to subscribe

//req body has userid, politicanid
//if savedpolitician, findbyidandupdate
//if contactpolitician

//might be req.body.politican

router.post(`/send`, (req, res) => {

    let mail = {
        from: "PoliSee",
        to: req.body.email,
        subject: "test2",

        html: req.body.message
    }

    transporter.sendMail(mail, (err,data) =>{
        console.log("in transporter in mailer.js")
        if (err){
            res.json({
                msg: "failed"
            })
        }else{
            res.json({
                msg: "sucess"
            })
        }
    })
})

module.exports = router;


