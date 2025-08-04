import express from 'express';
import cors from 'cors';
import validator from 'validator';
import nodemailer from 'nodemailer';
import connect from './database/connect.js';
import Post from './model.js/model.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// مسیر ارسال ایمیل
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required',
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid email address',
    });
  }

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'success', message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email' });
  }
});

// مسیر دریافت تصاویر از دیتابیس
app.get('/api/images', async (req, res) => {
  try {
    const images = await Post.find({});
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
});

// مسیر آپلود تصویر
app.post('/uploads', async (req, res) => {
  const body = req.body;
  try {
    const newImage = await Post.create(body);
    await newImage.save();
    res.status(201).json({ msg: 'New image uploaded' });
  } catch (error) {
    res.status(400).json({ message: 'Error uploading the image to the site' });
  }
});

// اتصال به دیتابیس و اجرای سرور
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
