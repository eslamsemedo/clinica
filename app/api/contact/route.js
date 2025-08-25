import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, number, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`, // sender is YOU but includes name
    to: process.env.EMAIL_TO,
    subject: `Message from ${name}`,
    text: `
      You've received a new message:
      
      Name: ${name}
      Email: ${email}
      Phone Number: ${number}
      Message:
        ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
