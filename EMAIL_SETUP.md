# Configuration de l'envoi d'emails

Les messages du formulaire de contact sont envoyés à **Ussama9baili@gmail.com** via [Resend](https://resend.com/).

## Setup (local + Vercel)

1. Crée un compte sur [resend.com](https://resend.com/) avec **Ussama9baili@gmail.com**
2. Crée une API key : [resend.com/api-keys](https://resend.com/api-keys)
3. En local, crée `.env.local` :

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=Ussama9baili@gmail.com
RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

4. Sur Vercel : Project → Settings → Environment Variables → ajoute les mêmes variables
5. Redéploie le site

## Notes

- Avec `onboarding@resend.dev`, Resend n'envoie qu'à l'email du compte (ton Gmail). C'est suffisant pour recevoir les messages du portfolio.
- Pour envoyer depuis ton propre domaine plus tard, vérifie le domaine dans Resend et change `RESEND_FROM_EMAIL`.
- Le bouton "Reply" dans Gmail répondra directement au client (`replyTo`).
