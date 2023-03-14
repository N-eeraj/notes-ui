import { useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Input from '@components/UI/input'

const login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const login = () => {
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <div>
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

                <button onClick={ login }>
                    Register
                </button>
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

export default login