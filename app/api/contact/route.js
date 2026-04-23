import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, service, message } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { EMAIL_USER, EMAIL_PASS, CONTACT_RECEIVER } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("Missing email credentials in .env");
      return NextResponse.json(
        { error: "Server misconfiguration. Please contact support." },
        { status: 500 }
      );
    }

    // Configure the transporter
    // Defaulting to Gmail, change service if using a different provider
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${EMAIL_USER}>`, // Sender address (must be the authenticated user for Gmail, but we set the "name")
      to: CONTACT_RECEIVER || EMAIL_USER, // Receiver
      replyTo: email, // If we click 'reply', it goes to the user who filled the form
      subject: `New Contact Form Submission: ${service || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send the email. Please try again later." },
      { status: 500 }
    );
  }
}
