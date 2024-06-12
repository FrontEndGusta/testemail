import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'gustavo.lima1307@gmail.com',
    pass: 'zlef qmqm keqx nrzr'
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
