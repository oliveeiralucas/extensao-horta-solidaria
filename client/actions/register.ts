'use server'
import bcrypt from 'bcryptjs'
import * as z from 'zod'

import { db } from '../lib/db'
import { RegisterSchema } from '../schemas'
import { getUserByEmail } from '../data/user'
import { generateVerificationToken } from '@root/lib/tokens'
import { sendVerificationEmail } from '@root/lib/mail'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' }
  }

  const { email, password, name } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email já registrado' }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return {
    success:
      'Acabamos de enviar uma confirmação de cadastro por email para você '
  }
}
