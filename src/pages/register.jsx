import { Fragment, useState } from 'react'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

import { emailValidator, passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import { toast } from 'react-toastify'

const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const validateInputs = () => {
        try {
            emailValidator(email)
            passwordValidator(password)
            newPasswordValidator(password)
            confirmPasswordValidator(confirmPassword, password)
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <Fragment>
            <div className='main-container'>
                <Welcome
                    title='Welcome'
                    text='Sign up to continue' />

                <div className='form'>
                    <Input
                        stateChanger={ setEmail }
                        type='email'
                        placeholder='Email Address'
                        focus={ true } />

                    <Input
                        stateChanger={ setPassword }
                        type='password'
                        placeholder='Password' />

                    <Input
                        stateChanger={ setConfirmPassword }
                        type='password'
                        placeholder='Confirm Password' />

                    <Button
                        stateChanger={ validateInputs }
                        text='Register' />
                </div>

                <Invite
                    prompt='Already have an account?'
                    route='/login'
                    linkText='Login' />
            </div>

            <Decoration imagePath='/images/decorator/register.svg' />
        </Fragment>
    )
}

export default Register