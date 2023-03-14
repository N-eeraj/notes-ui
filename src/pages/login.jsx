import { useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Input from '@components/UI/input'
import Button from '@components/UI/button'

const login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const loginAction = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div className='main-container'>
            <div className='welcome'>
                <Text
                    type='title'
                    content='Welcome Back' />

                <Text content='Sign in to continue' />
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

                <Button
                    stateChanger={ loginAction }
                    text='Login' />
            </div>

            <div className='invite'>
                <Text content='New User?' />

                <Link
                    to='/register'
                    className='link'>
                    Register Here
                </Link>
            </div>
        </div>
    )
}

export default login