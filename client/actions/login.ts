'use server'
import * as z from 'zod'

import { signIn } from '@root/auth'
import { LoginSchema } from '../schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@root/routes'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from '@root/lib/tokens'
import { getUserByEmail } from '@root/data/user'
import { sendVerificationEmail } from '@root/lib/mail'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' }
  }

  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email não cadastrado' }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )
    return { success: 'Email de confirmação enviado' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciais inválidas' }
        default:
          return { error: 'Algo deu errado' }
      }
    }
    throw error
  }
}
