import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: ['arturocanodesigns@gmail.com'],
        subject: `New contact form submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 14px;">
              This message was sent from your portfolio contact form at ${new Date().toLocaleString()}.
            </p>
          </div>
        `,
        replyTo: email,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email');
      }

        console.log('Email sent successfully:', data);
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Fallback: log the message even if email fails
        console.log('Contact form submission (email failed):', {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        });
      }
    } else {
      // No API key, just log the message
      console.log('Contact form submission (no email service configured):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you ASAP.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
