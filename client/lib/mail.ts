import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendPasswordResentEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'dev@temporalle.co',
    to: email,
    subject: 'Resete sua senha',
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resete sua senha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #14a34a;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #14a34a;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            color: #ffffff;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin: 0 0 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-bottom: 10px;
            background-color: #14a34a;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Resete seu email</h1>
        </div>
        <div class="content">
            <p>Para resetar sua senha clique no botão abaixo</p>
            <a href="${resetLink}" class="button">Confirmar E-mail</a>
        </div>
    </div>
</body>
</html>`
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'dev@temporalle.co',
    to: email,
    subject: 'Confirm your email',
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de E-mail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #14a34a;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #14a34a;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            color: #ffffff;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin: 0 0 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-bottom: 10px;
            background-color: #14a34a;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Confirmação de E-mail</h1>
        </div>
        <div class="content">
            <p>Obrigado por se cadastrar! Para completar seu registro, por favor, confirme seu e-mail clicando no botão abaixo:</p>
            <a href="${confirmLink}" class="button">Confirmar E-mail</a>
            <p>Se você não se inscreveu em nossa plataforma, por favor ignore este e-mail.</p>
        </div>
    </div>
</body>
</html>
`
  })
}
