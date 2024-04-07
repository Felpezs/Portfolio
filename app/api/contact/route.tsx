import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: NextRequest) {
  const username = process.env.EMAIL_USERNAME;
  const password = process.env.EMAIL_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("body");

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: {
        name: name,
        address: username,
      },
      to: myEmail,
      replyTo: email,
      subject: `Hey Felipe, I'm interested in working with you!`,
      text: message,
    });

    return NextResponse.json(
      { message: "Email was sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
