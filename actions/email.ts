"use server"
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function sendContactEmail(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}) {
    try {
        // Save to DB
        const contact = await prisma.contact.create({ data });

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Build message
        const mailOptions = {
            from: process.env.SMTP_USER, // always your company email
            replyTo: data.email, // allows company to reply directly to client
            to: process.env.SMTP_USER, // company inbox
            subject: `📩 New Contact Form Submission from ${contact.firstName} ${contact.lastName}`,
            text: `
        You have received a new contact form submission:

        Name: ${contact.firstName} ${contact.lastName}
        Email: ${contact.email}
        Phone: ${contact.phone}
        Service: ${contact.service}

        Message:
        ${contact.message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Service:</strong> ${contact.service}</p>
        <p><strong>Message:</strong><br/>${contact.message.replace(/\n/g, "<br/>")}</p>
      `,
        };

        // 2. CONFIRMATION EMAIL TO USER 
        const userConfirmationMailOptions = {
            from: process.env.SMTP_USER,
            to: data.email,
            subject: `Thank you for contacting QuantEdge Limited, ${data.firstName}!`,
            text: `
        Dear ${data.firstName} ${data.lastName},

        Thank you for contacting QuantEdge Limited! We have received your message and will get back to you within 24 hours.

        Submission Summary:
        - Name: ${data.firstName} ${data.lastName}
        - Email: ${data.email}
        - Phone: ${data.phone}
        - Service: ${data.service}
        - Message: ${data.message}

        Best regards,
        QuantEdge Limited Team
          `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- COMPANY HEADER WITH LOGO -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #1B9AAA;">
            <img src="https://company-website-lilac-two.vercel.app/images/BGlogo.png" alt="QuantEdge Limited" style="max-width: 150px; height: auto;">
            <h1 style="color: #333; margin: 10px 0 0 0;">QuantEdge Limited</h1>
          </div>

          <h2 style="color: #333; margin-top: 30px;">Thank you for contacting us, ${data.firstName}!</h2>
          
          <p>Dear ${data.firstName} ${data.lastName},</p>
          
          <p>Thank you for reaching out to <strong>QuantEdge Limited</strong>! We have received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #1B9AAA; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Submission Summary:</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
          </div>
          
          <p>If you have any urgent questions, please feel free to reply to this email.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="margin: 0;">
              Best regards,<br/>
              <strong>The QuantEdge Limited Team</strong>
            </p>
          </div>
        </div>
          `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userConfirmationMailOptions);

        return { success: true };
    } catch (error: any) {
        console.error("Error sending contact email:", error);
        return { success: false, error: error.message || "Email failed to send" };
    }
}