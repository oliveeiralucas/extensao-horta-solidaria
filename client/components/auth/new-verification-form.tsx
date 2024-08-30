'use client'

import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'

import { CardWrapper } from './card-wrapper'
import { useCallback, useEffect, useState } from 'react'
import { newVerification } from '@root/actions/new-verification'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParamns = useSearchParams()

  const token = searchParamns.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('Token não encontrado')
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Oops! algo deu errado!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirmando sua inscrição"
      backButtonHref="/auth/login"
      backButtonLabel="Voltar para login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}
