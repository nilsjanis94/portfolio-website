import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration missing');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    try {
      await transporter.verify(); // Überprüft die SMTP-Verbindung
    } catch (verifyError) {
      console.error('SMTP Verification failed:', verifyError);
      throw new Error('SMTP connection failed');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nilsjanis@icloud.com',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Nachricht:
        ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 