import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure the email transporter
        // This uses environment variables that you (the user) will set in .env.local
        console.log("Debug: EMAIL_USER is", process.env.EMAIL_USER ? "defined" : "undefined");
        console.log("Debug: EMAIL_PASS is", process.env.EMAIL_PASS ? "defined" : "undefined");

        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this if using another provider like Outlook or SendGrid
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            replyTo: email, // So you can reply directly to the user
            subject: `New Contact Form Submission: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
