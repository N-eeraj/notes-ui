import { useState } from 'react'
import Input from '@components/input'

const login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const login = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <Input
                stateChanger={ setEmail }
                type="email"
                placeholder="Email Address" />

            <Input
                stateChanger={ setPassword }
                type="password"
                placeholder="Password" />

            <button onClick={ login }>
                Login
            </button>
        </div>
    )
}

export default login