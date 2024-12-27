const express = require('express');
const bodyParser = require('body-parser');
const dotenv=require('dotenv').config()
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000; 


app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.GMAIL, 
    pass: process.env.PASSWORD, 
  },
});


app.post('/send-email', async (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  const mailOptions = {
    from: process.env.GMAIL, 
    to: `${email}`, 
    subject:'Your message is sent successfully',
    text: `
First Name: ${firstname}
Last Name: ${lastname}
Email: ${email}
Message: ${message}
\n Thank You for your interest I will contact you as early as possible.
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send({ success: false, message: 'Failed to send email' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
