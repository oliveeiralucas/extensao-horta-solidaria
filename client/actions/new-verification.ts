'use server'

import { db } from '@root/lib/db'
import { getUserByEmail } from '@root/data/user'
import { getVerificationTokenByToken } from '@root/data/verification-token'

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return { error: 'Token não existe' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token de acesso expirado'}
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: "Email não cadastrado"}
  }

  await db.user.update({
    where: {id: existingUser.id},
    data:{
        emailVerified: new Date(),
        email: existingToken.email
    }
  })

  await db.verificationToken.delete({
    where: { id: existingToken.id}
  })

  return { success: "Email verificado!"}
}
