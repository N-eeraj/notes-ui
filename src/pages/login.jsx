import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

import { emailValidator, passwordValidator } from '@validators'

import { toast } from '@toast'
import api from '@axios'

const Login = () => {
    const navigate = useNavigate()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[loading, setLoading] = useState(false)

    const loginAPICall = async () => {
        setLoading(true)
        try {
            const { data } = await api.post('/login', {
                email,
                password
            })
            if (!data.success) throw null
            localStorage.setItem('authToken', data.token)
            toast.success(data.message)
            navigate('/')
        }
        catch (err) {
            const message = err?.response ? err?.response?.data?.message : 'Oops something went wrong'
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

            loginAPICall()
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <Fragment>
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
                        stateChanger={ validateInputs }
                        text='Login'
                        loading={ loading } />
                </div>

                <Invite
                    prompt='New User?'
                    route='/register'
                    linkText='Register Here' />
            </div>
        </Fragment>
    )
}

export default Login