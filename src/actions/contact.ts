"use server";

import { Resend } from "resend";
import { generateContactEmailHtml, generateContactEmailText } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

// From: contact@nextleveltow.com (or RESEND_FROM_EMAIL for testing)
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Next Level Towing <contact@nextleveltow.com>";

// To: who receives contact form submissions (comma-separated for multiple)
const TO_EMAILS = process.env.RESEND_TO_EMAIL
  ? process.env.RESEND_TO_EMAIL.split(",").map((e) => e.trim()).filter(Boolean)
  : ["nextleveltow@icloud.com"];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Extract and validate form data
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    // Honeypot - if filled, treat as bot
    if (formData.get("website")) {
      return { success: true }; // Silent success to not tip off bots
    }

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields" };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Invalid email address" };
    }

    const html = generateContactEmailHtml(data);
    const text = generateContactEmailText(data);

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      subject: `Contact form: ${data.name}${data.service ? ` (${data.service})` : ""}`,
      html,
      text,
      replyTo: data.email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: "Failed to send email" };
    }

    console.log("Email sent successfully:", result.data);
    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
