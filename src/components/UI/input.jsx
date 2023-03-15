import { useState } from 'react'

import '@styles/components/UI/input.css'

const Input = ({ stateChanger, type, placeholder, focus }) => {
    const [passwordVisiblity, setPasswordVisiblity] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisiblity(visibility => !visibility)
    }

    return (
        <div className='input-wrapper'>
            <input
                type={ passwordVisiblity ? 'text' : type }
                placeholder={ placeholder }
                onInput={ e => stateChanger(e.target.value) }
                autoFocus={ focus }
                className='custom-input' />
            {
                type === 'password' &&
                <button
                    className={ `password-toggle ${passwordVisiblity ? 'show' : 'hide'}`}
                    onClick={ togglePasswordVisibility } />
            }
        </div>
    )
}

export default Input