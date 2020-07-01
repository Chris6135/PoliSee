require("dotenv").config();
const Agenda = require("agenda");

const transporter = require("./transporter");
const User = require("../models/User");
const Mailer = require("../models/Mailer");

const mongo = process.env.MONGO_URI;
const mailerId = process.env.MAILER_ID;

const dbConnect = {
  db: {
    address: mongo,
    collection: "jobs",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
const agenda = new Agenda(dbConnect);

agenda.define("group mailer", async (job, done) => {
  const mailer = await Mailer.findById(mailerId);
  const users = mailer.toJSON().list;
  if (!users.length) return;
  users.forEach((uId) => {
    User.findById(uId)
      .populate({ path: "savedPoliticians" })
      .then((u) => {
        const user = u.toJSON();
        const mail = {
          from: "PoliSee",
          to: user.email,
          subject: "It's Time to Stand Up",

          html: `<div>Don't forget to contact your representatives!\n\n${user.savedPoliticians
            .map((p) =>
              [p.phone, p.address, p.email, p.socialMedia].some((prop) => prop)
                ? `<h3>${p.name}:\n</h3> <p>${p.phone ? `phone: ${p.phone}\n` : ""}</p><p>${
                p.address ? `address: ${p.address.line1 + ", " + p.address.city + " " + p.address.state}\n` : ""
                }</p><p>${p.email ? `email: ${p.email}\n` : ""}</p><p>${
                p.socialMedia
                  ? `${
                  p.socialMedia.Twitter
                    ? `Twitter: ${p.socialMedia.Twitter}\n`
                    : ""
                  }${
                  p.socialMedia.Facebook
                    ? `Facebook: ${p.socialMedia.Facebook}\n`
                    : ""
                  }`
                  : ""
                }</p>`
                : `<p>${p.name}:\nSorry, no contact information available!</p>`
            )
            .join("\n")}
        <p><b>This is an auto-generated e-mail from the Polisee Dev Team<b></p>
        <p><b>If you would like to opt out of emails or hear about different politicians, please login to your account at
        <a href="polisee-app.herokuapp.com"> our website </a> <b></p>
      </div>`,
        };

        transporter.sendMail(mail, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: ", info.response);
          }
        });
      });
  });
  done();
});

agenda.define("solo mailer", (job, done) => {
  const user = job.attrs.data;
  const mail = {
    from: "PoliSee",
    to: user.email,
    subject: "It's Time to Stand Up",

    html: `<div>Don't forget to contact your representatives!\n\n${user.savedPoliticians
      .map((p) =>
        [p.phone, p.address, p.email, p.socialMedia].some((prop) => prop)
          ? `<h3>${p.name}:\n</h3> <p>${p.phone ? `phone: ${p.phone}\n` : ""}</p><p>${
              p.address ? `address: ${p.address.line1 + ", " + p.address.city + " " + p.address.state}\n` : ""
            }</p><p>${p.email ? `email: ${p.email}\n` : ""}</p><p>${
              p.socialMedia
                ? `${
                    p.socialMedia.Twitter
                      ? `Twitter: ${p.socialMedia.Twitter}\n`
                      : ""
                  }${
                    p.socialMedia.Facebook
                      ? `Facebook: ${p.socialMedia.Facebook}\n`
                      : ""
                  }`
                : ""
            }</p>`
          : `<p>${p.name}:\nSorry, no contact information available!</p>`
      )
      .join("\n")}
        <p><b>This is an auto-generated e-mail from the Polisee Dev Team<b></p>
        <p><b>If you would like to opt out of emails or hear about different politicians, please login to your account at
        <a href="polisee-app.herokuapp.com"> our website </a> <b></p>
      </div>`,
      
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
  done();
});

module.exports = agenda;