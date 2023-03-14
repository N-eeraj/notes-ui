import { useState } from 'react'

import Input from '@components/UI/input'
import Button from '@components/UI/button'
import Welcome from '@components/user-form/welcome'
import Invite from '@components/user-form/invite'

const register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const registerAction = () => {
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
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
                    stateChanger={ registerAction }
                    text='Register' />
            </div>

            <Invite
                prompt='Already have an account?'
                route='/login'
                linkText='Login' />
        </div>
    )
}

export default register