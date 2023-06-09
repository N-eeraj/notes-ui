import { useState } from 'react'
import { useNavigate } from 'react-router'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

import { emailValidator, passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'
import useSaveToken from '@hooks/useSaveToken'

const Register = () => {
    const navigate = useNavigate()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[loading, setLoading] = useState(false)

    const handleRegister = ({ message, token }) => {
        toast.dismiss()
        toast.success(message)
        useSaveToken(token)
        navigate('/')
    }

    const validateInputs = () => {
        try {
            emailValidator(email)
            passwordValidator(password)
            newPasswordValidator(password)
            confirmPasswordValidator(confirmPassword, password)

            useAxios({
                method: 'post',
                url: '/register',
                body: {
                    email,
                    password,
                    confirm_password: confirmPassword
                },
                setLoading,
                successCallBack: handleRegister
            })
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <>
            <div className='main-container'>
                <Welcome
                    title='Welcome'
                    text='Sign up to continue' />

                <div className='form'>
                    <Input
                        value={ email }
                        stateChanger={ setEmail }
                        type='email'
                        placeholder='Email Address'
                        focus={ true } />

                    <Input
                        value={ password }
                        stateChanger={ setPassword }
                        type='password'
                        placeholder='Password' />

                    <Input
                        value={ confirmPassword }
                        stateChanger={ setConfirmPassword }
                        type='password'
                        placeholder='Confirm Password' />

                    <Button
                        buttonClick={ validateInputs }
                        text='Register'
                        loading={ loading }
                        className='submit' />
                </div>

                <Invite
                    prompt='Already have an account?'
                    route='/login'
                    linkText='Login' />
            </div>

            <Decoration imagePath='/images/decorator/register.svg' />
        </>
    )
}

export default Register