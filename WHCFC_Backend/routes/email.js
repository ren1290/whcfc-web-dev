import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const emailSending = (subject, body) => {
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
    subject: subject,
    text: body,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

router.route("/contact").post((req, res) => {
  var emailBody =
    "Sender name: " +
    req.body.firstname +
    req.body.lastname +
    "\nSender email: " +
    req.body.email +
    "\nSender phone: " +
    req.body.phone +
    "\nMessage: " +
    req.body.message;

  try {
    emailSending("Contact Form Submission", emailBody);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default router;
