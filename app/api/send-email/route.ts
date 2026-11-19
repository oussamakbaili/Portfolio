import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = (process.env.CONTACT_EMAIL || 'ussama9baili@gmail.com').toLowerCase()
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await request.json()

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY manquante')
      return NextResponse.json(
        { error: "Configuration email manquante. Ajoutez RESEND_API_KEY." },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const safeFirstName = escapeHtml(String(firstName))
    const safeLastName = escapeHtml(String(lastName))
    const safeEmail = escapeHtml(String(email))
    const safeCompany = escapeHtml(String(company || 'Non spécifié'))
    const safeSubject = escapeHtml(String(subject))
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br>')

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio — ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="color: #0f766e;">Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Entreprise :</strong> ${safeCompany}</p>
          <p><strong>Sujet :</strong> ${safeSubject}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        {
          error: "Erreur lors de l'envoi de l'email",
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès. Je vous répondrai bientôt.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors du traitement du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement du message' },
      { status: 500 }
    )
  }
}
