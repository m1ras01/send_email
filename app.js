// Importing Nodemailer
const nodemailer = require('nodemailer');

// Basic email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zhailaybaimiras05@gmail.com', // Your email
        pass: 'ffto rllv uevp labj' // Your password
    }
});

// Function to send email
const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'zhailaybaimiras05@gmail.com',
            to: to,
            subject: subject,
            text: text
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Testing email sending
sendEmail('fokonoe88@gmail.com', 'Test Subject', 'This is a test email from Nodemailer.');
