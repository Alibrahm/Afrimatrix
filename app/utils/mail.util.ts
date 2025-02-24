import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true, // Use SSL
  auth: {
    user: process.env.MAIL_USER, // Zoho email
    pass: process.env.MAIL_PASSWORD, // Zoho password or app-specific password
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  sender: Mail.Address; // { name: string; address: string }
  recipients: Mail.Address[]; // Array of { name: string; address: string }
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, recipients, subject, message } = dto;

  try {
    // Convert `Mail.Address` objects to proper strings
    const from = `"${sender.name}" <${sender.address}>`;
    const to = recipients
      .map((recipient) => `"${recipient.name}" <${recipient.address}>`)
      .join(", ");

    // Use the correct Nodemailer method
    const info = await transporter.sendMail({
      from, // Sender address
      to, // List of recipients
      subject, // Subject line
      text: message, // Plain text body
      html: message, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Accepted:", info.accepted); // Email addresses successfully sent
    console.log("Rejected:", info.rejected); // Email addresses that failed
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
