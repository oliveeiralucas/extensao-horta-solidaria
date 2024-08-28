/*
 * Realiza a validação dos dados do front-end e do back-end
 */

import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email obrigatório'
  }),
  password: z.string().min(1, { message: 'Senha é obrigatório' })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email obrigatório'
  }),
  password: z.string().min(6, { message: 'Senha muito fraca' }),
  name: z.string({ message: 'Nome obrigatório' })
})
