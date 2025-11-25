import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email,phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Contact" <${process.env.SMTP_FROM}>`,
            to: process.env.SMTP_TO,
            subject: "New Contact Message",
            html: `
        <h2>New Client Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone: ${phone}</strong></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error("Email send error:", err);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
}
