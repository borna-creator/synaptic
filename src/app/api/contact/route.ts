import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error('Missing email configuration:', { toEmail, fromEmail });
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Get form data
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    try {
      // Send email using Resend
      const { data: emailData, error } = await resend.emails.send({
        from: 'Darshith <noreply@synapticflow.in>',
        to: 'Darshith078@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: 'Failed to send message. Please try again later.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Thank you for your message. We will get back to you soon!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'There was an error submitting your message. Please try again.' },
      { status: 500 }
    );
  }
} 