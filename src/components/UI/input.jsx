import { useState } from 'react'

import '@styles/components/input.css'

const input = ({ stateChanger, type, placeholder, focus }) => {
    return (
        <input
            type={ type }
            placeholder={ placeholder }
            onInput={ e => stateChanger(e.target.value) }
            autoFocus={ focus } />
    )
}

export default input