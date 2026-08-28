import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email regex guard
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ─── Option 1: Forward via Formspree ───────────────────────────────────────
    // Replace FORMSPREE_FORM_ID with your Formspree endpoint ID from formspree.io
    // Uncomment the block below and remove the console.log fallback.
    //
    // const formspreeId = process.env.FORMSPREE_FORM_ID;
    // if (formspreeId) {
    //   const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     body: JSON.stringify({ name, email, subject, message }),
    //   });
    //   if (!res.ok) {
    //     return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 502 });
    //   }
    //   return NextResponse.json({ success: true });
    // }

    // ─── Option 2: Send via Resend (transactional email API) ──────────────────
    // Install resend: npm install resend
    // Add RESEND_API_KEY to your .env file
    // Uncomment the block below.
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@freelancecalcsuite.online",
    //   to: "support@freelancecalcsuite.online",
    //   subject: `[Contact Form] ${subject} — from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    // });
    // return NextResponse.json({ success: true });

    // ─── Fallback: log to server console (for local dev / before wiring email) ─
    console.log("[Contact Form Submission]", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
