import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to handle preflight requests (CORS)
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, message, isPasswordRequest } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const subject = isPasswordRequest
      ? `Password Access Request from ${name}`
      : `New Contact Form Submission from ${name}`;

    const messageContent = isPasswordRequest
      ? `<p><strong>${name}</strong> is requesting password access.</p><p>Email: ${email}</p><p>Please send them the password at your earliest convenience.</p>`
      : `<div class="message-box">${message}</div>`;

    const mailOptions = {
      from: `Vtolution <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECEIVE,
      subject: subject,
      html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Arial', sans-serif;
                            background-color: #f4f4f4;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            overflow: hidden;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background: linear-gradient(135deg, #5386fd 0%, #4F46E5 100%);
                            padding: 30px 20px;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            color: #ffffff;
                            font-size: 28px;
                            font-weight: bold;
                            letter-spacing: 0.1em;
                        }
                        .header p {
                            margin: 10px 0 0 0;
                            color: #e0e7ff;
                            font-size: 14px;
                        }
                        .content {
                            padding: 40px 30px;
                        }
                        .field {
                            margin-bottom: 25px;
                        }
                        .field-label {
                            display: block;
                            font-size: 12px;
                            font-weight: bold;
                            color: #5386fd;
                            text-transform: uppercase;
                            letter-spacing: 0.05em;
                            margin-bottom: 8px;
                        }
                        .field-value {
                            display: block;
                            font-size: 16px;
                            color: #333333;
                            line-height: 1.6;
                            padding: 12px;
                            background-color: #f8fafc;
                            border-left: 3px solid #5386fd;
                            border-radius: 4px;
                        }
                        .message-box {
                            background-color: #f8fafc;
                            border-left: 3px solid #5386fd;
                            padding: 15px;
                            border-radius: 4px;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        }
                        .footer {
                            background-color: #242424;
                            padding: 20px;
                            text-align: center;
                            border-top: 3px solid #5386fd;
                        }
                        .footer p {
                            margin: 5px 0;
                            color: #e7e7e7;
                            font-size: 12px;
                        }
                        .reply-button {
                            display: inline-block;
                            margin-top: 20px;
                            padding: 12px 30px;
                            background-color: #5386fd;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 6px;
                            font-weight: bold;
                            transition: background-color 0.3s;
                        }
                        .reply-button:hover {
                            background-color: #4F46E5;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>VTOLUTION</h1>
                            <p>New Contact Form Submission</p>
                        </div>
                        
                        <div class="content">
                            <div class="field">
                                <span class="field-label">From</span>
                                <span class="field-value">${name}</span>
                            </div>
                            
                            <div class="field">
                                <span class="field-label">Email Address</span>
                                <span class="field-value">
                                    <a href="mailto:${email}" style="color: #5386fd; text-decoration: none;">${email}</a>
                                </span>
                            </div>
                            
                            <div class="field">
                                <span class="field-label">Message</span>
                                ${messageContent}
                            </div>
                            
                            <div style="text-align: center;">
                                <a href="mailto:${email}" class="reply-button">Reply to ${name}</a>
                            </div>
                        </div>
                        
                        <div class="footer">
                            <p><strong>VTOLUTION Ltd.</strong></p>
                            <p>Manchester Science Park | Manchester, UK M15 6SE</p>
                            <p style="margin-top: 10px; color: #a0a0a0;">
                                This is an automated message from your website contact form.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
