import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, service, message } = await request.json();

    // Basic validation
    if (!firstName || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name and Message)." },
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
      from: `"${firstName}${lastName ? " " + lastName : ""}" <${EMAIL_USER}>`,
      to: CONTACT_RECEIVER || EMAIL_USER,
      ...(email && { replyTo: email }),
      subject: `New Contact Form Submission: ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0f3048; border-bottom: 2px solid #ff6017; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName}${lastName ? " " + lastName : ""}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #0f3048;">Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
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
