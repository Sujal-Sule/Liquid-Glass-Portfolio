import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;

  // Cache/Reuse a single SMTP connection pool for maximum performance
  let transporter: nodemailer.Transporter | null = null;

  if (gmailUser && gmailPass) {
    console.log("[Contact Form] Initializing persistent SMTP Connection Pool...");
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
      pool: true, // Enable connection pooling (reuses SMTP connection for sub-second delivery)
      maxConnections: 5,
      maxMessages: 100,
      connectionTimeout: 10000, 
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });
  } else {
    console.warn("[Contact Form] WARNING: GMAIL_USER or GMAIL_PASS is not configured. Setup environment variables to enable emails.");
  }

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`[Contact Form] Received contact request from: ${name} (${email})`);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required (Name, Email, Message)." });
    }

    const currentGmailUser = process.env.GMAIL_USER || gmailUser;
    const currentGmailPass = process.env.GMAIL_PASS || gmailPass;

    if (!currentGmailUser || !currentGmailPass) {
      console.error("[Contact Form] CRITICAL: SMTP credentials are not defined.");
      return res.status(500).json({ 
        error: "Email service is not configured on the server. Please check environment variables." 
      });
    }

    // Lazy load the pooled transporter if it wasn't initialized on startup
    if (!transporter) {
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: currentGmailUser,
          pass: currentGmailPass,
        },
        pool: true,
        maxConnections: 5,
        maxMessages: 100,
        connectionTimeout: 10000, 
        greetingTimeout: 10000,
        socketTimeout: 10000,
      });
    }

    try {
      const mailOptions = {
        from: `"${name}" <${currentGmailUser}>`,
        to: currentGmailUser,
        subject: `🚀 New Portfolio Message from ${name}`,
        text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Portfolio Message</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #050505; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0d0d0d; border: 1px solid #222222; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);">
                    <tr>
                      <td style="background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%); padding: 30px; border-bottom: 1px solid #222222; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">Sujal Sule</h1>
                        <p style="margin: 5px 0 0 0; font-size: 14px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Liquid Glass Portfolio</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h2 style="margin-top: 0; margin-bottom: 20px; font-size: 20px; font-weight: 600; color: #ffffff;">New Message Received</h2>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                          <tr>
                            <td width="120" style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #888888; border-bottom: 1px solid #1a1a1a;">Sender Name</td>
                            <td style="padding: 10px 0 10px 10px; font-size: 14px; color: #ffffff; border-bottom: 1px solid #1a1a1a;">${name}</td>
                          </tr>
                          <tr>
                            <td width="120" style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #888888; border-bottom: 1px solid #1a1a1a;">Email Address</td>
                            <td style="padding: 10px 0 10px 10px; font-size: 14px; color: #3b82f6; border-bottom: 1px solid #1a1a1a;">
                              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                        </table>
                        <div style="background-color: #121212; border: 1px solid #222222; border-radius: 12px; padding: 24px; margin-top: 20px;">
                          <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Message</p>
                          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e5e5e5; white-space: pre-wrap;">${message}</p>
                        </div>
                        <div style="margin-top: 30px; text-align: center;">
                          <a href="mailto:${email}" style="display: inline-block; background-color: #ffffff; color: #000000; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 30px; text-decoration: none;">Reply Direct</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #080808; padding: 20px 30px; border-top: 1px solid #1a1a1a; text-align: center; font-size: 12px; color: #555555;">
                        <p style="margin: 0 0 5px 0;">This email was sent automatically from your portfolio site: sujalsule.in</p>
                        <p style="margin: 0;">&copy; 2026 Sujal Sule. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
        replyTo: email,
      };

      // Send mail directly over pooled connection without adding round-trips via verify()
      const info = await transporter.sendMail(mailOptions);
      console.log("[Contact Form] Email sent successfully in background:", info.messageId);
      res.json({ success: true, message: "Your message has been sent successfully!" });
    } catch (error: any) {
      console.error("[Contact Form] Error sending email:", error);
      
      let errorMessage = "Failed to send email. ";
      if (error.code === 'EAUTH') {
        errorMessage += "Authentication failed. Check your App Password. IMPORTANT: You MUST use a 16-character 'App Password' from Google Account settings if 2FA is on.";
      } else if (error.code === 'ECONNECTION') {
        errorMessage += "Connection timed out. Gmail's SMTP server might be unreachable from this network context or port 465 is blocked.";
      } else if (error.command === 'CONN') {
        errorMessage += "Network connection error. Try using service 'gmail' instead of explicit host.";
      } else {
        errorMessage += error.message || "An unexpected error occurred.";
      }
      
      res.status(500).json({ error: errorMessage });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
