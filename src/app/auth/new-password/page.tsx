import NewPasswordForm from '@/components/auth/new-password-form'
import NewVerificationForm from '@/components/auth/new-verification-form'
import React from 'react'

const NewPasswordPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col gap-y-4 items-center justify-center primary-gradient">
        <NewPasswordForm />
    </main>
  )
}

export default NewPasswordPage