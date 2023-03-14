import { useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Input from '@components/UI/input'
import Button from '@components/UI/button'

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
            <div className='welcome'>
                <Text
                    type='title'
                    content='Welcome' />

                <Text content='Sign up to continue' />
            </div>

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

            <div className='invite'>
                <Text content='Already have an account?' />

                <Link
                    to='/login'
                    className='link'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default register