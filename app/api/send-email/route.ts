import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await request.json()

    // Validation des champs requis
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Pour l'instant, on simule l'envoi d'email
    // En production, vous pouvez utiliser un service comme EmailJS, SendGrid, ou Resend
    console.log('Nouveau message de contact reçu:')
    console.log('Nom:', firstName, lastName)
    console.log('Email:', email)
    console.log('Entreprise:', company)
    console.log('Sujet:', subject)
    console.log('Message:', message)

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Message reçu avec succès! Je vous répondrai bientôt.' },
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
