# Configuration de l'envoi d'emails

## Configuration actuelle

Le formulaire de contact est configuré pour envoyer les messages à votre email personnel : **Ussama9baili@gmail.com**

## Options pour l'envoi d'emails

### Option 1: EmailJS (Recommandé - Simple et gratuit)
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Remplacez le code dans `app/api/send-email/route.ts` par :

```typescript
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

    // Configuration EmailJS
    const emailData = {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      template_params: {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        company: company || 'Non spécifié',
        subject: subject,
        message: message,
        to_email: 'Ussama9baili@gmail.com'
      }
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email envoyé avec succès' },
        { status: 200 }
      )
    } else {
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
```

### Option 2: Resend (Moderne et fiable)
1. Créez un compte sur [Resend](https://resend.com/)
2. Installez le package : `npm install resend`
3. Remplacez le code par :

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await request.json()

    await resend.emails.send({
      from: 'Portfolio <noreply@votre-domaine.com>',
      to: ['Ussama9baili@gmail.com'],
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non spécifié'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.json({ message: 'Email envoyé avec succès' })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
  }
}
```

### Option 3: SendGrid
1. Créez un compte sur [SendGrid](https://sendgrid.com/)
2. Installez le package : `npm install @sendgrid/mail`
3. Configurez avec votre clé API

## Configuration actuelle

Pour l'instant, le formulaire :
- ✅ Valide les champs requis
- ✅ Affiche un message de succès
- ✅ Réinitialise le formulaire après envoi
- ✅ Affiche les erreurs si nécessaire
- ⚠️ Affiche les messages dans la console (pour le développement)

## Test

Pour tester le formulaire :
1. Remplissez tous les champs requis
2. Cliquez sur "Send Message"
3. Vérifiez la console pour voir les données du message
4. Le formulaire devrait se réinitialiser et afficher un message de succès
