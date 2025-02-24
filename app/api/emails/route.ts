import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/utils/mail.util";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    const sender = {
      name: "BullutMaitha",
      address: process.env.ZOHO_EMAIL ?? "superadmin@bullutmaitha.co.ke",
    };


    const recipients = [
      {
        name: "Bullut Maitha",
        address: "superadmin@bullutmaitha.co.ke",
        // address: "alibra71@gmail.com",
      },
    ];

    // Email subject
    const subject = `📩 New Contact Form Submission from ${name}`;

    // Styled HTML email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #333;">
          <strong>Name:</strong> ${name} <br/>
          <strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a> <br/>
          <strong>Phone:</strong> <a href="tel:${phone}" style="color: #27ae60;">${phone}</a> <br/>
        </p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px;">
          <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">${message}</p>
        </div>
        <p style="font-size: 14px; color: #888; margin-top: 20px;">Sent from the BullutMaitha Webpage Contact Form</p>
      </div>
    `;

    // Send email using `sendEmail` utility
    const result = await sendEmail({
      sender,
      recipients,
      subject,
      message: emailContent, // Use HTML content
    });

    return NextResponse.json({ success: true, accepted: result.accepted });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
