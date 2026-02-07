import "dotenv/config";
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Contact form handler
async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  // Configure transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"DK-OctoBot Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Recipient
    replyTo: data.email, // Customer's email for easy reply
    subject: `New Contact Form Submission from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #083D77;">New Contact Form Submission</h2>
  <hr style="border: 1px solid #4CC9F0;" />
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
  <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
  <hr style="border: 1px solid #eee;" />
  <h3 style="color: #4682B4;">Message:</h3>
  <p style="white-space: pre-wrap;">${data.message}</p>
</div>
    `,
  });

  console.log("Message sent: %s", info.messageId);
  return info;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // API endpoint for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and message are required.",
        });
      }

      // Check if SMTP is configured
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("SMTP credentials not configured!");
        return res.status(500).json({
          success: false,
          error: "Email service not configured. Please contact us directly.",
        });
      }

      await sendContactEmail({ name, email, phone, message });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        error: "Failed to send email. Please try again later.",
      });
    }
  });

  // API endpoint for chat with n8n
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;

      // Basic validation
      if (!message) {
        return res.status(400).json({
          success: false,
          error: "Message is required.",
        });
      }

      // Check if n8n webhook is configured
      const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
      if (!n8nWebhookUrl) {
        console.error("N8N_WEBHOOK_URL not configured!");
        return res.status(500).json({
          success: false,
          response: "عذراً، الخدمة غير متاحة حالياً. جرب تاني بعدين! 🙏",
        });
      }

      // Forward message to n8n webhook
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          sessionId: sessionId || `session_${Date.now()}`,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!n8nResponse.ok) {
        throw new Error(`n8n responded with status ${n8nResponse.status}`);
      }

      const n8nData = await n8nResponse.json();

      return res.status(200).json({
        success: true,
        response: n8nData.response || n8nData.message || n8nData.output || "تم استلام رسالتك! 👍",
        image: n8nData.image || null,
      });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      return res.status(500).json({
        success: false,
        response: "حصل مشكلة في الاتصال. جرب تاني! 🔄",
      });
    }
  });

  // API endpoint for voice chat with n8n
  app.post("/api/chat/voice", async (req, res) => {
    try {
      const { audio, sessionId } = req.body;

      // Basic validation
      if (!audio) {
        return res.status(400).json({
          success: false,
          error: "Audio is required.",
        });
      }

      // Check if n8n webhook is configured
      const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
      if (!n8nWebhookUrl) {
        console.error("N8N_WEBHOOK_URL not configured!");
        return res.status(500).json({
          success: false,
          response: "عذراً، الخدمة غير متاحة حالياً. جرب تاني بعدين! 🙏",
        });
      }

      // Forward voice message to n8n webhook
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "voice",
          audio: audio,
          sessionId: sessionId || `session_${Date.now()}`,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!n8nResponse.ok) {
        throw new Error(`n8n responded with status ${n8nResponse.status}`);
      }

      const n8nData = await n8nResponse.json();

      return res.status(200).json({
        success: true,
        response: n8nData.response || n8nData.message || n8nData.output || "تم استلام رسالتك الصوتية! 👍",
        image: n8nData.image || null,
        transcription: n8nData.transcription || null,
      });
    } catch (error) {
      console.error("Error in voice chat endpoint:", error);
      return res.status(500).json({
        success: false,
        response: "حصل مشكلة في إرسال الرسالة الصوتية. جرب تاني! 🔄",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
