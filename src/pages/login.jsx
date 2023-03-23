import { useState } from 'react'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

import { emailValidator, passwordValidator } from '@validators'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'
import useSaveToken from '@hooks/useSaveToken'

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[loading, setLoading] = useState(false)

    const handleLogin = ({ message, token }) => {
        toast.dismiss()
        toast.success(message)
        useSaveToken(token)
    }
    
    const validateInputs = () => {
        try {
            emailValidator(email)
            passwordValidator(password)

            useAxios({
                method: 'post',
                url: '/login',
                body: {
                    email,
                    password
                },
                setLoading,
                successCallBack: handleLogin
            })
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <>
            <Decoration imagePath='/images/decorator/login.svg' />

            <div className='main-container'>
                <Welcome
                    title='Welcome Back'
                    text='Sign in to continue' />

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

                    <Button
                        buttonClick={ validateInputs }
                        text='Login'
                        loading={ loading }
                        className='submit' />
                </div>

                <Invite
                    prompt='New User?'
                    route='/register'
                    linkText='Register Here' />
            </div>
        </>
    )
}

export default Login