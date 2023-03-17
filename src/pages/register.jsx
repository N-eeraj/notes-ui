import { useState } from 'react'
import { useNavigate } from 'react-router'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

import { emailValidator, passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import { toast } from '@toast'
import api from '@axios'
import saveToken from '@utils/saveToken'

const Register = () => {
    const navigate = useNavigate()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[loading, setLoading] = useState(false)

    const registerAPICall = async () => {
        setLoading(true)
        try {
            const { data } = await api.post('/register', {
                email,
                password,
                confirm_password: confirmPassword
            })
            if (!(data.success && data.token)) throw null
            toast.dismiss()
            toast.success(data.message)
            saveToken(data.token)
            navigate('/')
        }
        catch (err) {
            const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
            toast.error(message)
        }
        finally {
            setLoading(false)
        }
    }

    const validateInputs = () => {
        try {
            emailValidator(email)
            passwordValidator(password)
            newPasswordValidator(password)
            confirmPasswordValidator(confirmPassword, password)

            registerAPICall()
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