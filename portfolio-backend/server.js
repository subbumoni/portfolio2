// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// //  MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Atlas connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// //  Schema + Model
// const MessageSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now },
// });
// const Message = mongoose.model("Message", MessageSchema);

// //  Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail", // Or use SMTP
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// //  API route
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Save to DB
//     const newMsg = new Message({ name, email, message });
//     await newMsg.save();

//     // Send email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // send to your email
//       subject: "New Contact Form Message",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     res.json({ success: true, message: "Message sent & saved!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// });

// //  Start server
// const PORT = 5001;
// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );














const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const Subscriber = require("./models/Subscriber");  // ✅ Import subscriber model

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Subscribe API
app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    // Save in DB
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.json({ message: "Subscribed Successfully! ✅" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already subscribed!" });
    }

    console.error("Subscribe Error:", error);
    res.status(500).json({ message: "Server Error, try again later" });
  }
});

// ✅ Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ success: true, message: "Message Sent Successfully!" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
