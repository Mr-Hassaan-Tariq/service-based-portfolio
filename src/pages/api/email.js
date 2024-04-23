import { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer';
export default async function handler(
    req,
    res
) {
    if (req.method === 'POST') {
        try {
            const {
                name,
                email,
                phoneNumber,
                subject,
                message,
            } = req.body;


            const transporter = nodemailer.createTransport({
                service: process.env.MAIL_SERVICE,
                host: 'mail.binarybursts.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                },
            });

            sendEmailToUser(transporter, req.body)
            sendEmailToUs(transporter, req.body)



            res.status(200).json({ status: true, message: 'Email has been sent successfully.' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ status: false, message: 'There was an error sending the email.' });
        }
    } else {
        res.status(405).json({ status: false, message: 'Method Not Allowed' });
    }
}

const sendEmailToUs = async (transporter, data) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_SENT_TO,
        subject: `New Query Received - ${data.subject}`,
        html: `<p>Hello,</p>
        <p>A new query has been received from a user. Here are the details:</p>
        <ul>
        <li><strong>Name:</strong>${data.name}</li>
        <li><strong>email:</strong>${data.email}</li>
        <li><strong>phoneNumber:</strong>${data.phoneNumber}</li>
        <li><strong>message:</strong>${data.message}</li>
        </ul>
        <p>Please respond to the user promptly to address their query.</p>
        
        
        <p>Sincerely,</p>
        <p>Binary Burst</p>`
    };

    try {


        await transporter.sendMail(mailOptions);

    } catch (error) {

        console.log("error is ",error)
    }
}

const sendEmailToUser = async (transporter, data) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: data.email,
        subject: `Confirmation of Receipt: ${data.subject} Request`,
        html: `<p>Hi ${data.name},</p>
        <p>Thanks for reaching out to us. We appreciate your interest in our business. This is to confirm that we’ve successfully received your request for ${data.subject}.</p>
        <p>Here is the requested information:<br>
        ${data.message}</p>
        
        
        <p>Sincerely,</p>
        <p>Binary Burst</p>`
    };

    await transporter.sendMail(mailOptions);
}