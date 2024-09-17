import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.route("/contact").post((req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_MAILING_SENDER_EMAIL,
      pass: process.env.APP_MAILING_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_MAILING_SENDER_EMAIL,
    to: process.env.APP_MAILING_RECEIVER_EMAIL,
    subject: "Contact form has been submitted",
    text:
      "Sender name: " +
      req.body.firstname +
      req.body.lastname +
      "\nSender email: " +
      req.body.email +
      "\nSender phone: " +
      req.body.phone +
      "\nMessage: " +
      req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.sendStatus(200);
    }
  });
});

export default router;
