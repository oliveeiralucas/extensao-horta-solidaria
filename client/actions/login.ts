'use server'
import * as z from 'zod'

import { signIn } from '@root/auth'
import { LoginSchema } from '../schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@root/routes'
import { AuthError } from 'next-auth'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' }
  }

  const { email, password } = validatedFields.data

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
  return { success: 'Usuário criado!' }
}
