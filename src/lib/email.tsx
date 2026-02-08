import { company } from "@/data/company";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function generateContactEmail(data: FormData) {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #D4844C 0%, #B86A3A 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">${company.name}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Customer Details -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Customer Information</h2>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <span style="display: inline-block; width: 120px; color: #666; font-size: 14px; font-weight: 500;">Name:</span>
                          <span style="color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <span style="display: inline-block; width: 120px; color: #666; font-size: 14px; font-weight: 500;">Email:</span>
                          <a href="mailto:${data.email}" style="color: #D4844C; font-size: 14px; font-weight: 600; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      ${
                        data.phone
                          ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <span style="display: inline-block; width: 120px; color: #666; font-size: 14px; font-weight: 500;">Phone:</span>
                          <a href="tel:${data.phone}" style="color: #D4844C; font-size: 14px; font-weight: 600; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                      ${
                        data.service
                          ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <span style="display: inline-block; width: 120px; color: #666; font-size: 14px; font-weight: 500;">Service Interest:</span>
                          <span style="color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.service}</span>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                      <tr>
                        <td style="padding: 12px 0;">
                          <span style="display: inline-block; width: 120px; color: #666; font-size: 14px; font-weight: 500;">Submitted:</span>
                          <span style="color: #1a1a1a; font-size: 14px;">${timestamp}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Message -->
                <tr>
                  <td style="padding-top: 20px;">
                    <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Message</h2>
                    <div style="background-color: #f8f8f8; border-left: 4px solid #D4844C; padding: 20px; border-radius: 4px;">
                      <p style="margin: 0; color: #1a1a1a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 12px;">
                This email was sent from the contact form at <a href="https://eliteavdesigns.com" style="color: #D4844C; text-decoration: none;">${company.name}</a>
              </p>
              <p style="margin: 0; color: #999; font-size: 11px;">
                Reply directly to this email to respond to ${data.name}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
