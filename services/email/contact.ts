import emailjs from "@emailjs/browser";

/**
 * Payload for a "Start your project" enquiry.
 *
 * The keys sent to EmailJS below MUST match the template variables exactly
 * (e.g. {{name}}, {{email}}, {{message}}). A single typo renders blank fields
 * in the delivered email — so treat these names as a contract with the
 * EmailJS template.
 */
export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/**
 * Send a contact enquiry through EmailJS.
 *
 * Throws if the EmailJS environment variables are missing or if the send
 * request fails, so callers can surface a meaningful error to the user.
 */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Check NEXT_PUBLIC_EMAILJS_* in .env.local.",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: payload.name,
      email: payload.email,
      company: payload.company,
      budget: payload.budget,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY },
  );
}
