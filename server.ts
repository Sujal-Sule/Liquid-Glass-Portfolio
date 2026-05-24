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
        from: `"${name}" <${currentGmailUser}>`, // Must be from the gmail user for Gmail SMTP
        to: currentGmailUser, // Sending to yourself
        subject: `🚀 New Portfolio Message from ${name}`,
        text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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
