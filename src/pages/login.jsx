import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@components/logo'
import Text from '@components/text'
import Input from '@components/input'

import style from '@styles/pages/login.css'

const login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const login = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div id='login'>
            <div className='logo'>
                <Logo />
            </div>

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
                    placeholder='Email Address' />

                <Input
                    stateChanger={ setPassword }
                    type='password'
                    placeholder='Password' />

                <button onClick={ login }>
                    Login
                </button>
            </div>

            <div className='invite'>
                <Text content='New User?' />

                <Link to='/register'>
                    Register Here
                </Link>
            </div>
        </div>
    )
}

export default login