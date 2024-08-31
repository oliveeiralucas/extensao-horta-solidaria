'use server'

import * as z from 'zod'
import { ResetSchema } from '@root/schemas'
import { getUserByEmail } from '@root/data/user'
import { sendPasswordResentEmail } from '@root/lib/mail'
import { generatePasswordResetToken } from '@root/lib/tokens'

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Email inválido!' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email não encontrado' }
  }

  const passwordResetToken = await generatePasswordResetToken(email)

  await sendPasswordResentEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )

  return { success: 'Email de recuperação enviado' }
}
