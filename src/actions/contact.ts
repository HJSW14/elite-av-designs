"use server";

import { Resend } from "resend";
import { generateContactEmail } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields" };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Invalid email address" };
    }

    // Generate email HTML
    const html = generateContactEmail(data);

    // Send email to Javier and Tyler
    const result = await resend.emails.send({
      from: "Elite AV Designs <contact@eliteavdesigns.com>",
      to: [
        "javier@eliteavdesigns.com",
        "tyler@eliteavdesigns.com",
      ],
      subject: `New Contact Form: ${data.name}${data.service ? ` - ${data.service}` : ""}`,
      html,
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
