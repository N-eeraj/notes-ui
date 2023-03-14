import { Fragment, useState } from 'react'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'
import Decoration from '@components/user-form/decoration'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const loginAction = () => {
        console.log(email)
        console.log(password)
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
                        stateChanger={ loginAction }
                        text='Login' />
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