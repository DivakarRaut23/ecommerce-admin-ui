import React from 'react'

import PasswordResetForm from '../../password-reset-form/PasswordResetForm'

import "./passwordReset.style.css"

const PasswordReset = () => {
    return (
        <div className="password-reset-page bg-dark">
           <PasswordResetForm />
        </div>
    )
}

export default PasswordReset
