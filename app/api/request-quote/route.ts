export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { Resend } = await import("resend");

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.QUOTE_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const { name, email, phone, business, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Cloakstone Quote <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Business:</strong> ${business || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Quote request error:", error);

    return Response.json(
      { error: "Failed to send quote request." },
      { status: 500 }
    );
  }
}